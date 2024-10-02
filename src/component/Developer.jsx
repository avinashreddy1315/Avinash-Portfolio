import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load the GLTF model
  const { nodes, materials } = useGLTF('/models/avatar_greeting.glb');

  // Load the animations and add null checks
  const { animations: idleAnimations } = useFBX('/models/animations/idle.fbx') || { animations: [] };
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx') || { animations: [] };
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx') || { animations: [] };
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx') || { animations: [] };

  // Check if animations are loaded before proceeding
  if (idleAnimations.length > 0) idleAnimations[0].name = 'idle';
  if (clappingAnimation.length > 0) clappingAnimation[0].name = 'clapping';
  if (saluteAnimation.length > 0) saluteAnimation[0].name = 'salute';
  if (victoryAnimation.length > 0) victoryAnimation[0].name = 'victory';

  // Use the animations hook and ensure animations are passed only if they exist
  const { actions } = useAnimations(
    [
      idleAnimations[0] || null,
      clappingAnimation[0] || null,
      saluteAnimation[0] || null,
      victoryAnimation[0] || null,
    ].filter(Boolean), // Filter out null animations
    group
  );

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions && actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [animationName, actions]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

// Preload the model for better performance
useGLTF.preload('/models/avatar_greeting.glb');

export default Developer;
