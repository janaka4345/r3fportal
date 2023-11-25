import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import PortalMaterial from "./portalMaterial";

extend({ PortalMaterial });

export default function Modeljsx(props) {
  const portalM = useRef();
  useFrame((state, delta) => {
    if (portalM.current) {
      portalM.current.uniforms.uTime.value += delta;
    }
  });
  const bakedTexture = useTexture("./model/baked.jpg");

  const { nodes } = useGLTF("./model/portal.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portalLight.geometry}
        position={[0, 0.851, -1.774]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <portalMaterial attach={"material"} ref={portalM} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/portal.glb");
