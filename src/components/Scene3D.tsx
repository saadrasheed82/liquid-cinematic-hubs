import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

const AnimatedOrb = () => {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 96, 96]}>
        <MeshDistortMaterial
          color="#7dd3fc"
          attach="material"
          distort={0.45}
          speed={1.6}
          roughness={0.1}
          metalness={0.85}
          emissive="#0ea5e9"
          emissiveIntensity={0.35}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#38bdf8" />
        <pointLight position={[5, -3, 2]} intensity={0.6} color="#a78bfa" />
        <Stars
          radius={50}
          depth={50}
          count={1500}
          factor={3}
          saturation={0}
          fade
          speed={0.6}
        />
        <AnimatedOrb />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
