import { Text3D } from '@react-three/drei'

const GeoText3d = () => {
  return (
    <Text3D
      position={[-2, 0, 0]}
      font="/Roboto_Regular.json"
      height={0}
      lineHeight={0.7}
      bevelEnabled
      bevelSize={0.05}
      bevelThickness={0.1}
    >
      {`Kimura\nCoki's\nPortfolio`}
    </Text3D>
  )
}

export default GeoText3d