import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'


const Telephone = (props) => {
    const { nodes, materials } = useGLTF('/models/telephone.glb');
    const logoRef = useRef();
    const sparklesRef = useRef();
  
    // Rotate the logo on the X-axis infinitely
    useFrame(() => {
      if (logoRef.current) {
        logoRef.current.rotation.x += 0.01; // Adjust the speed by modifying this value
      }
      if (sparklesRef.current) {
        // Make sparkles rotate around the logo for a dynamic effect
        sparklesRef.current.rotation.y += 0.01;
      }
    });
  
    // Create sparkles using points
    const generateSparkles = () => {
      const sparkles = new Float32Array(100 * 3); // 300 particles, each with x, y, z
      for (let i = 0; i < 300; i++) {
        sparkles[i * 3] = (Math.random() - 0.5) * 8; // x position (small range for tighter sparkles)
        sparkles[i * 3 + 1] = (Math.random() - 0.5) * 8; // y position
        sparkles[i * 3 + 2] = (Math.random() - 0.5) * 8; // z position
      }
      return sparkles;
    };
  
    const sparklePositions = generateSparkles();
  
    return (
      <Float floatIntensity={0.5} speed={2}>
        <group ref={logoRef} position={props.position} scale={props.scale} dispose={null}> {/* props.position is used here */}
          <mesh
            geometry={nodes['React-Logo_Material002_0'].geometry}
            material={materials['Material.002']}
            position={[0, 0, 0]} // Keep the logo at the center of the group
            rotation={[0, 0, -Math.PI / 2]}
            
          >
            <meshStandardMaterial
              attach="material"
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
  
          {/* Sparkle effect around the React logo */}
          <points ref={sparklesRef} position={[0, 0, 0]}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attach="attributes-position"
                array={sparklePositions}
                count={sparklePositions.length / 3}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              attach="material"
              color="#FFD700"
              size={0.17}
              sizeAttenuation
              transparent
              opacity={0.7}
            />
          </points>
        </group>
      </Float>
    );
  };
  

useGLTF.preload('/models/telephone.glb')
export default Telephone
