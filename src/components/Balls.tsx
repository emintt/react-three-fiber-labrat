import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color, InstancedMesh, Matrix4 } from "three";


const Balls = () => {
  const count = 100;
  const meshRef = useRef<InstancedMesh>(null);

  useEffect(() => {
    const matrix = new Matrix4();
    const color = new Color();

    if (meshRef.current) {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * 600 - 300;
        const y = Math.random() * 600 - 300;
        const z = Math.random() * 600 - 300;

        matrix.setPosition(x, y, z);
        meshRef.current.setMatrixAt(i, matrix);
        meshRef.current.setColorAt(i, color.setHex(0xffffff * Math.random()));
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [count]);

   useFrame(() => {
    // console.log(meshRef);
    if (meshRef && meshRef.current) {
      meshRef.current.position.z += 0.01;
    };
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} scale={0.01}>
      <sphereGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"white"} />
    </instancedMesh>
  );

};

export default Balls;