import { CameraControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import * as THREE from "three";

import { Button } from "./UI/Button/Button";

type Props = {
  headline?: string;
  text?: string;
};

const Header = ({ headline = "Max Jung", text = "Multimedia / Web / Animation" }: Props) => {
  const t = useTranslations("main");

  return (
    <div className={`text-center flex justify-center mx-auto max-w-5xl mt-20`}>
      <div className="mb-8">
        <div className="my-8">
          <Scene />
        </div>
        <h1 className="text-headline font-headline text-2xl md:text-5xl mb-2">{t("title")}</h1>
        <p>{text}</p>
        <div className="my-4 flex justify-center">
          <Button>Mehr erfahren</Button>
        </div>
      </div>
    </div>
  );
};
export default Header;

function Scene() {
  return (
    <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <CameraControls makeDefault />
    </Canvas>
  );
}

function Box() {
  const mesh: any = useRef();

  // Rotate the box every frame
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <lineSegments ref={mesh}>
      <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(3, 3, 3)]} />
      <lineBasicMaterial attach="material" color="white" />
    </lineSegments>
  );
}
