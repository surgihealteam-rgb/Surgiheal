import React from 'react';
import { Activity, Clock, Phone, Calendar, Shield, Users } from 'lucide-react';

const EmergencyCare = ({ onBookAppointment }) => {
  const emergencyServices = [
    {
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency medical services with fully equipped trauma center and critical care units.',
      features: ['Trauma Center', 'ICU/CCU', 'Emergency Surgery', 'Ambulance Service']
    },
    {
      title: 'Urgent Care',
      description: 'Walk-in medical care for non-life-threatening conditions with shorter wait times.',
      features: ['Walk-in Service', 'Minor Injuries', 'Illness Treatment', 'Basic Diagnostics']
    }
  ];

  const facilities = [
    { icon: Activity, title: 'Advanced Life Support', description: 'State-of-the-art equipment for critical care' },
    { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock emergency services' },
    { icon: Shield, title: 'Trauma Center', description: 'Level 1 trauma care facility' },
    { icon: Users, title: 'Expert Team', description: 'Experienced emergency medicine specialists' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Emergency Care</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Immediate, life-saving medical care available 24/7 with advanced trauma facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Activity className="w-4 h-4 text-red-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Emergency Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Emergency Contact</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            In case of medical emergency, call immediately or visit our emergency department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+91938107752"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency: +91 938107752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-red-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-800 transition-colors flex items-center justify-center"
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

export default EmergencyCare;