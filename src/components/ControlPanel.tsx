/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Mohit Akundi (https://sketchfab.com/mohitakundi)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/sci-fi-control-panel-inspired-by-star-wars-d562fef9ca564612902801c47a1278b3
Title: Sci Fi Control Panel Inspired by Star Wars
*/

import { useGLTF } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three'

const ControlPanel = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('./sci_fi_control_panel_inspired_by_star_wars.glb');

  const bulb1Ref = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (bulb1Ref.current && bulb1Ref.current.material instanceof MeshStandardMaterial) {
      // flashing effect
      const intensity = (Math.sin(clock.elapsedTime * 5) + 1) / 2; //Math.sin(clock.elapsedTime makes value between -1&1, take it +1 then / 2 to make value between 0 & 1 
      bulb1Ref.current.material.emissive.setRGB(intensity, 0, 0);
    }
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-0.217, -36.251, 11.15]} scale={[29.934, 25.06, 100]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Lower_Panel_Steel_test_0 as Mesh).geometry} 
            material={materials.Steel_test}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Lower_Panel_EmissionOffWhite_0 as Mesh).geometry}
            material={materials.EmissionOffWhite}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Lower_Panel_EmissionRed_0 as Mesh).geometry}
            material={materials.EmissionRed}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Lower_Panel_EmissionBlue_0 as Mesh).geometry}
            material={materials.EmissionBlue}
          />
        </group>
        <group position={[102.345, 170.635, 5.665]} scale={29.063}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Upper_Panel_Steel_test_0 as Mesh).geometry}
            material={materials.Steel_test}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Upper_Panel_EmissionRed_0 as Mesh).geometry}
            material={materials.EmissionRed}
            onClick={() => {
              console.log('Upper_Panel_Emission Red button clicked');
            }}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Upper_Panel_EmissionBlue_0 as Mesh).geometry}
            material={materials.EmissionBlue}
            onClick={() => {
              console.log('Upper_Panel_Emission Blue button clicked');
            }}
          />
        </group>
        <group position={[-38.915, 172.179, 5.595]} scale={30.419}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Plane_Steel_test_0 as Mesh).geometry}
            material={materials.Steel_test}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Plane_EmissionOffWhite_0 as Mesh).geometry}
            material={materials.EmissionOffWhite}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Frame_Steel_test_0 as Mesh).geometry}
          material={materials.Steel_test}
          scale={[181.202, 222.74, 181.202]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.UpperFrame_Steel_test_0  as Mesh).geometry}
          material={materials.Steel_test}
          position={[0, 137.185, 0]}
          scale={[159.117, 80.128, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Lower_Frame_Steel_test_0  as Mesh).geometry}
          material={materials.Steel_test}
          position={[0, -66.592, 0]}
          scale={[159.117, 80.128, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Hexagon1_EmissionBlue_0  as Mesh).geometry}
          material={materials.EmissionBlue}
          position={[-27.563, -159.188, 5.895]}
          scale={[31.205, 17.429, 23.651]}
        />
        <mesh
          ref={bulb1Ref}
          castShadow
          receiveShadow
          geometry={(nodes.Bulb1_EmissionWhite_0 as Mesh).geometry}
          material={materials.EmissionWhite}
          position={[102.962, -160.14, 0]}
          scale={45.219}
          onClick={() => {
            console.log('Bulb1_Emission Red clicked');
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes['Border-Wiring_Steel_test_0'] as Mesh).geometry}
          material={materials.Steel_test}
          position={[133.262, -133.868, 0]}
          scale={31.74}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Bulb2_EmissionRed_0 as Mesh).geometry}
          material={materials.EmissionRed}
          position={[-38.824, 98.569, 5.183]}
          scale={22.261}
          onClick={() => {
            console.log('Bulb2_EmissionRed clicked');
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes['Border-Wiring001_Steel_test_0'] as Mesh).geometry}
          material={materials.Steel_test}
          position={[-58.14, 143.216, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={31.74}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Hexagon2_EmissionRed_0 as Mesh).geometry}
          material={materials.EmissionRed}
          position={[-92.985, -159.188, 5.895]}
          scale={[31.205, 17.429, 23.651]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Hexcir1_EmissionOffWhite_0 as Mesh).geometry}
          material={materials.EmissionOffWhite}
          position={[3.753, -110.406, 5.895]}
          scale={5.808}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Hexcir2_EmissionOffWhite_0 as Mesh).geometry}
          material={materials.EmissionOffWhite}
          position={[-6.247, -100.406, 5.895]}
          scale={5.808}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Hexcir3_EmissionOffWhite_0 as Mesh).geometry}
          material={materials.EmissionOffWhite}
          position={[-16.247, -110.406, 5.895]}
          scale={5.808}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.LowerPanel_GlassB_Glass_0 as Mesh).geometry}
          material={materials.Glass}
          position={[0, -66.592, 0]}
          scale={[159.117, 80.128, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Bulb2Border_Steel_test_0 as Mesh).geometry}
          material={materials.Steel_test}
          position={[-38.824, 98.569, 5.183]}
          scale={22.261}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Bulb1Border_Steel_test_0 as Mesh).geometry}
          material={materials.Steel_test}
          position={[102.962, -160.14, 0]}
          scale={44.373}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.LowerPanel_GlassA_Glass_0 as Mesh).geometry}
          material={materials.Glass}
          position={[-68.747, -36.251, 34.058]}
          scale={[29.934, 25.06, 100]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./sci_fi_control_panel_inspired_by_star_wars.glb');

export default ControlPanel;
