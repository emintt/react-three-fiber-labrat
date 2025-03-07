import { Canvas } from "@react-three/fiber";
import "./App.css";
import { FlyControls, PointerLockControls } from "@react-three/drei";
import ControlPanel from "./components/ControlPanel";
import Crosshair from "./components/Crosshair";
import Balls from "./components/Balls";


// useEffect(() => {  
//   if (meshRef.current) {
//     meshRef.current.setMatrixAt(0, new Matrix4());
//     meshRef.current.instanceMatrix.needsUpdate = true;
//   }
// }, [])

const App = () => {
  return (
    <section className="three-canvas">
      <Canvas>
        <PointerLockControls />
        <FlyControls rollSpeed={0} movementSpeed={3} dragToLook />
        <ambientLight />
        <directionalLight position={[-50, 40, 50]} castShadow />
        <pointLight position={[10, 10, 10]} />
        <ControlPanel 
          position={[0, 0, 3]} 
          rotation={[-0.1, 0, 0]}
          scale={0.2}
          receiveShadow
          castShadow
        />
        <Balls />
      </Canvas>
      <Crosshair />
    </section>
  );
};

export default App;
