import React from 'react';
import { Baby, Calendar, Phone, Heart, Shield, Users, Stethoscope } from 'lucide-react';

const Pediatrics = ({ onBookAppointment }) => {
  const pediatricServices = [
    {
      title: 'Comprehensive Child Healthcare',
      description: 'Specialized healthcare for infants, children, and adolescents with child-friendly environment.',
      features: ['Newborn Care', 'Vaccination', 'Child Development', 'Pediatric Surgery']
    },
    {
      title: 'Specialized Pediatric Care',
      description: 'Expert care for complex pediatric conditions with family-centered approach.',
      features: ['Pediatric Cardiology', 'Child Psychology', 'Growth Monitoring', 'Adolescent Medicine']
    }
  ];

  const facilities = [
    { icon: Baby, title: 'Newborn Care', description: 'Specialized care for newborns and infants' },
    { icon: Heart, title: 'Child-Friendly Environment', description: 'Comfortable and welcoming spaces for children' },
    { icon: Shield, title: 'Vaccination Programs', description: 'Complete immunization schedules' },
    { icon: Users, title: 'Pediatric Specialists', description: 'Board-certified pediatricians and specialists' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Pediatrics</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized healthcare for children from birth through adolescence in a caring environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {pediatricServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Baby className="w-4 h-4 text-green-500 mr-3" />
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
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Pediatric Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Pediatric Consultation</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our pediatric specialists for your child's healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors flex items-center justify-center"
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

export default Pediatrics;