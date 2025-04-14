import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

function Box() {
  const INITIAL_CAMERA_POSITION = new Vector3(3, 3, 3);
  return (
    <Canvas camera={{ position: INITIAL_CAMERA_POSITION }}>
      <mesh scale={1}>
        <planeGeometry />
        <meshNormalMaterial />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.7} />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
}

export default Box;
