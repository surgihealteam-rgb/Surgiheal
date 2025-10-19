import { useState, useEffect } from 'react';
import { X, Phone, User, Calendar, MapPin, Heart, Shield, Clock } from 'lucide-react';

const RegistrationPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    service: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[300px]">
          {/* Left Side - Form */}
          <div className="lg:w-1/2 p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Book Free Consultation</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>



              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select City</option>
                    <optgroup label="Telangana">
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Warangal">Warangal</option>
                      <option value="Nizamabad">Nizamabad</option>
                      <option value="Karimnagar">Karimnagar</option>
                      <option value="Khammam">Khammam</option>
                      <option value="Nalgonda">Nalgonda</option>
                      <option value="Ramagundam">Ramagundam</option>
                      <option value="Mahbubnagar">Mahbubnagar</option>
                      <option value="Adilabad">Adilabad</option>
                      <option value="Siddipet">Siddipet</option>
                    </optgroup>
                    <optgroup label="Andhra Pradesh">
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Nellore">Nellore</option>
                      <option value="Kurnool">Kurnool</option>
                      <option value="Tirupati">Tirupati</option>
                      <option value="Rajahmundry">Rajahmundry</option>
                      <option value="Kadapa">Kadapa</option>
                      <option value="Anantapur">Anantapur</option>
                      <option value="Ongole">Ongole</option>
                    </optgroup>
                    <optgroup label="Other Major Cities">
                      <option value="Bangalore">Bangalore</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Pune">Pune</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select Disease/Condition</option>
                  <optgroup label="General Surgery">
                    <option value="hernia">Hernia Repair</option>
                    <option value="appendectomy">Appendectomy</option>
                    <option value="gallbladder">Gallbladder Surgery</option>
                    <option value="thyroid">Thyroid Surgery</option>
                  </optgroup>
                  <optgroup label="Proctology">
                    <option value="piles">Piles Treatment</option>
                    <option value="anal-fissure">Anal Fissure</option>
                    <option value="anal-fistula">Anal Fistula</option>
                    <option value="pilonidal-sinus">Pilonidal Sinus</option>
                  </optgroup>
                  <optgroup label="Laparoscopic Surgery">
                    <option value="laparoscopic-cholecystectomy">Laparoscopic Cholecystectomy</option>
                    <option value="laparoscopic-hernia">Laparoscopic Hernia Repair</option>
                    <option value="laparoscopic-appendectomy">Laparoscopic Appendectomy</option>
                    <option value="bowel-surgery">Bowel Surgery</option>
                  </optgroup>
                  <optgroup label="Urology">
                    <option value="kidney-stones">Kidney Stones</option>
                    <option value="prostate">Prostate Problems</option>
                    <option value="urinary-issues">Urinary Issues</option>
                    <option value="bladder-conditions">Bladder Conditions</option>
                  </optgroup>
                  <optgroup label="Gastroenterology">
                    <option value="gastric-surgery">Gastric Surgery</option>
                    <option value="liver-conditions">Liver Conditions</option>
                    <option value="digestive-disorders">Digestive Disorders</option>
                    <option value="colorectal-surgery">Colorectal Surgery</option>
                  </optgroup>
                  <optgroup label="Gynecology & Obstetrics">
                    <option value="gynecologic-surgery">Gynecologic Surgery</option>
                    <option value="fertility-issues">Fertility Issues</option>
                    <option value="maternity-care">Maternity Care</option>
                    <option value="womens-health">Women's Health</option>
                  </optgroup>
                  <optgroup label="Oncology">
                    <option value="cancer-surgery">Cancer Surgery</option>
                    <option value="chemotherapy">Chemotherapy</option>
                    <option value="tumor-removal">Tumor Removal</option>
                    <option value="cancer-treatment">Cancer Treatment</option>
                  </optgroup>
                  <optgroup label="Orthopedics">
                    <option value="joint-replacement">Joint Replacement</option>
                    <option value="fracture-management">Fracture Management</option>
                    <option value="sports-injury">Sports Injury</option>
                    <option value="bone-conditions">Bone Conditions</option>
                  </optgroup>
                  <optgroup label="Plastic Surgery">
                    <option value="cosmetic-surgery">Cosmetic Surgery</option>
                    <option value="reconstructive-surgery">Reconstructive Surgery</option>
                    <option value="aesthetic-procedures">Aesthetic Procedures</option>
                  </optgroup>
                  <optgroup label="Vascular Surgery">
                    <option value="varicose-veins">Varicose Veins</option>
                    <option value="vascular-disorders">Vascular Disorders</option>
                  </optgroup>
                  <optgroup label="ENT">
                    <option value="ear-problems">Ear Problems</option>
                    <option value="nose-conditions">Nose Conditions</option>
                    <option value="throat-issues">Throat Issues</option>
                  </optgroup>
                  <optgroup label="Podiatric Surgery">
                    <option value="foot-surgery">Foot Surgery</option>
                    <option value="ankle-surgery">Ankle Surgery</option>
                    <option value="diabetic-foot">Diabetic Foot Care</option>
                  </optgroup>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                Book Free Consultation
              </button>
            </form>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 bg-gradient-to-br from-teal-600 to-teal-800 text-white p-6 lg:p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Experience world-class healthcare with our comprehensive surgical and medical services.
              </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Free Consultation</h4>
                    <p className="text-sm text-teal-100">Expert medical advice at no cost</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200">Free Scanning</h4>
                    <p className="text-sm text-teal-100">Complimentary diagnostic scanning</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Insurance Assistance</h4>
                    <p className="text-sm text-teal-100">Complete insurance claim support</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 Care Coordination</h4>
                    <p className="text-sm text-teal-100">Round-the-clock patient support</p>
                  </div>
                </div>
              </div>

              
                <p className="text-sm text-center">
                  <span className="font-semibold">Call Now:</span> +91 93810 87752
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;