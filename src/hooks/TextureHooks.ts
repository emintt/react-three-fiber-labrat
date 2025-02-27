import { useTexture } from "@react-three/drei";

const useTextures = () => {

  const stoneTexture = useTexture({
    map: './stones/PavingStones138_1K-JPG_Color.jpg',
    displacementMap: './stones/PavingStones138_1K-JPG_Displacement.jpg',
    normalMap: './stones/PavingStones138_1K-JPG_NormalDX.jpg',
    roughnessMap: './stones/PavingStones138_1K-JPG_Roughness.jpg',
    aoMap: './stones/PavingStones138_1K-JPG_AmbientOcclusion.jpg',
  });

  const metalTexture = useTexture({
    map: './metal/Metal052C_1K-JPG_Color.jpg',
    displacementMap: './metal/Metal052C_1K-JPG_Displacement.jpg',
    normalMap: './metal/Metal052C_1K-JPG_NormalDX.jpg',
    roughnessMap: './metal/Metal052C_1K-JPG_Roughness.jpg',
    metalnessMap: './metal/Metal052C_1K-JPG_Metalness.jpg',
  });

  return { stoneTexture, metalTexture };
};

export default useTextures;