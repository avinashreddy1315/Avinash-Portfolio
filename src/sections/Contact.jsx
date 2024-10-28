import  emailjs  from '@emailjs/browser';
import React, { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showImage, setShowImage] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth >= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = ({target : {name, value}}) => {
   setForm({...form,[name]: value})
  };

  //service_cfo2tzr

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
      await emailjs.send('service_cfo2tzr', 'template_9tqprno',
        {from_name : form.name,
         to_name : 'Avinash Reddy',
         from_email : form.email,
         to_email : 'avinash.r@careeritjob.com',
         message : form.message
        },
        'KJ5nHLFPKl7rUD6gz'
      )

        setLoading(false);
        alert('Your message had been sent')

    }catch(error){
      setLoading(false);
      console.log(error.text)
      alert('someting went wrong')
    }

    setForm({
      name: '',
      email: '',
      message: ''
    })
    

  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* Conditionally render the image */}
        {showImage && (
          <img
            id="terminal_image"
            src="/assets/terminal.png"
            alt="terminal-background"
            className="absolute inset-0 min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-1">
            Let’s connect over a coffee and explore how we can create exciting opportunities together. 
            I’m always eager to collaborate and discuss how my skills can contribute to your team’s success!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-4">
            <label className="space-y-2">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Full Name"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Email"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Enter your Message"
              />
            </label>

            <button className='field-btn' type='submit' disabled={loading}>{loading ?'Sending..': 'Send Message'}
              <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
