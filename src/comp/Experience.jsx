import { Center, OrbitControls, Sparkles, useHelper } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import Modeljsx from "./Modeljsx";

export default function Experience() {
  const light = useRef();
  // useHelper(light, DirectionalLightHelper, 1);
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight
        ref={light}
        intensity={1}
        position={[0, 3, 3]}
        castShadow
      />

      <Center>
        <Modeljsx />
      </Center>
      <Sparkles
        count={40}
        speed={0.5}
        size={6}
        noise={[5, 2, 1]}
        scale={[4, 2, 4]}
        position={[0, 1, 0]}
      />
    </>
  );
}
