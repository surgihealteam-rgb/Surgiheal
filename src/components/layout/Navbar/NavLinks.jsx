import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavLinks = ({ items }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ul className="flex items-center space-x-8">
      {items.map((item) => (
        <li key={item.name} className="relative group">
          {item.dropdown ? (
            <div
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2">
                <span>{item.name}</span>
                <span className={`transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} >&#9660;</span>
                {/* <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} 
                /> */}
              </button>
              
              {activeDropdown === item.name && (
                <div className="absolute top-full left-0 w-56 pb-2 pt-3.5 animate-in slide-in-from-top-2 duration-200">
                  <div className='bg-white shadow-xl border border-gray-100 '>
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="font-medium text-sm">{subItem.name}</div>
                      {subItem.description && (
                        <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                      )}
                    </a>
                  ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.href}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;