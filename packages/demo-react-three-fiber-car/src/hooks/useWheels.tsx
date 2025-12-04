import { useCompoundBody } from '@react-three/cannon'
import { useRef, MutableRefObject } from 'react'
import { Object3D } from 'three'

interface WheelInfo {
  radius: number
  directionLocal: [number, number, number]
  axleLocal: [number, number, number]
  suspensionStiffness: number
  suspensionRestLength: number
  dampingRelaxation: number
  dampingCompression: number
  maxSuspensionForce: number
  rollInfluence: number
  maxSuspensionTravel: number
  customSlidingRotationalSpeed: number
  useCustomSlidingRotationalSpeed: boolean
  chassisConnectionPointLocal: [number, number, number]
  isFrontWheel: boolean
}

const useWheels = (width: number, height: number, length: number, radius: number) => {
  const wheels: [
    MutableRefObject<Object3D | null>,
    MutableRefObject<Object3D | null>,
    MutableRefObject<Object3D | null>,
    MutableRefObject<Object3D | null>
  ] = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const wheelInfo = {
    radius,
    directionLocal: [0, -1, 0] as [number, number, number],
    axleLocal: [1, 0, 0] as [number, number, number],
    suspensionStiffness: 60,
    suspensionRestLength: 0.1,
    dampingRelaxation: 2.3,
    dampingCompression: 4.4,
    maxSuspensionForce: 100000,
    rollInfluence: 0.01,
    maxSuspensionTravel: 0.1,
    customSlidingRotationalSpeed: -30,
    useCustomSlidingRotationalSpeed: true,
  }

  const wheelInfos: WheelInfo[] = [
    {
      // [0] Right front:
      ...wheelInfo,
      chassisConnectionPointLocal: [-width * 0.45, -height * 0.2, length * 0.31],
      isFrontWheel: true,
    },
    {
      // [1] Left front:
      ...wheelInfo,
      chassisConnectionPointLocal: [width * 0.45, -height * 0.2, length * 0.31],
      isFrontWheel: true,
    },
    {
      // [2] Right back:
      ...wheelInfo,
      chassisConnectionPointLocal: [-width * 0.45, -height * 0.2, -length * 0.3],
      isFrontWheel: false,
    },
    {
      // [3] Left back:
      ...wheelInfo,
      chassisConnectionPointLocal: [width * 0.45, -height * 0.2, -length * 0.3],
      isFrontWheel: false,
    },
  ]

  const propsFunc = () => ({
    collisionFilterGroup: 0,
    mass: 1,
    shapes: [
      {
        args: [wheelInfo.radius, wheelInfo.radius, 0.2, 16] as [number, number, number, number],
        rotation: [0, 0, -Math.PI / 2] as [number, number, number],
        type: 'Cylinder' as const,
      },
    ],
    type: 'Kinematic' as const,
  })

  useCompoundBody(propsFunc, wheels[0])
  useCompoundBody(propsFunc, wheels[1])
  useCompoundBody(propsFunc, wheels[2])
  useCompoundBody(propsFunc, wheels[3])

  return [wheels, wheelInfos] as const
}

export default useWheels
