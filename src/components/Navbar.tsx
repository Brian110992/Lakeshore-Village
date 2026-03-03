import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAmenitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Market Report', path: '/market-report' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const amenitiesLinks = [
    { name: 'On Site', path: '/amenities/on-site' },
    { name: 'Nearby', path: '/amenities/nearby' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-graphite py-3 shadow-lg' : 'bg-gradient-to-b from-black/60 to-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col drop-shadow-md">
          <span className="font-accent text-gold text-3xl leading-none">Lakeshore Village</span>
          <span className="text-white text-[10px] tracking-[0.2em] uppercase mt-1">Lodi, California</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold drop-shadow-md ${
              location.pathname === '/' ? 'text-gold' : 'text-white'
            }`}
          >
            Home
          </Link>

          <Link
            to="/search"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold drop-shadow-md ${
              location.pathname === '/search' ? 'text-gold' : 'text-white'
            }`}
          >
            Search
          </Link>

          {/* Amenities Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsAmenitiesOpen(!isAmenitiesOpen)}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold drop-shadow-md ${
                location.pathname.startsWith('/amenities') ? 'text-gold' : 'text-white'
              }`}
            >
              Amenities <ChevronDown size={14} className={`transition-transform duration-300 ${isAmenitiesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isAmenitiesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-graphite rounded-lg shadow-xl py-2 border border-white/10">
                {amenitiesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsAmenitiesOpen(false)}
                    className={`block px-4 py-2 text-sm uppercase tracking-wide hover:bg-white/10 hover:text-gold transition-colors ${
                      location.pathname === link.path ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/market-report"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold drop-shadow-md ${
              location.pathname === '/market-report' ? 'text-gold' : 'text-white'
            }`}
          >
            Market Report
          </Link>

          <Link
            to="/gallery"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold drop-shadow-md ${
              location.pathname === '/gallery' ? 'text-gold' : 'text-white'
            }`}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold drop-shadow-md ${
              location.pathname === '/contact' ? 'text-gold' : 'text-white'
            }`}
          >
            Contact
          </Link>

          <Link to="/contact" className="btn-primary py-2 px-5 text-sm shadow-lg">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white drop-shadow-md" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-graphite absolute top-full left-0 w-full py-8 px-4 flex flex-col gap-6 shadow-2xl border-t border-white/10">
          <Link to="/" onClick={() => setIsOpen(false)} className={`text-lg font-medium tracking-wide uppercase ${location.pathname === '/' ? 'text-gold' : 'text-white'}`}>Home</Link>
          <Link to="/search" onClick={() => setIsOpen(false)} className={`text-lg font-medium tracking-wide uppercase ${location.pathname === '/search' ? 'text-gold' : 'text-white'}`}>Search</Link>
          
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-gold uppercase tracking-widest">Amenities</span>
            {amenitiesLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium tracking-wide uppercase pl-4 ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/market-report" onClick={() => setIsOpen(false)} className={`text-lg font-medium tracking-wide uppercase ${location.pathname === '/market-report' ? 'text-gold' : 'text-white'}`}>Market Report</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className={`text-lg font-medium tracking-wide uppercase ${location.pathname === '/gallery' ? 'text-gold' : 'text-white'}`}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-lg font-medium tracking-wide uppercase ${location.pathname === '/contact' ? 'text-gold' : 'text-white'}`}>Contact</Link>
          
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
