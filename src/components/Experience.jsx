import { OrbitControls } from "@react-three/drei";
import { FadingImage } from "./FadingImage";
import { FadingImageDisplacement } from "./FadingImageDisplacement";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <FadingImageDisplacement position-x={1.5} position-z={-2} />
      <FadingImage position-x={-1.5} />
    </>
  );
};
