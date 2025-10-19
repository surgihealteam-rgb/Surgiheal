import React from 'react';
import { Bone, Calendar, Phone, Activity, Shield, Users, Stethoscope } from 'lucide-react';
import SaiThirumalRaoImage from '../../assets/doctors/saiThirumalRao.jpg';

const Orthopedics = ({ onBookAppointment }) => {
  const orthopedicServices = [
    {
      title: 'Comprehensive Bone & Joint Care',
      description: 'Complete orthopedic care including sports medicine, joint replacement, and arthroscopic surgery.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Arthroscopy']
    },
    {
      title: 'Specialized Treatments',
      description: 'Advanced orthopedic treatments for complex bone and joint conditions.',
      features: ['Spine Surgery', 'Hand Surgery', 'Foot & Ankle Care', 'Pediatric Orthopedics']
    }
  ];

  const facilities = [
    { icon: Bone, title: 'Joint Replacement', description: 'Advanced hip, knee, and shoulder replacements' },
    { icon: Activity, title: 'Sports Medicine', description: 'Specialized care for sports injuries' },
    { icon: Shield, title: 'Fracture Care', description: 'Emergency and elective fracture treatment' },
    { icon: Users, title: 'Orthopedic Team', description: 'Board-certified orthopedic surgeons' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Orthopedics</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert bone and joint care with advanced surgical and non-surgical treatment options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {orthopedicServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Bone className="w-4 h-4 text-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Orthopedic Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Orthopedic Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={SaiThirumalRaoImage}
                  alt="Dr. Sai Thirumal Rao"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Sai Thirumal Rao</h3>
                <p className="text-blue-600 font-medium mb-4">Consultant Orthopedic Surgeon</p>
                <p className="text-gray-600 mb-4">MBBS, MS (Orthopedics)</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Sai Thirumal Rao is a highly skilled orthopedic surgeon with extensive experience in joint replacement, 
                  fracture management, and sports injury care. He specializes in both surgical and non-surgical treatments 
                  for bone and joint conditions, ensuring comprehensive care for patients of all ages. His expertise includes 
                  advanced arthroscopic procedures and minimally invasive orthopedic surgeries.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Joint Replacement</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Fracture Management</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Sports Medicine</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Arthroscopy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Orthopedic Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Orthopedic Consultation</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert evaluation and treatment for your bone and joint concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center"
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

export default Orthopedics;