"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Html, OrbitControls, Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/addons/utils/SkeletonUtils.js";
import type { GameState, Tile, WorldAction } from "@/lib/web-game";
import type { HeroClass } from "./character-stage";

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

function TileMesh({ tile, x, z, seed, resource, onMove }: { tile: Tile; x: number; z: number; seed: number; resource: boolean; onMove: () => void }) {
  const colors = { moss: "#173d31", meadow: "#28523e", water: "#143e54", ruins: "#39433f", ember: "#56362d" } as const;
  const height = tile.kind === "water" ? -.13 : Math.sin(seed * 17) * .035;
  const nature = seed > .62 && (tile.kind === "moss" || tile.kind === "meadow");
  return <group>
    <mesh receiveShadow position={[x, height - .12, z]} onClick={(event) => { event.stopPropagation(); onMove(); }}>
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

function Scene({ game, heroClass, dispatch }: { game: GameState; heroClass: HeroClass; dispatch: (action: WorldAction) => void }) {
  const radius = 8;
  const tiles = [];
  for (let y = Math.max(0, game.player.y - radius); y <= Math.min(31, game.player.y + radius); y += 1) {
    for (let x = Math.max(0, game.player.x - radius); x <= Math.min(31, game.player.x + radius); x += 1) {
      const tile = game.tiles[y][x];
      const localX = x - game.player.x;
      const localZ = y - game.player.y;
      const seed = ((x * 92821 + y * 68917 + game.seed) % 1000) / 1000;
      const key = `${x}:${y}`;
      tiles.push(<TileMesh key={key} tile={tile} x={localX} z={localZ} seed={seed} resource={!game.collected.includes(key)} onMove={() => {
        const dx = Math.abs(localX) > Math.abs(localZ) ? Math.sign(localX) : 0;
        const dy = dx === 0 ? Math.sign(localZ) : 0;
        if (dx || dy) dispatch({ type: "move", dx, dy });
      }} />);
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
      <AnimatedHero model={modelByClass[heroClass]} position={[0, .04, 0]} scale={.58} />
      <Html position={[0, 1.75, 0]} center distanceFactor={10}><div className="worldName playerName">{game.player.name}<small>{heroClass}</small></div></Html>
      {game.agents.map((agent, index) => {
        const x = agent.x - game.player.x, z = agent.y - game.player.y;
        if (Math.abs(x) > radius || Math.abs(z) > radius) return null;
        const model = [modelByClass.Rogue, modelByClass.Arcanist, modelByClass.Barbarian][index % 3];
        return <group key={agent.id}><AnimatedHero model={model} position={[x, .03, z]} scale={.48} tint={agent.color} /><mesh position={[x, 1.42, z]}><sphereGeometry args={[.055, 12, 12]} /><meshBasicMaterial color={agent.color} /></mesh><Html position={[x, 1.62, z]} center distanceFactor={11}><div className="worldName">{agent.name}<small>AI RESIDENT</small></div></Html></group>;
      })}
    </Suspense>
    {game.monsters.map((monster) => monster.hp > 0 && Math.abs(monster.x - game.player.x) <= radius && Math.abs(monster.y - game.player.y) <= radius
      ? <MistBeast key={monster.id} position={[monster.x - game.player.x, .28, monster.y - game.player.y]} color="#b75043" /> : null)}
    <ContactShadows position={[0, .02, 0]} scale={18} opacity={.38} blur={2.4} far={4} color="#000805" />
    <Sparkles count={70} scale={[15, 3, 15]} position={[0, 1.2, 0]} size={1.4} speed={.16} opacity={.25} color="#7fe6c2" />
    <OrbitControls makeDefault enablePan={false} minDistance={8} maxDistance={15} minPolarAngle={.55} maxPolarAngle={1.15} target={[0, 0, 0]} />
  </>;
}

export default function WorldStage({ game, heroClass, dispatch }: { game: GameState; heroClass: HeroClass; dispatch: (action: WorldAction) => void }) {
  return <div className="world3d" aria-label="실시간 3D 플레이 월드">
    <Canvas shadows="basic" dpr={[1, 1.7]} camera={{ position: [8.2, 8.6, 9.4], fov: 42 }} gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
      <Scene game={game} heroClass={heroClass} dispatch={dispatch} />
    </Canvas>
    <div className="world3dBadge"><i /> LIVE 3D WORLD <span>DRAG TO ORBIT</span></div>
  </div>;
}

Object.values(modelByClass).forEach((model) => useGLTF.preload(model));
