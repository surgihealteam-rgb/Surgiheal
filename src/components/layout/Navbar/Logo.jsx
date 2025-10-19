import { Heart } from 'lucide-react';
import logoImg from '../../../assets/transparant-logo.png';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer group">
      <img src={logoImg} alt="SurgiHeal Logo" className="h-10 w-auto" />
      {/* surgiheal-webapp/src/assets/transparant-logo.png */}
      {/* <div className="relative">
        <Heart 
          className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 transform group-hover:scale-110" 
          fill="currentColor"
        />
        <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          SurgiHeal
        </span>
        <span className="text-xs text-gray-500 -mt-1">Healthcare</span>
      </div> */}
    </div>
  );
};

export default Logo;