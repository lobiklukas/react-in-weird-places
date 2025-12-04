import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { GLTFLoader } from 'three-stdlib'
import { useFrame, useLoader } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import useWheels from '../hooks/useWheels'
import useControls from '../hooks/useControls'
import { Quaternion, Vector3 } from 'three'

const loadCar = () => {
  // children: [CarBody, WheelRF, WheelLF, WheelLB, WheelRB]
  const result = useLoader(GLTFLoader, 'models/car.glb').scene.clone()

  return {
    CarBody: result.children[0],
    WheelRF: result.children[1],
    WheelLF: result.children[2],
    WheelLB: result.children[3],
    WheelRB: result.children[4],
  }
}

interface CarProps {
  cameraView: number
}

const Car = ({ cameraView }: CarProps) => {
  const { CarBody, WheelRF, WheelLF, WheelLB, WheelRB } = useMemo(() => loadCar(), [])

  const position: [number, number, number] = [-10, 3, -3]
  const rotation: [number, number, number] = [0, Math.PI / 2, 0]
  const width = 1.2
  const height = 0.7
  const length = 2.8
  const wheelRadius = 0.2

  const chassisBodyArgs: [number, number, number] = [width, height, length]
  const [chassisBody, chassisApi] = useBox(
    () => ({
      allowSleep: false,
      args: chassisBodyArgs,
      mass: 150,
      rotation,
      position,
    }),
    useRef(null)
  )

  const [wheels, wheelInfos] = useWheels(width, height, length, wheelRadius)

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null)
  )

  useControls(vehicleApi, chassisApi)

  useFrame((state) => {
    if (cameraView == 0) return

    let position = new Vector3(0, 0, 0)
    position.setFromMatrixPosition(chassisBody.current!.matrixWorld)

    let quaternion = new Quaternion(0, 0, 0, 0)
    quaternion.setFromRotationMatrix(chassisBody.current!.matrixWorld)

    const forwardVector = new Vector3(0, 0.45, 0.5)
    forwardVector.applyQuaternion(quaternion)

    let delta = new Vector3(0, 0.5, 0)
    let target = position

    if (cameraView == 1) delta = new Vector3(0, 2, -5)
    if (cameraView == 2) delta = new Vector3(0, 2, 5)
    if (cameraView == 3) target = position.clone().add(forwardVector)

    delta.applyQuaternion(quaternion)

    let cameraPosition = position.clone().add(delta.clone())

    state.camera.position.copy(cameraPosition)
    state.camera.lookAt(target)
  })

  return (
    <group ref={vehicle as any} name="vehicle">
      <group ref={chassisBody as any} name="chassisBody">
        <primitive object={CarBody} rotation-y={-Math.PI / 2} position={[0, -0.15, 0]} />
      </group>

      <group ref={wheels[0] as any} name="WheelRF">
        <primitive object={WheelRF} rotation-y={-Math.PI / 2} position={[0, 0, 0]} />
      </group>
      <group ref={wheels[1] as any} name="WheelLF">
        <primitive object={WheelLF} rotation-y={-Math.PI / 2} position={[0, 0, 0]} />
      </group>
      <group ref={wheels[2] as any} name="WheelRB">
        <primitive object={WheelRB} rotation-y={-Math.PI / 2} position={[0, 0, 0]} />
      </group>
      <group ref={wheels[3] as any} name="WheelLB">
        <primitive object={WheelLB} rotation-y={-Math.PI / 2} position={[0, 0, 0]} />
      </group>
    </group>
  )
}

export default Car
