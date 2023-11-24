import { OrbitControls } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 15, 15]} castShadow />
    </>
  );
}
