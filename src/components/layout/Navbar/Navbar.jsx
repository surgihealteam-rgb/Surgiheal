import { useState, useEffect } from 'react';
import { Calendar, Menu, PhoneCall, X } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import { navItems } from '../../../constants/navigation';
import Button from '../../ui/Buttons/Button';

const Navbar = ({ onBookAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-16">
          <Logo />
          
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks items={navItems} />
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <button 
              onClick={onBookAppointment}
              className=" rounded-sm border p-2 font-medium text-sm transition-all duration-300  transform cursor-pointer"
            >
              Book Consultation
            </button>
           
              <div className="flex items-center rounded-sm border p-2 justify-between">
                <a
                  href="tel:+919381087752"
                  className=" rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center "
                >
                  <PhoneCall className="w-4 h-4 mr-2" strokeWidth={2} />
                  <span className="font-medium text-sm font-sans"> Call now</span>
                </a>
            </div>

          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && <MobileMenu items={navItems} onClose={() => setIsOpen(false)} onBookAppointment={onBookAppointment} />}
    </nav>
  );
};

export default Navbar;