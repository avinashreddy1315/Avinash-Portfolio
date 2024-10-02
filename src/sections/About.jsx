import React, { useRef, useEffect, useState, Suspense } from 'react';
import Globe from 'react-globe.gl';
import Button from '../component/Button';


const About = () => {
  const globeRef = useRef();

  const [copied, setCopied] = useState(false)

  // Coordinates for Nashua, New Hampshire
  const nashuaLocation = { lat: 42.7654, lng: -71.4676 };
  const usaLocation = { lat: 37.0902, lng: -95.7129 };

  useEffect(() => {
    // Set up IntersectionObserver to detect when the About section is in view
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Rotate and zoom the globe to focus on the United States and Nashua location
            globeRef.current.pointOfView({ lat: usaLocation.lat, lng: usaLocation.lng, altitude: 0.8 }, 2000); 
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(about);

    return () => {
      observer.disconnect();
    };
  }, []);


  const handleCopy = () =>{
    navigator.clipboard.writeText('avinashreddy1315@gmail.com');
    setCopied(true);
    setTimeout(() => {
        setCopied(false)
    }, 2000);
  }

  return (
    <section className='about c-space my-20'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="/assets/grid1.png" alt='grid-1' className='animate-spin-photo w-full sm:h-[276px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>Hi, I'm Avinash Reddy</p>
              <p className='grid-subtext'>With 3.5 years of corporate experience and 5 years of personal experience, I have honed my skills in frontend and backend development with passion.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid2.png' alt='grid-2' className=' w-full sm:h-[276px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>I specialize in JavaScript with a focus on React and Node.js ecosystem.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center relative'>
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                showAtmosphere
                showGraticules
                pointOfView={{ lat: nashuaLocation.lat, lng: nashuaLocation.lng, altitude: 0.5 }} // Focuses on the US with a zoom effect
                labelsData={[
                  { 
                    lat: nashuaLocation.lat, 
                    lng: nashuaLocation.lng, 
                    size: 1, 
                    color: 'red', 
                  }
                ]}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelSize={(d) => d.size}
                labelColor={(d) => d.color}
                labelText={(d) => ''}
                labelDotRadius={0.7} // Add the radius of the red dot
              />

              
            </div>
            <div>
                <p className='grid-subtext'>I am based in Nashua, US, and I am open to relocation anywhere within the US or remote work opportunities.</p>
                <a
                    href="#contact"
                    className='w-fit'
                    onClick={(e) => {
                        e.preventDefault();
                        const aboutSection = document.getElementById('contact');
                        const offset = 100; // Custom offset value
                        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                ><Button name="Contact Me" isBeam  containerClass = " w-full mt-10"/></a>
                
            </div>
            </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
            <div className='grid-container'>
              
               <img src='/assets/coding.png' alt='coding.png' className='w-full sm:h-[276px] h-fit object-contain'/>
                <div>
                  <p className='grid-headtext'>My Passion for Coding</p>
                  <p className='grid-subtext'>I love sloving problems and building things through code. Coding isn't just my profession-it is my passion</p>
                </div>
            </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
            <div className='grid-container'>
            <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/> 
            <div className='space-y-2'>
                <p className='grid-subtext text-center'>Contact me</p>
                <div className='copy-container' onClick={handleCopy}>
                    <img src={copied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                    <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>avinashreddy1315@gmail.com</p>
                </div>

            </div>



            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
