import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logoImg from '../../../assets/transparant-logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoImg} alt="SurgiHeal Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Providing world-class healthcare with compassion, expertise, and state-of-the-art medical technology for over 25 years.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button key={index} className="w-10 h-10 bg-[purple] rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 text-white">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Find a Doctor', 'Patient Portal', 'Health Resources', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 font-medium hover:text-[purple] text-sm transition-colors duration-300 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold mb-6">Medical Services</h4>
            <ul className="space-y-3">
              {['Emergency Care', 'Cardiology', 'Orthopedics', 'Pediatrics', 'Neurology', 'Oncology'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-[purple] font-medium text-sm transition-colors duration-300 flex items-center group">
                    <Heart className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div className='text-sm'>
                  <p className="text-gray-600">1. Phase 1&2, Road No. 5, near Manjeera Trinity Homes, Kukatpally Housing Board Colony.</p>
                  <p className="text-gray-600">Kukatpally,Hyderabad Telangana 500072.</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm space-x-3">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">+91 9381087752</p>
                  <p className="text-sm text-gray-500">24/7 Emergency</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm space-x-3">
                <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <p className="text-gray-600">info@surgiheal.com</p>
              </div>
              
              <div className="flex text-sm items-center space-x-3">
                <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Mon-Fri: 8AM-8PM</p>
                  <p className="text-sm text-gray-500">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-md font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-600 text-sm">Subscribe to our newsletter for health tips and updates</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-100 border border-gray-300 rounded-l-lg focus:outline-none focus:border-purple-500 text-gray-900"
              />
              <button className="px-6 py-3 bg-purple-600 hover:bg-teal-600 rounded-r-lg transition-colors duration-300 flex items-center text-white">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">© 2024 SurgiHeal Healthcare. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;