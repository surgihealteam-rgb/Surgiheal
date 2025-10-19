import { useState } from 'react';
import { User, Phone, Heart, MapPin, Stethoscope } from 'lucide-react';
import ToastNotification from '../ui/ToastNotification';
import { consultationService } from '../../services/consultationService';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    disease: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const cities = [
    { value: '', label: 'Select City' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'pune', label: 'Pune' }
  ];

  const diseases = [
    { value: '', label: 'Select Disease' },
    { value: 'cardiology', label: 'Heart Disease' },
    { value: 'orthopedics', label: 'Bone & Joint Issues' },
    { value: 'neurology', label: 'Neurological Disorders' },
    { value: 'pediatrics', label: 'Child Health' },
    { value: 'emergency', label: 'Emergency Care' },
    { value: 'general', label: 'General Consultation' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.city) {
      errors.city = 'City is required';
    }
    if (!formData.disease) {
      errors.disease = 'Disease information is required';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const response = await consultationService.createConsultation(formData);
      showToast(response.message || 'Consultation booked successfully!', 'success');
      setFormData({
        name: '',
        phone: '',
        city: '',
        disease: ''
      });
    } catch (error) {
      if (error.errors && Object.keys(error.errors).length > 0) {
        setFieldErrors(error.errors);
        showToast(error.message || 'Please fix the errors below', 'error');
      } else {
        showToast(error.message || 'Failed to submit appointment. Please try again.', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-sm p-4 w-72">
        <div className="text-center mb-4">
          {/* <h3 className="text-md font-medium text-gray-900 mb-1">Quick Appointment</h3> */}
          <p className="text-xs bg-[purple] py-3 rounded-sm px-2 text-white flex items-center justify-center gap-2"><Stethoscope strokeWidth={1} size={16}/>Book your free consultation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full pl-8 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:border-purple-500 transition-colors ${
                fieldErrors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
          </div>

          {/* Phone Field */}
          <div className="relative">
            <Phone className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full pl-8 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:border-purple-500 transition-colors ${
                fieldErrors.mobile || fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {(fieldErrors.mobile || fieldErrors.phone) && <p className="text-red-500 text-xs mt-1">{fieldErrors.mobile || fieldErrors.phone}</p>}
          </div>



          {/* City Field */}
          <div className="relative">
            <MapPin className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
            <select
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full pl-8 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:border-purple-500 transition-colors appearance-none ${
                fieldErrors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {cities.map(city => (
                <option key={city.value} value={city.value}>{city.label}</option>
              ))}
            </select>
            {fieldErrors.city && <p className="text-red-500 text-xs mt-1">{fieldErrors.city}</p>}
          </div>

          {/* Disease Field */}
          <div className="relative">
            <Heart className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
            <select
              value={formData.disease}
              onChange={(e) => handleInputChange('disease', e.target.value)}
              className={`w-full pl-8 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:border-purple-500 transition-colors appearance-none ${
                fieldErrors.disease ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              {diseases.map(disease => (
                <option key={disease.value} value={disease.value}>{disease.label}</option>
              ))}
            </select>
            {fieldErrors.disease && <p className="text-red-500 text-xs mt-1">{fieldErrors.disease}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : (
              <Heart className="w-4 h-4 mr-2" />
            )}
            {isSubmitting ? 'Submitting...' : 'Book Now'}
          </button>
        </form>
      </div>

      <ToastNotification 
        message={toast.message}
        type={toast.type}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: '', type: '' })}
      />
    </>
  );
};

export default AppointmentForm;