import { GLTFLoader } from 'three-stdlib'
import { useLoader } from '@react-three/fiber'
import { useRef, memo } from 'react'
import { useCylinder } from '@react-three/cannon'
import { Group } from 'three'

const BarrelContent = () => {
  const group1: [number, number, number][] = []

  let y = 1
  for (let x = 15; x <= 18; x++) {
    for (let z = -6; z >= -9; z--) {
      group1.push([x, y, z])
      y += 0.1
    }
  }

  return (
    <>
      {group1.map((pos, index) => (
        <Barrel key={index} position={pos} />
      ))}
    </>
  )
}

interface BarrelProps {
  position: [number, number, number]
  rotation?: [number, number, number]
}

const Barrel = ({ position, rotation }: BarrelProps) => {
  const result = useLoader(GLTFLoader, 'models/barrel.glb').scene.clone()

  const radius = 0.35
  const height = 0.7

  const [barrelRef] = useCylinder(
    () => ({
      allowSleep: false,
      args: [radius, radius, height, 16],
      mass: 10,
      rotation,
      position,
    }),
    useRef<Group>(null)
  )

  return (
    <group ref={barrelRef as any}>
      <primitive object={result} />
    </group>
  )
}

export default memo(BarrelContent)
