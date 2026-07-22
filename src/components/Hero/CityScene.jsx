import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Building({ position, height, width, index }) {
  const meshRef = useRef()
  const baseDelay = index * 0.3

  const mat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#0d1a3a'),
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.85,
        emissive: new THREE.Color('#ff3131'),
        emissiveIntensity: 0.04,
      }),
    []
  )

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime()
      meshRef.current.material.emissiveIntensity =
        0.03 + Math.sin(t * 0.5 + baseDelay) * 0.02
    }
  })

  return (
    <mesh ref={meshRef} position={position} material={mat} castShadow>
      <boxGeometry args={[width, height, width * 0.8]} />
    </mesh>
  )
}

function GlowRing() {
  return (
    <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[2.5, 3.5, 64]} />
      <meshBasicMaterial color="#ff3131" transparent opacity={0.05} />
    </mesh>
  )
}

function Particles() {
  const pointsRef = useRef()

  const { positions } = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = Math.random() * 6 - 1
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return { positions }
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ff3131" transparent opacity={0.45} sizeAttenuation />
    </points>
  )
}

function CityGroup({ scrollRef }) {
  const groupRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const buildings = useMemo(() => ([
    { x: -2.2, z: 0,    height: 3.2, width: 0.65 },
    { x: -1.0, z: 0.4,  height: 4.8, width: 0.75 },
    { x:  0.3, z: 0,    height: 2.8, width: 0.55 },
    { x:  1.5, z: 0.2,  height: 5.5, width: 0.70 },
    { x:  2.6, z: 0,    height: 3.5, width: 0.60 },
    { x: -1.8, z: -1.2, height: 2.2, width: 0.50 },
    { x:  0.8, z: -1.0, height: 3.8, width: 0.62 },
    { x:  2.0, z: -1.2, height: 2.5, width: 0.48 },
    { x: -0.3, z:  1.2, height: 2.0, width: 0.55 },
    { x:  1.2, z:  1.4, height: 3.0, width: 0.58 },
  ].map((b) => ({ ...b, position: [b.x, b.height / 2 - 1.5, b.z] }))), [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    const scroll = scrollRef.current / (window.innerHeight * 0.8)
    groupRef.current.rotation.y = t * 0.06 + mouse.current.x * 0.15
    groupRef.current.rotation.x = mouse.current.y * 0.06
    groupRef.current.position.y = -scroll * 1.2
    groupRef.current.scale.setScalar(Math.max(0.7, 1 - scroll * 0.15))
  })

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.05} floatIntensity={0.15}>
          <Building position={b.position} height={b.height} width={b.width} index={i} />
        </Float>
      ))}
      <Particles />
      <GlowRing />
    </group>
  )
}

export default function CityScene({ scrollRef }) {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 1, 8]} fov={50} />
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 8, 5]}  color="#ff3131" intensity={3}   />
      <pointLight position={[-5, 4, 3]} color="#983b3b" intensity={1.5} />
      <pointLight position={[0, -2, 6]} color="#272f44" intensity={2}   />
      <CityGroup scrollRef={scrollRef} />
    </Canvas>
  )
}
