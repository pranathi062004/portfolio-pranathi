import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active section logic
            const sections = ['hero', 'skills', 'projects'];
            const currentPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= currentPosition && (element.offsetTop + element.offsetHeight) > currentPosition) {
                    setActiveSection(section);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    Pranathi<span>.</span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className={`menu-toggle ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation Links */}
                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <li>
                        <a
                            href="#hero"
                            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
