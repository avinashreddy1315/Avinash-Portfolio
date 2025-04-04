import React from 'react'
import ResumeButton from '../component/ResumeButton'

const Footer = () => {
  return (
   <section className='c-space pt-7 pb-5 border-t border-black-300 flex justify-center items-center flex-wrap gap-5'>
        <div className='flex gap-3 justify-center items-center'>
                <a className='social-icon' href='https://github.com/avinashreddy1315' target="_blank" rel='noreferrer'>
                    <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2'/>
                </a>
                <a className='social-icon' href='https://www.linkedin.com/in/avinash1315/' target="_blank" rel='noreferrer'>
                    <img src='/assets/linkedin.webp' alt='LinkedIn' className='w-1/2 h-1/2 invert'/>
                </a>
                
                <ResumeButton/>
                
                

        </div>
   </section>
  )
}

export default Footer
