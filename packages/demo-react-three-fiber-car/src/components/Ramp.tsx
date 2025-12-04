import { useTrimesh } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { GLTFLoader } from 'three-stdlib'
import { Mesh } from 'three'

const Ramp = () => {
  const result = useLoader(GLTFLoader, 'models/ramp.glb')

  const geometry = (result.scene.children[0] as Mesh).geometry

  const vertices = geometry.attributes.position.array
  const indices = geometry.index?.array

  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices!],
      mass: 0,
      type: 'Static',
    }),
    useRef(null)
  )
  
  return <primitive object={result.scene} ref={ref} />
}

export default memo(Ramp)
