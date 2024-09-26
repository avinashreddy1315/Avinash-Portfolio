import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../component/CanvasLoader'
import Developer from '../component/Developer'

const Experience = () => {

    const [animationName, setAnimationName] = useState('idle')
  return (
    <section className='c-space my-20'>
        <div className='w-full text-white-600'>
            <h3 className='head-text'>My Work Experience</h3>
            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>
                        <ambientLight intensity={7}/>
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                        <directionalLight position={[10, 10, 10]}/>
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>
                        <Suspense fallback={<CanvasLoader/>}>
                            <Developer position-y={-2.5} scale={3} animationName={animationName}/>
                        </Suspense>

                    </Canvas>

                </div>
                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map(({id, name, pos, duration, title, animation, icon})=>(
                            <div key={id}
                            onClick={() =>setAnimationName(animation.toLowerCase())} 
                            onPointerOver={() =>setAnimationName(animation.toLocaleLowerCase())} 
                            onPointerOut={() =>setAnimationName('idle')} className='work-content_container group'>
                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo'>
                                        <img src={icon} alt='logo' className={`w-full h-full ${id === 1 ? 'invert' : ''}`}
                                        />
                                    </div>
                                    <div className='work-content_bar'/>
                                </div>
                                <div className='sm:p-5 px-2.5 py-5'>
                                    <p className='font-bold text-white-800'>{name}</p>
                                    <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>

    </section>
  )
}

export default Experience
