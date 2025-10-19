import React from 'react';
import { Zap, Calendar, Phone, Shield, Users, Activity, CheckCircle, XCircle, AlertTriangle, ArrowDown, ArrowRight, Heart, Eye } from 'lucide-react';
import ShanshankImage from '../../assets/doctors/shanshank.jpg';
const LaserSurgery = ({ onBookAppointment }) => {
  const laserServices = [
    {
      title: 'Medical Laser Surgery',
      description: 'Precision laser treatments for various medical conditions with minimal invasiveness.',
      features: ['Laser Wound Healing', 'Laser Tumor Removal', 'Laser Lithotripsy', 'Laser Hemorrhoid Treatment']
    },
    {
      title: 'Cosmetic Laser Procedures',
      description: 'Advanced aesthetic laser treatments for skin rejuvenation and cosmetic enhancement.',
      features: ['Laser Skin Resurfacing', 'Scar Removal', 'Pigmentation Treatment', 'Laser Hair Removal']
    }
  ];

  const facilities = [
    { icon: Zap, title: 'Advanced Laser Technology', description: 'State-of-the-art laser equipment' },
    { icon: Shield, title: 'Precision Treatment', description: 'Highly accurate targeted procedures' },
    { icon: Activity, title: 'Minimally Invasive', description: 'Reduced recovery time and scarring' },
    { icon: Eye, title: 'Expert Care', description: 'Specialized laser surgery expertise' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Laser Surgery</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced laser technology for precise, minimally invasive surgical procedures with faster recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {laserServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 text-yellow-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Laser Surgery Expert */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Our Laser Surgery Expert</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <img
                  src={ShanshankImage}
                  alt="Dr. Shanshank"
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">Dr. Shanshank</h3>
                <p className="text-yellow-600 font-medium mb-4">Consultant Laser Surgery Specialist</p>
                <p className="text-gray-600 mb-4">MBBS, MS (Surgery)</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Shanshank is a highly skilled laser surgery specialist with extensive experience in advanced laser treatments. 
                  He specializes in medical and cosmetic laser procedures, utilizing cutting-edge laser technology for 
                  precise surgical interventions. His expertise includes laser wound healing, tumor removal, and aesthetic 
                  treatments, ensuring optimal patient outcomes with minimal invasiveness and faster recovery.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">Laser Surgery</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">Medical Lasers</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">Cosmetic Lasers</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">Precision Surgery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laser Surgery Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laser Surgery Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center shadow-lg">
                  <IconComponent className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Laser Treatments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Types of Laser Treatments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of advanced laser treatments for medical and cosmetic conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://larc.pk/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-01-at-13.44.47_77d98d82.jpg"
                alt="Laser Hair Removal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Hair Removal</h3>
                <p className="text-gray-600 text-sm mb-3">Permanent hair reduction using advanced laser technology for smooth, hair-free skin.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Safe for all skin types</li>
                  <li>• Long-lasting results</li>
                  <li>• Minimal discomfort</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6177217e067ee25728796f3e/1673004942640-JU60ZZ7FPDWSC1V40XNX/Laser-Skin-Resurfacing-Stock-Image-200KB.jpg"
                alt="Laser Skin Resurfacing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Skin Resurfacing</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced skin rejuvenation to reduce wrinkles, scars, and improve skin texture.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Reduces fine lines</li>
                  <li>• Improves skin tone</li>
                  <li>• Minimal downtime</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://media.istockphoto.com/id/1385933519/vector/beauty-treatment-human-skin-before-and-after-procedure.jpg?s=1024x1024&w=is&k=20&c=HTQJ2hFKkgMbHHPvagN3eA4BMTU7HQ4waPmtNFW3mWQ="
                alt="Laser Scar Removal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Scar Removal</h3>
                <p className="text-gray-600 text-sm mb-3">Effective treatment for acne scars, surgical scars, and other skin imperfections.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Reduces scar visibility</li>
                  <li>• Stimulates collagen</li>
                  <li>• Gradual improvement</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5daa26f69a9f9f7b4aa583c9/28c66ab6-85ea-4f8e-9996-649b196adbd5/acne013.png"
                alt="Laser Pigmentation Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pigmentation Treatment</h3>
                <p className="text-gray-600 text-sm mb-3">Targeted laser therapy for age spots, melasma, and uneven skin pigmentation.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Even skin tone</li>
                  <li>• Reduces dark spots</li>
                  <li>• Quick treatment</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://www.mdpi.com/diseases/diseases-11-00172/article_deploy/html/images/diseases-11-00172-g001.png"
                alt="Laser Wound Healing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Wound Healing</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced laser therapy to accelerate wound healing and tissue regeneration.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Faster healing</li>
                  <li>• Reduced infection risk</li>
                  <li>• Better outcomes</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://ucikidneystonecenter.com/wp-content/uploads/2019/06/UCI-Kidney-Stone-Center-2-2.jpg"
                alt="Laser Lithotripsy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Lithotripsy</h3>
                <p className="text-gray-600 text-sm mb-3">Non-invasive laser treatment for kidney stones and urinary tract stones.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Non-invasive procedure</li>
                  <li>• Quick recovery</li>
                  <li>• High success rate</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.personalabs.com/wp-content/uploads/2023/06/man-with-toilet-paper-suffering-from-hemorrhoid-pain-black-background-closeup-illustration-unhealthy-lower-rectum.jpg"
                alt="Laser Hemorrhoid Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Hemorrhoid Treatment</h3>
                <p className="text-gray-600 text-sm mb-3">Minimally invasive laser treatment for hemorrhoids with faster recovery.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Minimal pain</li>
                  <li>• Quick procedure</li>
                  <li>• Same-day discharge</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://www.baylaser.ca/wp-content/uploads/2016/06/evlt3.jpg"
                alt="Laser Varicose Vein Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Varicose Vein Treatment</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced laser therapy for varicose veins and spider veins removal.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• No surgical incisions</li>
                  <li>• Immediate results</li>
                  <li>• Walk-in procedure</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.RYN6w_6-7sV5vsjFISzxgQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Laser Tumor Removal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Tumor Removal</h3>
                <p className="text-gray-600 text-sm mb-3">Precise laser surgery for benign tumor removal with minimal tissue damage.</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Precise targeting</li>
                  <li>• Minimal scarring</li>
                  <li>• Faster healing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Laser Surgery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-6">Understanding Laser Surgery</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Laser surgery uses focused light beams to perform precise surgical procedures with minimal tissue damage. 
                This advanced technology offers numerous advantages including reduced bleeding, minimal scarring, faster 
                healing, and greater precision compared to traditional surgical methods.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our laser surgery department utilizes state-of-the-art equipment for both medical and cosmetic procedures, 
                ensuring optimal outcomes with enhanced patient comfort and shorter recovery times.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.SfAqeRWvsEsmmeypLFIHBgHaDf?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Laser Surgery"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Laser Surgery Process Flowchart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laser Surgery Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures safe and effective laser treatments from consultation to recovery.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Comprehensive evaluation and treatment planning</p>
                <ArrowDown className="w-6 h-6 text-yellow-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-yellow-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Pre-treatment Preparation</h3>
                <p className="text-gray-600 text-sm">Skin preparation and safety protocols</p>
                <ArrowDown className="w-6 h-6 text-yellow-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-yellow-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Laser Treatment</h3>
                <p className="text-gray-600 text-sm">Precise laser application with real-time monitoring</p>
                <ArrowDown className="w-6 h-6 text-yellow-500 mx-auto mt-4 md:hidden" />
                <ArrowRight className="w-6 h-6 text-yellow-500 absolute top-1/2 -right-3 transform -translate-y-1/2 hidden md:block" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Post-treatment Care</h3>
                <p className="text-gray-600 text-sm">Recovery monitoring and follow-up care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laser Surgery Preparation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proper preparation ensures optimal results and minimizes complications from laser treatments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Skin Preparation</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Avoid sun exposure and use prescribed skincare products before laser treatment.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Health Optimization</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Maintain good overall health and follow pre-treatment instructions carefully.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-medium text-gray-800">Safety Measures</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Follow all safety protocols and inform your doctor about medications and allergies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-4">Laser Surgery Guidelines</h2>
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
                  <span className="text-sm">Follow pre-treatment skin preparation instructions</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Use prescribed post-treatment skincare products</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Protect treated areas from sun exposure</span>
                </li>
                <li className="flex items-start text-green-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-1" />
                  <span className="text-sm">Keep treated areas clean and moisturized</span>
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
                  <span className="text-sm">Don't expose treated areas to direct sunlight</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid picking or scratching treated areas</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't use harsh skincare products</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Avoid swimming or hot tubs immediately after treatment</span>
                </li>
                <li className="flex items-start text-red-700">
                  <XCircle className="w-4 h-4 text-red-500 mr-3 mt-1" />
                  <span className="text-sm">Don't skip post-treatment care instructions</span>
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
              <h2 className="text-3xl font-medium text-gray-800">When to Consider Laser Surgery</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Laser surgery may be beneficial for these conditions and aesthetic concerns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Skin lesions',
              'Scars and marks',
              'Pigmentation issues',
              'Unwanted hair',
              'Varicose veins',
              'Kidney stones',
              'Hemorrhoids',
              'Wound healing'
            ].map((condition, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-700 text-sm font-medium">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Laser Surgery Consultation</h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Discover the benefits of advanced laser surgery for your specific condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-yellow-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors flex items-center justify-center"
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

export default LaserSurgery;