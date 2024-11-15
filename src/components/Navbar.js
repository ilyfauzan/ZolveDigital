import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState('bg-teal-600');
  const [scrollPosition, setScrollPosition] = useState(0);

  // Check scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);

    if (scrollY > document.getElementById('hero8').offsetTop) {
      setNavbarColor('bg-teal-600');  // Hero3 section
    } else if (scrollY > document.getElementById('hero7').offsetTop) {
      setNavbarColor('bg-teal-700');  // Hero2 section
    } else if (scrollY > document.getElementById('hero6').offsetTop) {
      setNavbarColor('bg-teal-800');  // Hero2 section
    } else if (scrollY > document.getElementById('hero5').offsetTop) {
      setNavbarColor('bg-teal-600');  // Hero2 section
    } else if (scrollY > document.getElementById('hero4').offsetTop) {
        setNavbarColor('bg-teal-700');  // Hero2 section
    } else if (scrollY > document.getElementById('hero3').offsetTop) {
        setNavbarColor('bg-teal-800');  // Hero2 section
    } else if (scrollY > document.getElementById('hero2').offsetTop) {
      setNavbarColor('bg-teal-600');  // Hero2 section
    } else if (scrollY > document.getElementById('hero').offsetTop) {
      setNavbarColor('bg-teal-800');  // Hero section
    } else {
      setNavbarColor('bg-teal-600');  // Default when at the top
    }
  };
 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.error(`Section with ID ${sectionId} not found.`);
    }
  };

  const handleBundleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToSection('hero6');
  };

  const handlePriceClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToSection('hero7');
  };

  // Listen for scroll event on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarColor}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-2"> {/* Reduced padding */}
        {/* Logo and Text */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Logo - Visible only on mobile */}
          <img src="/zolve-logo.png" alt="Logo" className="h-10 md:hidden" /> {/* Reduced logo height */}

          {/* Desktop Logo and Text */}
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-white font-bold text-lg">ZOLVE</span>
            <img src="/zolve-logo.png" alt="Logo" className="h-10" /> {/* Reduced logo height */}
            <span className="text-white font-bold text-lg">DIGITAL</span>
          </div>
        </div>

        {/* Navbar Menu */}
        <div className="flex justify-end space-x-8 font-bold mr-4">
          {/* Ensure text remains white */}
          <a
            href="#bundle"
            className="text-white text-lg hover:text-yellow-500"
            onClick={handleBundleClick}
          >
            Bundle
          </a>
          <a
            href="#price"
            className="text-white text-lg hover:text-yellow-500"
            onClick={handlePriceClick}
          >
            Price
          </a>
          {/* Contact Link - WhatsApp */}
          <a
            href="https://wa.me/6287823410388"
            className="text-white text-lg hover:text-yellow-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
