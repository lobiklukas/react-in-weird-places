import { useBox } from '@react-three/cannon'

interface ColliderBoxProps {
  position: [number, number, number]
  scale?: [number, number, number]
  rotation?: [number, number, number]
}

const ColliderBox = ({ position, scale = [0.25, 4, 0.25], rotation }: ColliderBoxProps) => {
  useBox(() => ({
    args: scale,
    position,
    rotation,
    type: 'Static',
  }))

  return null
}

export default ColliderBox
