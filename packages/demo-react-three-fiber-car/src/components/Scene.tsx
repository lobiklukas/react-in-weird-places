import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import Car from './Car'
import Ground from './Ground'
import Track from './Track'
import BarrelContent from './Barrel'

const Scene = () => {
  const [cameraView, setView] = useState(0)
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([-21, 34, 55])

  useEffect(() => {
    function keydownHandler(event: KeyboardEvent) {
      if (event.code == 'KeyC') {
        if (cameraView == 3) {
          setView(0)
          return setCameraPosition([-21, 34, 55 + Math.random() * 0.01])
        }
        setView(cameraView + 1)
      }
    }

    window.addEventListener('keydown', keydownHandler)
    return () => window.removeEventListener('keydown', keydownHandler)
  }, [cameraView])

  return (
    <Suspense fallback={null}>
      <Environment files="textures/envmap.hdr" background />
      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      {!cameraView && <OrbitControls target={[0, 0, 0]} />}

      <Car cameraView={cameraView} />

      <Ground />
      <Track />
      <BarrelContent />
    </Suspense>
  )
}

export default Scene
