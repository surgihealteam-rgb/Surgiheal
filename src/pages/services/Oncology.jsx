import React from 'react';
import { Shield, Calendar, Phone, Heart, Users, Activity, CheckCircle, XCircle, AlertTriangle, ArrowDown, ArrowRight, Microscope } from 'lucide-react';
import VineethImage from '../../assets/doctors/Vineeth.jpg';

const Oncology = ({ onBookAppointment }) => {
  const oncologyServices = [
    {
      title: 'Comprehensive Cancer Care',
      description: 'Complete cancer treatment including diagnosis, treatment, and supportive care.',
      features: ['Cancer Screening', 'Chemotherapy', 'Radiation Therapy', 'Surgical Oncology']
    },
    {
      title: 'Multidisciplinary Approach',
      description: 'Team-based cancer care with specialists working together for optimal outcomes.',
      features: ['Tumor Board', 'Palliative Care', 'Survivorship Program', 'Clinical Trials']
    }
  ];

  const facilities = [
    { icon: Shield, title: 'Cancer Screening', description: 'Early detection and prevention programs' },
    { icon: Heart, title: 'Supportive Care', description: 'Comprehensive patient and family support' },
    { icon: Activity, title: 'Advanced Treatment', description: 'Latest cancer treatment technologies' },
    { icon: Users, title: 'Oncology Team', description: 'Board-certified oncology specialists' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Oncology</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive cancer care with advanced treatment options and compassionate support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {oncologyServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-purple-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Oncology Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Oncology Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={VineethImage}
                  alt="Dr. D.V. Vineeth"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. D.V. Vineeth</h3>
                <p className="text-purple-600 font-medium mb-4">Consultant Surgical Oncologist</p>
                <p className="text-gray-600 mb-4">MBBS, MS (General Surgery), Dr NB (Surgical Oncology), FMAS</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. D.V. Vineeth is a highly skilled surgical oncologist with extensive experience in comprehensive 
                  cancer care. He specializes in advanced surgical techniques for various cancers, minimally invasive 
                  oncological procedures, and multidisciplinary cancer treatment approaches. His compassionate care 
                  and surgical expertise ensure optimal outcomes for cancer patients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Surgical Oncology</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Minimally Invasive Surgery</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">Cancer Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Care Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Cancer Care Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Oncology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Oncology</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Oncology is the medical specialty focused on the diagnosis, treatment, and prevention of cancer. 
                It encompasses various treatment modalities including surgery, chemotherapy, radiation therapy, 
                immunotherapy, and targeted therapy. Early detection and comprehensive treatment planning are 
                crucial for optimal outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our oncology department provides multidisciplinary cancer care with a team approach, ensuring 
                each patient receives personalized treatment plans tailored to their specific cancer type, 
                stage, and individual needs.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_2048,h_785/https://www.punhlainghospitals.com/wp-content/uploads/2020/12/Oncology.jpg"
                alt="Cancer Care"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Treatment Journey Flow Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Cancer Treatment Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to cancer care from diagnosis to recovery and beyond.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Detection & Diagnosis</h3>
                <p className="text-gray-600 text-sm">Screening, biopsy, and comprehensive diagnostic workup</p>
                <ArrowDown className="w-6 h-6 text-purple-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Staging & Planning</h3>
                <p className="text-gray-600 text-sm">Tumor staging and multidisciplinary treatment planning</p>
                <ArrowDown className="w-6 h-6 text-purple-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Treatment</h3>
                <p className="text-gray-600 text-sm">Surgery, chemotherapy, radiation, or combination therapy</p>
                <ArrowDown className="w-6 h-6 text-purple-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-purple-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Follow-up Care</h3>
                <p className="text-gray-600 text-sm">Monitoring, survivorship care, and rehabilitation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Cancer Prevention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reduce your cancer risk with these evidence-based prevention strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Healthy Lifestyle</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Maintain a healthy diet, exercise regularly, avoid tobacco, and limit alcohol consumption.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Microscope className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Regular Screening</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Follow recommended screening guidelines for early detection of various cancers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Risk Awareness</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Know your family history and discuss genetic counseling if you have high-risk factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Cancer Prevention Guidelines</h2>
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
                  <span className="text-sm">Follow recommended cancer screening schedules</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Maintain a healthy weight and exercise regularly</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Eat a diet rich in fruits and vegetables</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Protect your skin from excessive sun exposure</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Get vaccinated against cancer-causing infections</span>
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
                  <span className="text-sm">Don't use tobacco products or smoke</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid excessive alcohol consumption</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't ignore persistent symptoms or changes</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid exposure to known carcinogens</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't skip recommended screenings</span>
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
              <h2 className="text-3xl font-medium text-gray-800">Cancer Warning Signs</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be aware of these potential cancer symptoms. Early detection saves lives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Unexplained weight loss',
              'Persistent fatigue',
              'Unusual lumps or masses',
              'Changes in skin moles',
              'Persistent cough',
              'Changes in bowel habits',
              'Unusual bleeding',
              'Difficulty swallowing'
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
          <h2 className="text-3xl font-medium mb-4">Oncology Consultation</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Get expert cancer care and support from our oncology specialists.
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

export default Oncology;