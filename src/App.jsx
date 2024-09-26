import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/experience'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <div className='view'>
        <section id="home" >
          <Hero />
        </section>
        <section id="about" className='block'>
          <About />
        </section>
        <section id="project" className='block'>
          <Projects/>
        </section>
        <section  className='block'>
          <Experience/>
        </section>
        <section id="contact" className='block'>
          <Contact/>
        </section>
        <Footer/>
        
      </div>
      {/* Add other sections here with appropriate IDs */}
    </main>

  )
}

export default App

