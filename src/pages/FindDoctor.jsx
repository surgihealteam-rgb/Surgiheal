import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, MapPin, Phone, Calendar, Star } from 'lucide-react';
import ShivakumarImage from '../assets/doctors/shivakumar.jpg';
import PrashanthImage from '../assets/doctors/Prashanth.jpg';
import SwapnaImage from '../assets/doctors/Swapna.jpg';
import VineethImage from '../assets/doctors/Vineeth.jpg';
import RajsreeImage from '../assets/doctors/Rajsree.jpg';
import AvinashImage from '../assets/doctors/Avinash.jpg';
import RajkumarImage from '../assets/doctors/RajKumar.jpg';
import keerthanaImage from '../assets/doctors/keerthana.jpg';
import saiThirumalRaoImage from '../assets/doctors/saiThirumalRao.jpg';
import shanshankImage from '../assets/doctors/shanshank.jpg';
import pranayPalleImage from '../assets/doctors/pranayPalle.jpg';
import rajeshUppalaImage from '../assets/doctors/rajeshUppala.jpg';

const FindDoctor = ({ onBookAppointment }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  useEffect(() => {
    if (location.state?.selectedSpecialty) {
      setSelectedSpecialty(location.state.selectedSpecialty);
    }
  }, [location.state]);

  const doctors = [
     {
      id: 1,
      name: 'Dr. Shiva Kumar',
      specialty: 'consultant General, Laparoscopic, Laser & Podiatric Surgeon',
      qualification: 'MBBS, MS, MCh ,FMAS,FIAGES',
      image: ShivakumarImage,
      phone: '+91 9381087752',
      experience: 15,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Dr. Prashanth',
      specialty: 'Surgical Gastroenterology',
      qualification: 'MBBS, MS (General Surgery), MCh (Surgical Gastroenterology)',
      image: PrashanthImage,
      phone: '+91 9381087752',
      experience: 12,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Dr. Swapna',
      specialty: 'Obstetrics & Gynaecology',
      qualification: 'MBBS, MS, FMAS, FICOG ',
      image: SwapnaImage,
      phone: '+91 9381087752',
      experience: 14,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Dr. D.V. Vineeth',
      specialty: 'Oncology',
      qualification: 'MBBS, MS (General Surgery), Dr NB ( Surgical Oncology) ,FMAS',
      image: VineethImage,
      phone: '+91 9381087752',
      experience: 10,
      rating: 4.7
    },
    {
      id: 5,
      name: 'Dr. Rajsree',
      specialty: 'Interventional Radiology',
      qualification: 'MBBS, MD (Radiology - NIMS, HYD)',
      image: RajsreeImage,
      phone: '+91 9381087752',
      experience: 8,
      rating: 4.6
    },
    {
      id: 6,
      name: 'Dr. Avinash',
      specialty: 'Urology',
      qualification: 'MBBS, MS (General Surgery), MCh (Urology/Genitourinary Surgery)',
      image: AvinashImage,
      phone: '+91 9381087752',
      experience: 11,
      rating: 4.8
    },
    {
      id: 7,
      name: 'Mr. Rajkumar',
      specialty: 'Deep expertise in operation, Marketing and management',
      qualification: 'Execution specialist.',
      image: RajkumarImage,
      phone: '+91 9381087752',
      experience: 20,
      rating: 4.5
    },
    {
      id: 8,
      name: 'Dr. Keerthana',
      specialty: 'Plastic Surgery',
      qualification: 'MBBS, MS (General Surgery), MCh (Plastic Surgery)',
      image: keerthanaImage,
      phone: '+91 9381087752',
      experience: 7,
      rating: 4.6
    },
    {
      id: 9,
      name: 'Dr. Sai Thirumal Rao',
      specialty: 'Orthopedics',
      qualification: ' MS (Orthopedics)',
      image: saiThirumalRaoImage,
      phone: '+91 9381087752',
      experience: 9,
      rating: 4.7
    },
    {
      id: 10,
      name: 'Dr. Shanshank',
      specialty: ' General, Laparoscopic & Laser Surgeon',
      qualification: 'MBBS, MS, FMAS',
      image: shanshankImage,
      phone: '+91 9381087752',
      experience: 6,
      rating: 4.5
    },
    {
      id: 11,
      name: 'Dr. Pranay Palle',
      specialty: ' General, Laparoscopic, CASR Surgeon',
      qualification: 'MBBS, MS, FMAS',
      image: pranayPalleImage,
      phone: '+91 9381087752',
      experience: 8,
      rating: 4.6
    },
    {
      id: 12,
      name: 'Dr. Rajesh Uppala',
      specialty: 'General, Laparoscopic & Laser Surgeon',
      qualification: 'MBBS, MS, FMAS',
      image: rajeshUppalaImage,
      phone: '+91 9381087752',
      experience: 5,
      rating: 4.4
    }
    

  ];

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === '' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Find a Doctor</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with our experienced medical professionals and book your appointment today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              <option value="">All Specialties</option>
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{doctor.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{doctor.specialty}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-600 text-sm">{doctor.qualification}</p>
                    
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                      <span>{doctor.experience} years experience</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{doctor.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      SurgiHeal Healthcare
                    </div>
                    
                    <div className="flex items-center text-gray-600 text-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      {doctor.phone}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onBookAppointment && onBookAppointment()}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No doctors found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[teal]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-white mb-4">Need Help Choosing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our patient care coordinators are here to help you find the right doctor for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call Us: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindDoctor;