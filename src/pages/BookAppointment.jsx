import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Stethoscope, MapPin, Video, Phone, Mail, ArrowLeft } from 'lucide-react';
import CustomDropdown from '../components/forms/CustomDropdown';
import { doctors, treatments, timeSlots, appointmentModes } from '../data/appointmentData';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    city: '',
    doctor: '',
    treatment: '',
    date: '',
    time: '',
    mode: '',
    symptoms: '',
    emergencyContact: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
    alert('Appointment booked successfully! We will contact you shortly.');
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-purple-600 hover:text-purple-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
          <p className="text-lg text-gray-600">Schedule your consultation with our expert medical team</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          {/* Patient Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-purple-600" />
              Patient Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.patientName}
                  onChange={(e) => handleInputChange('patientName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  required
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="25"
                />
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                <CustomDropdown
                  options={genderOptions}
                  value={formData.gender}
                  onChange={(value) => handleInputChange('gender', value)}
                  placeholder="Select gender"
                  icon={User}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                <input
                  type="tel"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Emergency contact number"
                />
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Stethoscope className="w-6 h-6 mr-3 text-teal-600" />
              Appointment Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Doctor *</label>
                <CustomDropdown
                  options={doctors}
                  value={formData.doctor}
                  onChange={(value) => handleInputChange('doctor', value)}
                  placeholder="Choose your doctor"
                  icon={User}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Type *</label>
                <CustomDropdown
                  options={treatments}
                  value={formData.treatment}
                  onChange={(value) => handleInputChange('treatment', value)}
                  placeholder="Select treatment type"
                  icon={Stethoscope}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                <CustomDropdown
                  options={timeSlots}
                  value={formData.time}
                  onChange={(value) => handleInputChange('time', value)}
                  placeholder="Select time slot"
                  icon={Clock}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Mode *</label>
                <CustomDropdown
                  options={appointmentModes}
                  value={formData.mode}
                  onChange={(value) => handleInputChange('mode', value)}
                  placeholder="Choose consultation mode"
                  icon={formData.mode === 'online' ? Video : MapPin}
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Symptoms / Reason for Visit</label>
              <textarea
                value={formData.symptoms}
                onChange={(e) => handleInputChange('symptoms', e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Please describe your symptoms or reason for the appointment..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 sm:flex-none border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-lg font-semibold hover:border-gray-400 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;