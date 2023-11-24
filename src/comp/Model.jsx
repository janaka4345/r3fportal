import { OrbitControls, useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb");
  console.log(nodes);
  return (
    <>
      <mesh geometry={nodes.baked.geometry} />
    </>
  );
}
