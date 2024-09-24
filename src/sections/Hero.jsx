import { Node, Reactjs } from '@react-symbols/icons';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import HackerRoom from '../component/HackerRoom';
import CanvasLoader from '../component/CanvasLoader';
//import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from '../component/Target.jsx';
import ReactLogo from '../component/ReactLogo.jsx';
import Cube from '../component/Cube.jsx';
import Rings from '../component/Rings.jsx';
import HeroCamera from '../component/HeroCamera.jsx';
import Button from '../component/Button.jsx';



const Hero = () => {
    const [text] = useTypewriter({
        words: [
            'Avinash Reddy',
            'a Full-Stack Developer 🖥️',
            'a Frontend Developer',
            'a Backend Developer'
        ],
        loop: true,
        typeSpeed: 130,
    });


    const isSmall = useMediaQuery({ maxWidth: 450 });
    const isMobile = useMediaQuery({ maxWidth: 769 });
    const isTablet = useMediaQuery({ maxWidth: 1025 });
    const isMedium = useMediaQuery({ maxWidth: 830 });
    const isVerySmall = useMediaQuery({ maxWidth: 380 })

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='text-white custom-font sm:text-2xl md:text-3xl font-medium text-center font-generalsans flex items-center justify-center'>
                    Hi, I am
                    <span className='text-green-500 font-bold flex items-center ml-1 space-x-2'>
                        {text}
                        {text === 'Avinash Reddy' && <span className='waving-hand text-lg sm:text-3xl'>👋</span>}
                        {text === 'a Frontend Developer' && <Reactjs width={35} height={35} className="ml-1 animate-spin-slow" />}
                        {text === 'a Backend Developer' && <Node width={35} height={35} className="ml-1" />}
                    </span>
                    <Cursor cursorColor='blue' cursorStyle='_' />
                </p>
                <p className='hero_tag text-gray_gradient text-center '>
                    Transforming ideas into innovative products, one line at a time.
                </p>
            </div>
            <div className='hi w-full h-full absolute inset-0'>
                {/*<Leva /> */}
                <Canvas className={`w-full ${isVerySmall ? 'h-48' : isSmall ? 'h-56' : 'h-60'}`}>

                    <Suspense fallback={<CanvasLoader />}>
                        {/* Use Leva controls inside the Canvas */}
                        <ControlledHackerRoom />

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute  bottom-10 left-0 right-0 w-full z-10 c-space'>
                <a
                    href="#about"
                    className='w-fit'
                    onClick={(e) => {
                        e.preventDefault();
                        const aboutSection = document.getElementById('about');
                        const offset = 100; // Custom offset value
                        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                >
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

// Create a separate component to control HackerRoom
const ControlledHackerRoom = () => {
    /*const x = useControls('HackerRoom', {
        positionX: { value: 0.7, min: -10, max: 10 },
        positionY: { value: -8.1, min: -10, max: 10 },
        positionZ: { value: 4.7, min: -10, max: 10 },
        rotationX: { value: 0, min: -10, max: 10 },
        rotationY: { value: -3.4, min: -10, max: 10 },
        rotationZ: { value: 0, min: -10, max: 10 },
        scale:{value: 0.12, min: 0.1, max: 10}
    }); */


    /*const isMobile = useMediaQuery({maxWidth : 450})
    const isSmallScreen = useMediaQuery({maxWidth : 400})
    const isVerySmallScreen = useMediaQuery({maxWidth : 350})
    const isMediumScreen = useMediaQuery({maxWidth : 1030}) */

    const isSmall = useMediaQuery({ maxWidth: 450 });
    const isMobile = useMediaQuery({ maxWidth: 769 });
    const isTablet = useMediaQuery({ maxWidth: 1025 });
    const isMedium = useMediaQuery({ maxWidth: 830 });
    const isVerySmall = useMediaQuery({ maxWidth: 380 })
    const sizes = calculateSizes(isVerySmall, isSmall, isMobile, isTablet, isMedium)

    return (
        <>
            {/*<OrbitControls  /> */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isSmall={isSmall} isMedium={isMedium} isMobile={isMobile} isTablet={isTablet} isVerySmall={isVerySmall}>
                <HackerRoom position={sizes.deskPosition} rotation={[0, -Math.PI, 0]} scale={sizes.deskScale} /> // Ensure small screens are checked first
            </HeroCamera>
            <group>

                <Target position={sizes.targetPosition} scale={isTablet ? 1 : 1.5} />
                <ReactLogo position={sizes.reactLogoPosition} scale={isVerySmall || isSmall ? 0.14 : isMobile || isTablet ? 0.2 : 0.32} />
                <Cube position={sizes.cubePosition} scale={isVerySmall || isSmall ? 0.5 : isMobile || isMedium ? 0.7 : isTablet ? 0.75 : 1} />
                <Rings position={sizes.ringPosition} scale={1} />

            </group>
        </>
    );
};

export default Hero;
