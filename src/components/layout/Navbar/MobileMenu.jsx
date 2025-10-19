import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail } from 'lucide-react';

const MobileMenu = ({ items, onClose, onBookAppointment }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {openDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-2 animate-in slide-in-from-top-1 duration-200">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={onClose}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button 
            onClick={() => {
              onBookAppointment();
              onClose();
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
          >
            Book Appointment
          </button>
          
          <div className="flex items-center justify-center space-x-6 mt-4">
            <a href="tel:+9381087752" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={16} />
              <span className="text-sm">Call Us</span>
            </a>
            <a href="mailto:info@surgiheal.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={16} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;