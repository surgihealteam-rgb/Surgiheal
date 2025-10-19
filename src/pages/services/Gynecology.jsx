import React from 'react';
import { Heart, Calendar, Phone, Shield, Users, Activity, CheckCircle, XCircle, AlertTriangle, ArrowDown, ArrowRight, Baby } from 'lucide-react';
import SwapnaImage from '../../assets/doctors/Swapna.jpg';

const Gynecology = ({ onBookAppointment }) => {
  const gynecologyServices = [
    {
      title: 'Gynecology',
      description: 'Comprehensive womens health care including pregnancy care and gynecological treatments.',
      features: ['Prenatal Care', 'High-risk Pregnancy', 'Infertility Treatment', 'Menopause Management']
    },
    {
      title: 'Minimally Invasive Procedures',
      description: 'Advanced laparoscopic and robotic procedures for gynecological conditions.',
      features: ['Laparoscopic Surgery', 'Hysterectomy', 'Fibroid Treatment', 'Endometriosis Care']
    }
  ];

  const facilities = [
    { icon: Heart, title: 'Womens Health', description: 'Comprehensive care for all stages of life' },
    { icon: Shield, title: 'Maternity Care', description: 'Complete pregnancy and delivery services' },
    { icon: Activity, title: 'Fertility Services', description: 'Advanced reproductive treatments' },
    { icon: Users, title: 'Expert Team', description: 'Board-certified gynecologists and obstetricians' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Gynecology</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive womens healthcare from adolescence through menopause and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {gynecologyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Heart className="w-4 h-4 text-pink-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Gynecology Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Gynecology Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={SwapnaImage}
                  alt="Dr. Swapna"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Swapna</h3>
                <p className="text-pink-600 font-medium mb-4">Consultant Obstetrician & Gynaecologist, Laparoscopic Surgeon</p>
                <p className="text-gray-600 mb-4">MBBS, MS, FMAS, FICOG</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Swapana is a highly experienced gynecologist and obstetrician specializing in comprehensive 
                  women's healthcare. She has extensive expertise in infertility treatment, high-risk pregnancy care, 
                  and advanced laparoscopic procedures. Her compassionate approach and surgical excellence ensure 
                  optimal outcomes for women at every stage of life.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs">Infertility Specialist</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs">High-risk Pregnancy Care</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs">Laparoscopic Surgery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Health Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Women's Health Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Gynecology  */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Gynecology </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gynecology focuses on women's reproductive health, including menstrual disorders, fertility issues, 
                contraception, and menopause management. Obstetrics specializes in pregnancy care, childbirth, 
                and postpartum care, ensuring safe delivery and healthy outcomes for both mother and baby.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our department offers comprehensive women's healthcare services from adolescence through menopause, 
                including advanced fertility treatments, high-risk pregnancy management, and minimally invasive 
                surgical procedures.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://cdn.shopify.com/s/files/1/0650/5699/7594/files/reasons_for_a_hysterectomy_1024x1024.png?v=1702523575"
                alt="Women's Healthcare"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Journey Flow Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Women's Healthcare Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to women's health throughout different life stages.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Adolescent Care</h3>
                <p className="text-gray-600 text-sm">Menstrual health, education, and preventive care</p>
                <ArrowDown className="w-6 h-6 text-pink-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-pink-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Reproductive Health</h3>
                <p className="text-gray-600 text-sm">Fertility planning, contraception, and family planning</p>
                <ArrowDown className="w-6 h-6 text-pink-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-pink-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pregnancy Care</h3>
                <p className="text-gray-600 text-sm">Prenatal care, delivery, and postpartum support</p>
                <ArrowDown className="w-6 h-6 text-pink-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-pink-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Menopause Care</h3>
                <p className="text-gray-600 text-sm">Hormone therapy and age-related health management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Women's Health Prevention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential preventive measures for maintaining optimal reproductive and overall health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-pink-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Regular Screenings</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Annual pelvic exams, Pap smears, and mammograms for early detection of health issues.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Healthy Lifestyle</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Balanced diet, regular exercise, and stress management for hormonal balance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Baby className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Reproductive Health</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Safe sex practices, contraception counseling, and preconception planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Women's Health Guidelines</h2>
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
                  <span className="text-sm">Schedule regular gynecological checkups</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Practice good menstrual hygiene</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Maintain a healthy weight and exercise regularly</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Take prenatal vitamins if planning pregnancy</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Discuss family history with your doctor</span>
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
                  <span className="text-sm">Don't ignore irregular menstrual cycles</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid douching or harsh feminine products</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't skip recommended screenings</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid smoking and excessive alcohol consumption</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't ignore pelvic pain or unusual symptoms</span>
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
              <h2 className="text-3xl font-medium text-gray-800">When to See a Gynecologist</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't ignore these symptoms. Early consultation ensures better health outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Irregular periods',
              'Severe pelvic pain',
              'Unusual vaginal discharge',
              'Heavy menstrual bleeding',
              'Fertility concerns',
              'Menopause symptoms',
              'Breast lumps or changes',
              'Painful intercourse'
            ].map((symptom, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-700 text-sm font-medium">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Womens Health Consultation</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our womens health specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-pink-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors flex items-center justify-center"
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

export default Gynecology;