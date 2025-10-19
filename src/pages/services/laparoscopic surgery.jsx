import React from 'react';
import { Scissors, Calendar, Phone, Shield, Users, Activity, Heart, CheckCircle, XCircle, AlertTriangle, ArrowDown, ArrowRight, Eye } from 'lucide-react';
import PranayPalleImage from '../../assets/doctors/pranayPalle.jpg';

const LaparoscopicSurgery = ({ onBookAppointment }) => {
  const laparoscopicServices = [
    {
      title: 'Minimally Invasive Surgery',
      description: 'Advanced laparoscopic procedures with smaller incisions, reduced pain, and faster recovery.',
      features: ['Laparoscopic Cholecystectomy', 'Hernia Repair', 'Appendectomy', 'Bowel Surgery']
    },
    {
      title: 'Specialized Procedures',
      description: 'Complex laparoscopic surgeries for various abdominal and pelvic conditions.',
      features: ['Gastric Surgery', 'Colorectal Surgery', 'Gynecologic Surgery', 'Urologic Surgery']
    }
  ];

  const facilities = [
    { icon: Scissors, title: 'Minimally Invasive', description: 'Small incisions with faster healing' },
    { icon: Shield, title: 'Reduced Complications', description: 'Lower risk of infection and bleeding' },
    { icon: Activity, title: 'Quick Recovery', description: 'Shorter hospital stay and recovery time' },
    { icon: Eye, title: 'Precision Surgery', description: 'Enhanced visualization and accuracy' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Laparoscopic Surgery</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced minimally invasive surgical procedures with enhanced precision and faster recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {laparoscopicServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Scissors className="w-4 h-4 text-purple-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Laparoscopic Surgery Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Laparoscopic Surgery Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={PranayPalleImage}
                  alt="Dr. Pranay Palle"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Pranay Palle</h3>
                <p className="text-purple-600 font-medium mb-4">Consultant Laparoscopic Surgeon</p>
                <p className="text-gray-600 mb-4">MBBS, MS (General Surgery), FMAS</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Pranay Palle is a highly skilled laparoscopic surgeon with extensive experience in minimally invasive 
                  surgical procedures. He specializes in advanced laparoscopic techniques for abdominal surgeries, ensuring 
                  optimal patient outcomes with reduced pain, minimal scarring, and faster recovery times. His expertise 
                  includes complex laparoscopic procedures for gallbladder, hernia, and gastrointestinal conditions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Laparoscopic Surgery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Minimally Invasive</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">General Surgery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Advanced Techniques</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laparoscopic Surgery Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laparoscopic Surgery Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Laparoscopic Surgery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Laparoscopic Surgery</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Laparoscopic surgery, also known as minimally invasive surgery, uses small incisions and specialized 
                instruments to perform complex procedures. This advanced technique offers numerous benefits including 
                reduced pain, minimal scarring, shorter hospital stays, and faster recovery times.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our laparoscopic surgery department utilizes state-of-the-art equipment and techniques to ensure 
                optimal patient outcomes with enhanced precision and safety.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Laparoscopic Surgery"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Laparoscopic Surgery Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laparoscopic Surgery Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures safe and effective minimally invasive procedures.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pre-operative Assessment</h3>
                <p className="text-gray-600 text-sm">Comprehensive evaluation and surgical planning</p>
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-600 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Preparation</h3>
                <p className="text-gray-600 text-sm">Anesthesia and positioning for optimal access</p>
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-600 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laparoscopic Procedure</h3>
                <p className="text-gray-600 text-sm">Minimally invasive surgery through small incisions</p>
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-600 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Recovery</h3>
                <p className="text-gray-600 text-sm">Faster healing and follow-up care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laparoscopic Surgery Guidelines</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-medium text-green-800">Do's</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Follow pre-operative fasting instructions</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Take prescribed medications as directed</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Keep incision sites clean and dry</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Gradually increase activity as advised</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Attend all follow-up appointments</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-medium text-red-800">Don'ts</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't lift heavy objects for 2-4 weeks</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid driving until cleared by surgeon</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't submerge incisions in water</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid strenuous exercise initially</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't ignore signs of complications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-medium text-gray-800">When to Consider Laparoscopic Surgery</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These conditions may benefit from minimally invasive laparoscopic procedures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Gallbladder stones',
              'Hernia repair',
              'Appendicitis',
              'Bowel conditions',
              'Gynecologic issues',
              'Urologic problems',
              'Gastric surgery',
              'Colorectal conditions'
            ].map((condition, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <Scissors className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-gray-700 text-sm font-medium">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Laparoscopic Surgery Consultation</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation for advanced minimally invasive surgical procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-purple-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaparoscopicSurgery;