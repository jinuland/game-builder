"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Html, OrbitControls, Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/addons/utils/SkeletonUtils.js";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { GameState, Tile } from "@/lib/web-game";
import type { HeroClass } from "./character-stage";

const WORLD_CENTER = 16;
const MAX_SPEED = 3;
const ACCELERATION = 9;
const DECELERATION = 12;

const modelByClass = {
  Knight: "/models/kaykit/Knight.glb",
  Barbarian: "/models/kaykit/Barbarian.glb",
  Rogue: "/models/kaykit/Rogue_Hooded.glb",
  Arcanist: "/models/kaykit/Mage.glb",
} as const;

function AnimatedHero({ model, position, scale = .55, tint }: { model: string; position: [number, number, number]; scale?: number; tint?: string }) {
  const group = useRef<THREE.Group>(null);
  const gltf = useGLTF(model);
  const scene = useMemo(() => cloneSkeleton(gltf.scene), [gltf.scene]);
  const { actions } = useAnimations(gltf.animations, group);
  useEffect(() => {
    scene.traverse((node) => {
      if (!(node instanceof THREE.Mesh)) return;
      node.castShadow = true;
      node.receiveShadow = true;
      if (tint && node.material instanceof THREE.MeshStandardMaterial) {
        node.material = node.material.clone();
        node.material.emissive = new THREE.Color(tint);
        node.material.emissiveIntensity = .08;
      }
    });
    const idle = actions.Idle;
    idle?.reset().fadeIn(.25).play();
    return () => { idle?.fadeOut(.2); };
  }, [actions, scene, tint]);
  return <group ref={group} position={position} scale={scale} rotation={[0, Math.PI * .72, 0]}><primitive object={scene} /></group>;
}

function PlayerController({
  game,
  heroClass,
  controlsRef,
  onPositionChange,
}: {
  game: GameState;
  heroClass: HeroClass;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  onPositionChange: (x: number, y: number) => void;
}) {
  const root = useRef<THREE.Group>(null);
  const modelRoot = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelByClass[heroClass]);
  const scene = useMemo(() => cloneSkeleton(gltf.scene), [gltf.scene]);
  const { actions } = useAnimations(gltf.animations, modelRoot);
  const { camera } = useThree();
  const keys = useRef(new Set<string>());
  const speed = useRef(0);
  const activeAnimation = useRef<THREE.AnimationAction | null>(null);
  const lastTile = useRef({ x: game.player.x, y: game.player.y });
  const targetDirection = useMemo(() => new THREE.Vector3(), []);
  const velocity = useMemo(() => new THREE.Vector3(), []);
  const cameraShift = useMemo(() => new THREE.Vector3(), []);

  const playAnimation = (name: "idle" | "run") => {
    const next = name === "run"
      ? actions.Running_A ?? actions.Walking_A
      : actions.Idle;
    if (!next || activeAnimation.current === next) return;
    activeAnimation.current?.fadeOut(.18);
    next.reset().fadeIn(.18).play();
    activeAnimation.current = next;
  };

  useEffect(() => {
    scene.traverse((node) => {
      if (!(node instanceof THREE.Mesh)) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
    playAnimation("idle");
    return () => { activeAnimation.current?.fadeOut(.15); };
  // The cloned scene and animation map change together with the selected model.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, actions]);

  useEffect(() => {
    const movementCodes = new Set(["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
    const down = (event: KeyboardEvent) => {
      if (!movementCodes.has(event.code)) return;
      event.preventDefault();
      keys.current.add(event.code);
    };
    const up = (event: KeyboardEvent) => {
      if (!movementCodes.has(event.code)) return;
      event.preventDefault();
      keys.current.delete(event.code);
    };
    const clear = () => keys.current.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", clear);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", clear);
    };
  }, []);

  useFrame((_, rawDelta) => {
    const player = root.current;
    if (!player) return;
    const delta = Math.min(rawDelta, .05);
    let inputX = 0;
    let inputZ = 0;
    if (keys.current.has("KeyW") || keys.current.has("ArrowUp")) inputZ -= 1;
    if (keys.current.has("KeyS") || keys.current.has("ArrowDown")) inputZ += 1;
    if (keys.current.has("KeyA") || keys.current.has("ArrowLeft")) inputX -= 1;
    if (keys.current.has("KeyD") || keys.current.has("ArrowRight")) inputX += 1;
    const hasInput = inputX !== 0 || inputZ !== 0;

    if (hasInput) {
      targetDirection.set(inputX, 0, inputZ).normalize();
      speed.current = Math.min(MAX_SPEED, speed.current + ACCELERATION * delta);
    } else {
      speed.current = Math.max(0, speed.current - DECELERATION * delta);
    }

    if (speed.current > .01 && (hasInput || velocity.lengthSq() > 0)) {
      if (hasInput) velocity.lerp(targetDirection, 1 - Math.exp(-14 * delta)).normalize();
      const distance = speed.current * delta;
      const nextX = player.position.x + velocity.x * distance;
      const nextZ = player.position.z + velocity.z * distance;
      const tileX = Math.round(nextX + WORLD_CENTER);
      const tileY = Math.round(nextZ + WORLD_CENTER);
      const blocked = tileX < 0 || tileY < 0 || tileX > 31 || tileY > 31 || game.tiles[tileY]?.[tileX]?.blocked;

      if (!blocked) {
        cameraShift.set(nextX - player.position.x, 0, nextZ - player.position.z);
        player.position.x = nextX;
        player.position.z = nextZ;
        camera.position.add(cameraShift);
        if (controlsRef.current) {
          controlsRef.current.target.add(cameraShift);
          controlsRef.current.update();
        }
        if (tileX !== lastTile.current.x || tileY !== lastTile.current.y) {
          lastTile.current = { x: tileX, y: tileY };
          onPositionChange(tileX, tileY);
        }
      } else {
        speed.current = 0;
      }
      const targetYaw = Math.atan2(velocity.x, velocity.z);
      player.rotation.y = THREE.MathUtils.damp(player.rotation.y, targetYaw, 15, delta);
    }
    playAnimation(speed.current > .18 ? "run" : "idle");
  });

  return <group ref={root} position={[game.player.x - WORLD_CENTER, .04, game.player.y - WORLD_CENTER]}>
    <group ref={modelRoot} scale={.58}><primitive object={scene} /></group>
    <Html position={[0, 1.75, 0]} center distanceFactor={10}><div className="worldName playerName">{game.player.name}<small>{heroClass}</small></div></Html>
  </group>;
}

function Tree({ x, z, variant }: { x: number; z: number; variant: number }) {
  const height = 1.1 + variant * .15;
  return <group position={[x, .08, z]} rotation={[0, variant * 2.1, 0]}>
    <mesh castShadow position={[0, height * .34, 0]}><cylinderGeometry args={[.09, .13, height * .68, 7]} /><meshStandardMaterial color="#382c25" roughness={1} /></mesh>
    <mesh castShadow position={[0, height * .78, 0]}><coneGeometry args={[.48 + variant * .05, height * .72, 8]} /><meshStandardMaterial color={variant > .55 ? "#244f43" : "#193f36"} roughness={.92} /></mesh>
    <mesh castShadow position={[.12, height * .92, -.05]}><coneGeometry args={[.32, height * .5, 7]} /><meshStandardMaterial color="#2d6250" roughness={.9} /></mesh>
  </group>;
}

function Ruin({ x, z, seed }: { x: number; z: number; seed: number }) {
  return <group position={[x, .08, z]} rotation={[0, seed * 1.7, 0]}>
    <mesh castShadow receiveShadow position={[-.2, .3, 0]}><boxGeometry args={[.25, .6 + seed * .35, .25]} /><meshStandardMaterial color="#4b5550" roughness={.85} /></mesh>
    <mesh castShadow receiveShadow position={[.18, .18, .05]} rotation={[0, 0, .22]}><boxGeometry args={[.26, .36, .28]} /><meshStandardMaterial color="#343e3a" roughness={.9} /></mesh>
    <mesh position={[-.2, .64 + seed * .16, 0]}><sphereGeometry args={[.045, 8, 8]} /><meshStandardMaterial color="#6de7c2" emissive="#35bd9c" emissiveIntensity={3} /></mesh>
  </group>;
}

function Crystal({ x, z, memory }: { x: number; z: number; memory: boolean }) {
  const color = memory ? "#ffd774" : "#61e1a8";
  return <group position={[x, .28, z]}>
    <mesh castShadow rotation={[0, .4, .22]}><octahedronGeometry args={[.12, 0]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.6} metalness={.2} roughness={.2} /></mesh>
    <pointLight color={color} intensity={2.8} distance={1.4} />
  </group>;
}

function TileMesh({ tile, x, z, seed, resource }: { tile: Tile; x: number; z: number; seed: number; resource: boolean }) {
  const colors = { moss: "#173d31", meadow: "#28523e", water: "#143e54", ruins: "#39433f", ember: "#56362d" } as const;
  const height = tile.kind === "water" ? -.13 : Math.sin(seed * 17) * .035;
  const nature = seed > .62 && (tile.kind === "moss" || tile.kind === "meadow");
  return <group>
    <mesh receiveShadow position={[x, height - .12, z]}>
      <boxGeometry args={[.98, tile.kind === "water" ? .12 : .24, .98]} />
      <meshStandardMaterial color={colors[tile.kind]} roughness={tile.kind === "water" ? .2 : .92} metalness={tile.kind === "water" ? .18 : 0} transparent={tile.kind === "water"} opacity={tile.kind === "water" ? .82 : 1} />
    </mesh>
    {tile.kind === "water" && <mesh position={[x, .005, z]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[.88, .88]} /><meshPhysicalMaterial color="#287a91" transparent opacity={.23} roughness={.1} transmission={.2} /></mesh>}
    {nature && <Tree x={x + .18} z={z - .12} variant={seed} />}
    {tile.kind === "ruins" && seed > .46 && <Ruin x={x} z={z} seed={seed} />}
    {resource && tile.resource && <Crystal x={x} z={z} memory={tile.resource === "memory"} />}
  </group>;
}

function MistBeast({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => { if (ref.current) ref.current.position.y = .28 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * .08; });
  return <group ref={ref} position={position}>
    <mesh castShadow><icosahedronGeometry args={[.28, 1]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={.35} roughness={.48} /></mesh>
    <mesh position={[-.09, .05, .23]}><sphereGeometry args={[.032, 8, 8]} /><meshBasicMaterial color="#ffd977" /></mesh>
    <mesh position={[.09, .05, .23]}><sphereGeometry args={[.032, 8, 8]} /><meshBasicMaterial color="#ffd977" /></mesh>
  </group>;
}

function Scene({ game, heroClass, onPositionChange }: { game: GameState; heroClass: HeroClass; onPositionChange: (x: number, y: number) => void }) {
  const radius = 8;
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const tiles = [];
  for (let y = Math.max(0, game.player.y - radius); y <= Math.min(31, game.player.y + radius); y += 1) {
    for (let x = Math.max(0, game.player.x - radius); x <= Math.min(31, game.player.x + radius); x += 1) {
      const tile = game.tiles[y][x];
      const localX = x - WORLD_CENTER;
      const localZ = y - WORLD_CENTER;
      const seed = ((x * 92821 + y * 68917 + game.seed) % 1000) / 1000;
      const key = `${x}:${y}`;
      tiles.push(<TileMesh key={key} tile={tile} x={localX} z={localZ} seed={seed} resource={!game.collected.includes(key)} />);
    }
  }
  return <>
    <color attach="background" args={["#0a211c"]} />
    <fog attach="fog" args={["#0a211c", 9, 21]} />
    <ambientLight intensity={.9} color="#a5cfc0" />
    <hemisphereLight args={["#b9e8d7", "#07100d", 1.8]} />
    <directionalLight castShadow position={[-5, 9, 6]} intensity={4.2} color="#e3fff4" shadow-mapSize={[2048, 2048]} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />
    <pointLight position={[2, 3, 2]} intensity={5} distance={8} color="#72d6be" />
    {tiles}
    <Suspense fallback={null}>
      <PlayerController game={game} heroClass={heroClass} controlsRef={controlsRef} onPositionChange={onPositionChange} />
      {game.agents.map((agent, index) => {
        const x = agent.x - WORLD_CENTER, z = agent.y - WORLD_CENTER;
        if (Math.abs(agent.x - game.player.x) > radius || Math.abs(agent.y - game.player.y) > radius) return null;
        const model = [modelByClass.Rogue, modelByClass.Arcanist, modelByClass.Barbarian][index % 3];
        return <group key={agent.id}><AnimatedHero model={model} position={[x, .03, z]} scale={.48} tint={agent.color} /><mesh position={[x, 1.42, z]}><sphereGeometry args={[.055, 12, 12]} /><meshBasicMaterial color={agent.color} /></mesh><Html position={[x, 1.62, z]} center distanceFactor={11}><div className="worldName">{agent.name}<small>AI RESIDENT</small></div></Html></group>;
      })}
    </Suspense>
    {game.monsters.map((monster) => monster.hp > 0 && Math.abs(monster.x - game.player.x) <= radius && Math.abs(monster.y - game.player.y) <= radius
      ? <MistBeast key={monster.id} position={[monster.x - WORLD_CENTER, .28, monster.y - WORLD_CENTER]} color="#b75043" /> : null)}
    <ContactShadows position={[game.player.x - WORLD_CENTER, .02, game.player.y - WORLD_CENTER]} scale={18} opacity={.38} blur={2.4} far={4} color="#000805" />
    <Sparkles count={70} scale={[15, 3, 15]} position={[game.player.x - WORLD_CENTER, 1.2, game.player.y - WORLD_CENTER]} size={1.4} speed={.16} opacity={.25} color="#7fe6c2" />
    <OrbitControls ref={controlsRef} makeDefault enablePan={false} minDistance={8} maxDistance={15} minPolarAngle={.55} maxPolarAngle={1.15} target={[game.player.x - WORLD_CENTER, 0, game.player.y - WORLD_CENTER]} />
  </>;
}

export default function WorldStage({ game, heroClass, onPositionChange }: { game: GameState; heroClass: HeroClass; onPositionChange: (x: number, y: number) => void }) {
  return <div className="world3d" aria-label="실시간 3D 플레이 월드">
    <Canvas shadows="basic" dpr={[1, 1.7]} camera={{ position: [8.2, 8.6, 9.4], fov: 42 }} gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
      <Scene game={game} heroClass={heroClass} onPositionChange={onPositionChange} />
    </Canvas>
    <div className="world3dBadge"><i /> LIVE 3D WORLD <span>HOLD WASD · DRAG TO ORBIT</span></div>
  </div>;
}

Object.values(modelByClass).forEach((model) => useGLTF.preload(model));
