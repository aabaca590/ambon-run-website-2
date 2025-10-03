
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-zinc-600 hover:text-purple-600 transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-zinc-900">
            synergy <span className="text-purple-600">orb</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">features</NavLink>
            <NavLink href="#pricing">pricing</NavLink>
            <NavLink href="#testimonials">testimonials</NavLink>
            <NavLink href="#contact">contact</NavLink>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block bg-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
