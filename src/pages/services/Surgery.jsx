import React from 'react';
import { Scissors, Calendar, Phone, Shield, Users, Activity, Heart, CheckCircle, XCircle, AlertTriangle, ArrowDown, ArrowRight, Zap } from 'lucide-react';
import ShivakumarImage from '../../assets/doctors/shivakumar.jpg';

const Surgery = ({ onBookAppointment }) => {
  const surgicalServices = [
    {
      title: 'General & Laparoscopic Surgery',
      description: 'Advanced minimally invasive surgical procedures with faster recovery and reduced scarring.',
      features: ['Laparoscopic Surgery', 'Hernia Repair', 'Gallbladder Surgery', 'Appendectomy']
    },
    {
      title: 'Laser & Podiatric Surgery',
      description: 'Precision laser treatments and specialized foot and ankle surgical procedures.',
      features: ['Laser Surgery', 'Diabetic Foot Care', 'Ingrown Toenail Surgery', 'Wound Management']
    }
  ];

  const facilities = [
    { icon: Scissors, title: 'Minimally Invasive Surgery', description: 'Advanced laparoscopic techniques' },
    { icon: Zap, title: 'Laser Surgery', description: 'Precision laser treatments' },
    { icon: Heart, title: 'Podiatric Care', description: 'Specialized foot and ankle surgery' },
    { icon: Shield, title: 'Day Care Surgery', description: 'Same-day surgical procedures' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">General Surgery </h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced surgical procedures using cutting-edge technology and minimally invasive techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {surgicalServices.map((service, index) => (
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

      {/* Our Surgery Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Surgery Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={ShivakumarImage}
                  alt="Dr. Shivakumar"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Shivakumar</h3>
                <p className="text-purple-600 font-medium mb-4">Consultant General, Laparoscopic, Laser & Podiatric Surgeon</p>
                <p className="text-gray-600 mb-4">MBBS, MS, FMAS, FIAGES</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Shivakumar is a highly experienced surgeon specializing in general surgery, advanced laparoscopic procedures, 
                  laser surgery, and podiatric care. With extensive expertise in minimally invasive techniques, he ensures optimal 
                  patient outcomes with faster recovery times. His comprehensive approach to surgical care includes diabetic foot 
                  management, wound care, and precision laser treatments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Laparoscopic Surgery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Laser Surgery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Podiatric Surgery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">General Surgery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Surgical Services</h2>
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

      {/* About Surgery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Modern Surgery</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modern surgery encompasses general surgery, laparoscopic procedures, laser treatments, and specialized 
                podiatric care. Minimally invasive techniques reduce recovery time, minimize scarring, and improve 
                patient outcomes. Our comprehensive surgical services include hernia repair, gallbladder surgery, 
                appendectomy, and advanced diabetic foot care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our surgical department combines traditional surgical expertise with cutting-edge technology, 
                ensuring precise, safe, and effective treatments for a wide range of conditions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Surgery"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Process Flowchart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Surgical Process Flowchart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive care from consultation to recovery.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pre-operative Consultation</h3>
                <p className="text-gray-600 text-sm">Detailed evaluation, medical history, and surgical planning</p>
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-600 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pre-operative Preparation</h3>
                <p className="text-gray-600 text-sm">Tests, anesthesia consultation, and surgical preparation</p>
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-600 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Surgery</h3>
                <p className="text-gray-600 text-sm">Minimally invasive surgical procedure with advanced techniques</p>
                <ArrowDown className="w-6 h-6 text-purple-600 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-600 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Post-operative Care</h3>
                <p className="text-gray-600 text-sm">Recovery monitoring, wound care, and follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Surgical Prevention & Preparation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proper preparation and lifestyle choices can improve surgical outcomes and recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Pre-operative Care</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Follow pre-operative instructions, maintain good nutrition, and avoid smoking before surgery.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Healthy Lifestyle</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Maintain a healthy weight, exercise regularly, and manage chronic conditions effectively.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Early Intervention</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Seek medical attention early for symptoms to prevent complications requiring emergency surgery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Surgical Care Guidelines</h2>
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
                  <span className="text-sm">Follow all pre-operative instructions carefully</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Maintain good hygiene before and after surgery</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Take prescribed medications as directed</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Attend all follow-up appointments</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Report any unusual symptoms immediately</span>
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
                  <span className="text-sm">Don't eat or drink before surgery as instructed</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid smoking and alcohol before and after surgery</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't ignore post-operative care instructions</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid heavy lifting or strenuous activities</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't skip follow-up appointments</span>
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
              <h2 className="text-3xl font-medium text-gray-800">When to Seek Surgical Consultation</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't ignore these symptoms that may require surgical intervention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Persistent abdominal pain',
              'Hernia symptoms',
              'Gallbladder pain',
              'Appendicitis signs',
              'Diabetic foot problems',
              'Non-healing wounds',
              'Ingrown toenails',
              'Chronic foot pain'
            ].map((symptom, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-700 text-sm font-medium">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Surgical Consultation</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert surgeon for comprehensive evaluation and treatment planning.
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

export default Surgery;