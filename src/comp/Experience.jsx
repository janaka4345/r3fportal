import { Center, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import Model from "./Model";
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

      {/* <Model /> */}
      <Center>
        <Modeljsx />
      </Center>
    </>
  );
}
