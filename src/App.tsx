import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GeoText3d from './components/GeoText3d'

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <GeoText3d />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App