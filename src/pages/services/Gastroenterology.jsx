import React from 'react';
import { Activity, Calendar, Phone, Shield, Users, Stethoscope, CheckCircle, XCircle, AlertTriangle, ArrowDown, ArrowRight } from 'lucide-react';
import PrashanthImage from '../../assets/doctors/Prashanth.jpg';

const Gastroenterology = ({ onBookAppointment }) => {
  const gastroServices = [
    {
      title: 'Digestive System Care',
      description: 'Comprehensive care for digestive system disorders including liver, stomach, and intestinal conditions.',
      features: ['Endoscopy', 'Liver Care', 'IBD Treatment', 'Colonoscopy']
    },
    {
      title: 'Advanced Procedures',
      description: 'State-of-the-art diagnostic and therapeutic procedures for gastrointestinal conditions.',
      features: ['ERCP', 'EUS', 'Capsule Endoscopy', 'Therapeutic Endoscopy']
    }
  ];

  const facilities = [
    { icon: Activity, title: 'Advanced Endoscopy', description: 'State-of-the-art endoscopic procedures' },
    { icon: Shield, title: 'Liver Care', description: 'Comprehensive hepatology services' },
    { icon: Stethoscope, title: 'Digestive Health', description: 'Complete GI tract evaluation and treatment' },
    { icon: Users, title: 'GI Specialists', description: 'Board-certified gastroenterologists' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Gastroenterology</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert care for digestive system disorders with advanced diagnostic and treatment options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {gastroServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Activity className="w-4 h-4 text-orange-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Gastroenterology Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Gastroenterology Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={PrashanthImage}
                  alt="Dr. Prashanth"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Prashanth</h3>
                <p className="text-orange-600 font-medium mb-4">Consultant Surgical Gastroenterologist</p>
                <p className="text-gray-600 mb-4">MBBS, MS (General Surgery), MCh (Surgical Gastroenterology)</p>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Prashanth is a highly experienced surgical gastroenterologist specializing in advanced 
                  minimally invasive procedures for digestive system disorders. He has extensive expertise in 
                  laparoscopic surgery, liver surgery, pancreatic procedures, and complex GI surgeries. 
                  His commitment to patient care and surgical excellence ensures optimal outcomes for all patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gastroenterology Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Gastroenterology Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Gastroenterology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Gastroenterology</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gastroenterology focuses on the digestive system and its disorders, including the esophagus, 
                stomach, small intestine, colon, rectum, pancreas, gallbladder, bile ducts, and liver. 
                Common conditions include GERD, peptic ulcers, IBD, liver diseases, and gallbladder disorders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our gastroenterology department offers comprehensive diagnostic and therapeutic services using 
                advanced endoscopic techniques, ensuring accurate diagnosis and effective treatment for all 
                digestive system disorders.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://drneilgalletly.com/wp-content/uploads/2023/11/image-2-1.jpg"
                alt="Gastroenterology Care"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Flowchart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Treatment Process Flowchart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures comprehensive care from initial consultation to recovery.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Detailed medical history and physical examination</p>
                <ArrowDown className="w-6 h-6 text-orange-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-orange-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Diagnostic Tests</h3>
                <p className="text-gray-600 text-sm">Endoscopy, imaging, and laboratory investigations</p>
                <ArrowDown className="w-6 h-6 text-orange-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-orange-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Treatment Plan</h3>
                <p className="text-gray-600 text-sm">Personalized treatment and follow-up care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Digestive Health Prevention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Maintain optimal digestive health with these essential lifestyle practices.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Healthy Diet</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Eat fiber-rich foods, limit processed foods, and maintain regular meal times for optimal digestion.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Stress Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Practice stress reduction techniques as stress can significantly impact digestive health.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Stethoscope className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Regular Screening</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Schedule regular screenings, especially for colorectal cancer after age 50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Digestive Health Guidelines</h2>
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
                  <span className="text-sm">Eat plenty of fiber-rich fruits and vegetables</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Drink adequate water throughout the day</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Exercise regularly to promote healthy digestion</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Eat meals at regular intervals</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Chew food thoroughly and eat slowly</span>
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
                  <span className="text-sm">Don't skip meals or eat irregularly</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid excessive spicy, fatty, or processed foods</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't ignore persistent digestive symptoms</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Limit alcohol consumption and avoid smoking</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't eat large meals late at night</span>
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
              <h2 className="text-3xl font-medium text-gray-800">When to See a Gastroenterologist</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't ignore these digestive symptoms. Early consultation can prevent serious complications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Persistent abdominal pain',
              'Blood in stool',
              'Chronic heartburn',
              'Difficulty swallowing',
              'Unexplained weight loss',
              'Chronic diarrhea',
              'Persistent nausea',
              'Jaundice symptoms'
            ].map((symptom, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-700 text-sm font-medium">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">GI Consultation</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our gastroenterology specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center"
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

export default Gastroenterology;