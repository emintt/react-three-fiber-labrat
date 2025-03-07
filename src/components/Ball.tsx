import { ThreeElements } from '@react-three/fiber';

const Ball = (props: ThreeElements['mesh']) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

export default Ball;