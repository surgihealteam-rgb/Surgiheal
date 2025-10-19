import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, MapPin, Stethoscope } from 'lucide-react';
import logoImg from '../assets/transparant-logo.png';

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    time: '',
    doctor: '',
    specialty: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const doctors = [
    { value: '', label: 'Select Doctor' },
    { value: 'dr-shivakumar', label: 'Dr. Shivakumar - General, Laparoscopic, Laser & Podiatric Surgeon' },
    { value: 'dr-prashanth', label: 'Dr. Prashanth - Surgical Gastroenterologist' },
    { value: 'dr-swapana', label: 'Dr. Swapana - Obstetrician & Gynaecologist' },
    { value: 'dr-vineeth', label: 'Dr. D.V. Vineeth - Surgical Oncologist' },
    { value: 'dr-rajsree', label: 'Dr. Rajsree - Interventional Radiologist' },
    { value: 'dr-avinash', label: 'Dr. Avinash - Urologist' },
    { value: 'dr-rajkumar', label: 'Dr. Rajkumar - Deep Expertise in operation' }
  ];

  const specialties = [
    { value: '', label: 'Select Treatment Type' },
    { value: 'hernia', label: 'Hernia Repair' },
    { value: 'appendectomy', label: 'Appendectomy' },
    { value: 'gallbladder', label: 'Gallbladder Surgery' },
    { value: 'thyroid', label: 'Thyroid Surgery' },
    { value: 'piles', label: 'Piles Treatment' },
    { value: 'anal-fissure', label: 'Anal Fissure' },
    { value: 'anal-fistula', label: 'Anal Fistula' },
    { value: 'pilonidal-sinus', label: 'Pilonidal Sinus' },
    { value: 'laparoscopic-cholecystectomy', label: 'Laparoscopic Cholecystectomy' },
    { value: 'laparoscopic-hernia', label: 'Laparoscopic Hernia Repair' },
    { value: 'laparoscopic-appendectomy', label: 'Laparoscopic Appendectomy' },
    { value: 'bowel-surgery', label: 'Bowel Surgery' },
    { value: 'kidney-stones', label: 'Kidney Stones' },
    { value: 'prostate', label: 'Prostate Problems' },
    { value: 'urinary-issues', label: 'Urinary Issues' },
    { value: 'bladder-conditions', label: 'Bladder Conditions' },
    { value: 'gastric-surgery', label: 'Gastric Surgery' },
    { value: 'liver-conditions', label: 'Liver Conditions' },
    { value: 'digestive-disorders', label: 'Digestive Disorders' },
    { value: 'colorectal-surgery', label: 'Colorectal Surgery' },
    { value: 'gynecologic-surgery', label: 'Gynecologic Surgery' },
    { value: 'fertility-issues', label: 'Fertility Issues' },
    { value: 'maternity-care', label: 'Maternity Care' },
    { value: 'womens-health', label: 'Women\'s Health' },
    { value: 'cancer-surgery', label: 'Cancer Surgery' },
    { value: 'chemotherapy', label: 'Chemotherapy' },
    { value: 'tumor-removal', label: 'Tumor Removal' },
    { value: 'cancer-treatment', label: 'Cancer Treatment' },
    { value: 'joint-replacement', label: 'Joint Replacement' },
    { value: 'fracture-management', label: 'Fracture Management' },
    { value: 'sports-injury', label: 'Sports Injury' },
    { value: 'bone-conditions', label: 'Bone Conditions' },
    { value: 'cosmetic-surgery', label: 'Cosmetic Surgery' },
    { value: 'reconstructive-surgery', label: 'Reconstructive Surgery' },
    { value: 'aesthetic-procedures', label: 'Aesthetic Procedures' },
    { value: 'varicose-veins', label: 'Varicose Veins' },
    { value: 'vascular-disorders', label: 'Vascular Disorders' },
    { value: 'ear-problems', label: 'Ear Problems' },
    { value: 'nose-conditions', label: 'Nose Conditions' },
    { value: 'throat-issues', label: 'Throat Issues' },
    { value: 'foot-surgery', label: 'Foot Surgery' },
    { value: 'ankle-surgery', label: 'Ankle Surgery' },
    { value: 'diabetic-foot', label: 'Diabetic Foot Care' }
  ];

  const timeSlots = [
    { value: '', label: 'Select Time' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Consultation request submitted successfully! We will contact you soon.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        date: '',
        time: '',
        doctor: '',
        specialty: '',
        message: ''
      });
    }, 2000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src={logoImg} 
          alt="SurgiHeal Logo" 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-teal-100/20"></div>
      
      <div className="relative z-10 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <img src={logoImg} alt="SurgiHeal Logo" className="h-16 w-auto mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Consultation</h1>
                <p className="text-lg text-gray-600">Schedule your appointment with our expert doctors</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Stethoscope className="w-6 h-6 text-purple-600 mr-2" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Address</p>
                      <p className="text-gray-600 text-sm">Phase 1&2, Road No. 5, near Manjeera Trinity Homes, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Phone</p>
                      <p className="text-gray-600">+91 9381087752</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Email</p>
                      <p className="text-gray-600">info@surgiheal.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">Hours</p>
                      <p className="text-gray-600 text-sm">Mon-Fri: 8AM-8PM<br />Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Schedule Your Consultation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors appearance-none"
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

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={getTomorrowDate()}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors appearance-none"
                        >
                          {timeSlots.map(slot => (
                            <option key={slot.value} value={slot.value}>{slot.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Doctor</label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors appearance-none"
                    >
                      {doctors.map(doctor => (
                        <option key={doctor.value} value={doctor.value}>{doctor.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Specialty */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Type</label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors appearance-none"
                    >
                      {specialties.map(specialty => (
                        <option key={specialty.value} value={specialty.value}>{specialty.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors resize-none"
                        placeholder="Please describe your symptoms or reason for consultation..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Calendar className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Submitting...' : 'Book Consultation'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;