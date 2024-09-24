import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const HeroCamera = ({children, isMobile, isSmall, isTablet, isMedium, isVerySmall}) => {

    const groupref = useRef();

    useFrame((state, delta) =>{
        easing.damp3(state.camera.position, [0,0,27], 0.7, delta)


        if(!isMedium && !isMobile && !isSmall && !isTablet && !isVerySmall){
            easing.dampE(groupref.current.rotation, [-state.pointer.y/3, -state.pointer.x/5, 0], 0.21, delta)
        }
    })
  return (
    <group ref={groupref}>{children}</group>
  )
}

export default HeroCamera
