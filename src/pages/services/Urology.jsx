import React from 'react';
import { Activity, Calendar, Phone, Shield, Users, Stethoscope, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import AvinashImage from '../../assets/doctors/Avinash.jpg';

const Urology = ({ onBookAppointment }) => {
  const urologyServices = [
    {
      title: 'Comprehensive Urology Care',
      description: 'Complete urological care for kidney, bladder, and reproductive system disorders.',
      features: ['Kidney Stone Treatment', 'Prostate Care', 'Bladder Disorders', 'Male Infertility']
    },
    {
      title: 'Minimally Invasive Procedures',
      description: 'Advanced laparoscopic and robotic urological procedures.',
      features: ['Robotic Surgery', 'Laser Lithotripsy', 'Endoscopic Procedures', 'Reconstructive Surgery']
    }
  ];

  const facilities = [
    { icon: Activity, title: 'Advanced Diagnostics', description: 'State-of-the-art urological imaging' },
    { icon: Shield, title: 'Minimally Invasive', description: 'Laparoscopic and robotic procedures' },
    { icon: Stethoscope, title: 'Comprehensive Care', description: 'Complete urological health management' },
    { icon: Users, title: 'Expert Urologists', description: 'Board-certified urological specialists' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Urology</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert care for urological conditions with advanced minimally invasive treatments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {urologyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Activity className="w-4 h-4 text-blue-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Urology Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Urology Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={AvinashImage}
                  alt="Dr. Avinash"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Avinash</h3>
                <p className="text-blue-600 font-medium mb-4">Consultant Urologist & Minimal Access Surgeon</p>
                <p className="text-gray-600 mb-4">MBBS, MS (General Surgery), MCh (Urology/Genitourinary Surgery)</p>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Avinash is a highly skilled urologist with extensive experience in minimally invasive urological procedures. 
                  He specializes in advanced laparoscopic and robotic surgeries, kidney stone management, prostate disorders, 
                  and reconstructive urology. His patient-centered approach ensures comprehensive care with the latest treatment modalities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urological Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Urological Services</h2>
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

      {/* About Urology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Urology</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Urology is a medical specialty that focuses on the urinary tract system in both males and females, 
                and the reproductive system in males. Common conditions include kidney stones, urinary tract infections, 
                prostate disorders, bladder problems, and male infertility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our urology department offers comprehensive diagnostic and treatment services using the latest 
                minimally invasive techniques, ensuring faster recovery and better outcomes for our patients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://scitechdaily.com/images/Scientist-Researching-Kidneys-Magnifying-Glass-777x518.jpg"
                alt="Urology Care"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Urological Health Prevention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple lifestyle changes can significantly reduce your risk of urological problems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Stay Hydrated</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Drink 8-10 glasses of water daily to flush out toxins and prevent kidney stones and UTIs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Maintain Hygiene</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Practice good personal hygiene and urinate after sexual activity to prevent infections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Stethoscope className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Regular Checkups</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Schedule regular urological screenings, especially after age 40 for prostate health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Urological Health Guidelines</h2>
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
                  <span className="text-sm">Drink plenty of water throughout the day</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Maintain a healthy diet rich in fruits and vegetables</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Exercise regularly to maintain overall health</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Practice safe sex and maintain good hygiene</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Seek medical attention for persistent symptoms</span>
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
                  <span className="text-sm">Don't hold urine for extended periods</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid excessive consumption of caffeine and alcohol</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't ignore symptoms like blood in urine</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid smoking as it increases bladder cancer risk</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't self-medicate for urological symptoms</span>
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
              <h2 className="text-3xl font-medium text-gray-800">When to See a Urologist</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't ignore these warning signs. Early detection and treatment can prevent serious complications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Blood in urine',
              'Frequent urination',
              'Painful urination',
              'Difficulty urinating',
              'Kidney stones',
              'Erectile dysfunction',
              'Prostate problems',
              'Recurrent UTIs'
            ].map((symptom, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-700 text-sm font-medium">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Urology Consultation</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert evaluation and treatment for urological conditions.
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

export default Urology;