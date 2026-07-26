"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, Sparkles, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/addons/utils/SkeletonUtils.js";

const modelByClass = {
  Knight: "/models/kaykit/Knight.glb",
  Barbarian: "/models/kaykit/Barbarian.glb",
  Rogue: "/models/kaykit/Rogue_Hooded.glb",
  Arcanist: "/models/kaykit/Mage.glb",
} as const;

export type HeroClass = keyof typeof modelByClass;

function Character({ heroClass }: { heroClass: HeroClass }) {
  const group = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelByClass[heroClass]);
  const character = useMemo(() => cloneSkeleton(gltf.scene), [gltf.scene]);
  const { actions } = useAnimations(gltf.animations, group);

  useEffect(() => {
    character.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) node.material.envMapIntensity = 1.4;
      }
    });
    const idle = actions.Idle;
    idle?.reset().fadeIn(.35).play();
    return () => { idle?.fadeOut(.2); };
  }, [actions, character]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.25) * .008 - 1.13;
  });

  return <group ref={group} scale={1.2} rotation={[0, -.2, 0]}><primitive object={character} /></group>;
}

function Pedestal() {
  return <group position={[0, -1.17, 0]}>
    <mesh receiveShadow>
      <cylinderGeometry args={[1.24, 1.37, .18, 64]} />
      <meshStandardMaterial color="#101b28" metalness={.72} roughness={.23} />
    </mesh>
    <mesh position={[0, .095, 0]}>
      <torusGeometry args={[1.05, .012, 10, 64]} />
      <meshStandardMaterial color="#53c9ff" emissive="#1682c6" emissiveIntensity={3} />
    </mesh>
    <mesh position={[0, -.1, 0]}>
      <cylinderGeometry args={[1.38, 1.48, .08, 64]} />
      <meshStandardMaterial color="#050a11" metalness={.9} roughness={.2} />
    </mesh>
  </group>;
}

export default function CharacterStage({ heroClass }: { heroClass: HeroClass }) {
  return <div className="characterStage" aria-label={`${heroClass} 3D 캐릭터 미리보기`}>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, .42, 5.65], fov: 35 }} gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}>
      <fog attach="fog" args={["#050912", 5.2, 9]} />
      <ambientLight intensity={.75} color="#8bb7d9" />
      <hemisphereLight args={["#a9d9ff", "#02040a", 1.15]} />
      <directionalLight castShadow position={[-3, 5, 4]} intensity={3.5} color="#dceeff" shadow-mapSize={[2048, 2048]} />
      <spotLight castShadow position={[3.5, 3.5, 2]} angle={.38} penumbra={.8} intensity={42} color="#5dbdff" />
      <pointLight position={[-2, .2, -1]} intensity={9} color="#875cff" distance={4} />
      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={.025} floatIntensity={.03}>
          <Character key={heroClass} heroClass={heroClass} />
        </Float>
        <Pedestal />
        <ContactShadows position={[0, -1.25, 0]} opacity={.75} scale={4.2} blur={2.2} far={3.6} color="#00040c" />
        <Sparkles count={36} scale={[3.6, 3.5, 2]} size={1.2} speed={.22} opacity={.32} color="#7bd7ff" />
      </Suspense>
      <OrbitControls enablePan={false} minDistance={4.4} maxDistance={7} minPolarAngle={Math.PI / 2.55} maxPolarAngle={Math.PI / 1.85} target={[0, .05, 0]} />
    </Canvas>
    <div className="stageHint"><span>↔</span> 드래그해서 회전 · 휠로 확대</div>
  </div>;
}

Object.values(modelByClass).forEach((model) => useGLTF.preload(model));
