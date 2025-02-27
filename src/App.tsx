import { Canvas } from "@react-three/fiber";
// import { useRef } from "react";
import "./App.css";
import Box from "./components/Box";
import { PointerLockControls } from "@react-three/drei";
import Ground from "./components/Ground";

const App = () => {
  return (
    <section className="three-canvas">
      <Canvas>
        <PointerLockControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <RotatingCube /> */}
        <Box position={[-1, 0, 0]} />
        <Box position={[2, 0, 0]} />
        <Box position={[-2, 0, 0]} />
        {Array.from({ length: 100 }).map((_, index) =>
          Array.from({ length: 100 }).map((_, jindex) => (
            <Ground position={[index + 1, -2, jindex + 1]} />
          )),
        )}
      </Canvas>
    </section>
  );
};

export default App;
