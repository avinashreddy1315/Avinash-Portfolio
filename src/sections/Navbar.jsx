import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants'; // Assuming the path is correct
import ResumeButton from '../component/ResumeButton';



const NavItems = ({ activeSection, handleClick }) => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, href, name }) => (
                <li
                    key={id}
                    className={`nav-li gap-2 ${activeSection === href.slice(1) ? 'text-white' : 'text-neutral-400'}`} // Highlight if activeSection matches href
                >
                    <a href={href} className='nav-li_a' onClick={(e) => handleClick(e, href)}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(navLinks[0].href.slice(1)); // Set initial active section to 'home'

    const handleClick = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
    
        const offset = 100; // Adjust this value according to your navbar height
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
    
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth',
        });
    
        setActiveSection(href.slice(1)); // Manually set the active section when clicking on nav links
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Set active section to the section's ID when in view
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold to detect earlier/later in the scroll
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section)); // Clean up observer on unmount
        };
    }, []);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href='/' className='text-neutral-400 font-bold text-2xl hover:text-white transition-colors'>
                        Avinash Reddy
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="transition-transform duration-300 ease-in-out text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label='Toggle menu'>
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            alt='toggle'
                            className={`w-8 h-8 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-100'}`}
                        />
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems activeSection={activeSection} handleClick={handleClick} />
                        {/* Add Resume Button */}
                        <div className="ml-4">
                           <ResumeButton/>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} flex flex-row`}>
                <nav className="p-5">
                    <NavItems activeSection={activeSection} handleClick={handleClick} />
                    {/* Add Resume Button in mobile menu */}
                        <div className='mx-7 mt-4'>
                        <ResumeButton />
                        </div>
                        
                    
                </nav>
            </div>
            
        </header>
    );
};

export default Navbar;
