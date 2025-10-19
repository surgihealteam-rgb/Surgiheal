import React, { useState, useEffect } from 'react';
import { Search, Stethoscope, Calendar, Phone, Users } from 'lucide-react';
import { useLocation } from 'react-router-dom';
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

const Specialties = ({ onBookAppointment }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedSpecialty) {
      setSelectedSpecialty(location.state.selectedSpecialty);
    }
  }, [location.state]);

  const specialties = [
    {
      id: 1,
      name: 'General Surgery',
      description: 'Comprehensive surgical procedures for various medical conditions.',
      doctors: [
        {
          name: 'Dr. Shiva Kumar',
          title: 'Consultant General, Laparoscopic, Laser & Podiatric Surgeon',
          qualification: 'MBBS, MS, FMAS, FIAGES',
          image: ShivakumarImage
        }
      ],
      procedures: ['Hernia Repair', 'Appendectomy', 'Gallbladder Surgery', 'Thyroid Surgery'],
      icon: Stethoscope
    },
    {
      id: 2,
      name: 'Surgical Gastroenterology',
      description: 'Specialized surgical treatment for digestive system disorders.',
      doctors: [
        {
          name: 'Dr. Prashanth',
          title: 'Consultant Surgical Gastroenterologist',
          qualification: 'MBBS, MS (General Surgery), MCh (Surgical Gastroenterology)',
          image: PrashanthImage
        }
      ],
      procedures: ['GI Surgery', 'Liver Surgery', 'Pancreatic Surgery', 'Colorectal Surgery'],
      icon: Stethoscope
    },
    {
      id: 3,
      name: 'Obstetrics & Gynaecology',
      description: 'Comprehensive womens health care including pregnancy and gynecological treatments.',
      doctors: [
        {
          name: 'Dr. Swapna',
          title: 'Consultant Obstetrician & Gynaecologist, Laparoscopic Surgeon',
          qualification: 'MBBS, MS, FMAS, FICOG',
          image: SwapnaImage
        }
      ],
      procedures: ['Infertility Treatment', 'High-risk Pregnancy Care', 'Laparoscopic Surgery', 'Gynecological Surgery'],
      icon: Stethoscope
    },
    {
      id: 4,
      name: 'Urology & Minimal Access Surgery',
      description: 'Advanced urological care with minimally invasive surgical techniques.',
      doctors: [
        {
          name: 'Dr. Avinash',
          title: 'Consultant Urologist & Minimal Access Surgeon',
          qualification: 'MBBS, MS (General Surgery), MCh (Urology/Genitourinary Surgery)',
          image: AvinashImage
        }
      ],
      procedures: ['Kidney Stone Treatment', 'Prostate Surgery', 'Bladder Surgery', 'Reconstructive Urology'],
      icon: Stethoscope
    },
    {
      id: 7,
      name: 'Surgical Oncology',
      description: 'Comprehensive cancer surgery and treatment with advanced techniques.',
      doctors: [
        {
          name: 'Dr. D.V. Vineeth',
          title: 'Consultant Surgical Oncologist',
          qualification: 'MBBS, MS (General Surgery), Dr NB (Surgical Oncology), FMAS',
          image: VineethImage
        }
      ],
      procedures: ['Cancer Surgery', 'Tumor Removal', 'Oncological Procedures', 'Minimally Invasive Cancer Surgery'],
      icon: Stethoscope
    },
    {
      id: 5,
      name: 'Interventional Radiology',
      description: 'Minimally invasive image-guided procedures for diagnosis and treatment.',
      doctors: [
        {
          name: 'Dr. Rajsree',
          title: 'Consultant Interventional Radiologist',
          qualification: 'MBBS, MD (Radiology - NIMS, HYD)',
          image: RajsreeImage
        }
      ],
      procedures: ['Angioplasty', 'Embolization', 'Biopsy', 'Drainage Procedures'],
      icon: Stethoscope
    },
    {
      id: 6,
      name: 'Orthopedics & Joint Replacement',
      description: 'Specialized orthopedic treatments including joint replacement surgeries.',
      doctors: [
        {
          name: 'Dr. Sai Thirumal Rao',
          title: 'Orthopedic Surgeon',
          qualification: 'MS in Orthopaedics | Diploma in Sports Medicine (IOC). Fellowship in Arthroscopy & Sports Medicine (Cardiff, UK)',
          image: saiThirumalRaoImage
        }
      ],
      procedures: ['Arthroscopy', 'Joint Replacement Surgery', 'Fracture Surgery', 'Orthopedic Surgery'],
      icon: Stethoscope
    },
    {
      id: 8,
      name: 'Plastic & Reconstructive Surgery',
      description: 'Advanced plastic and reconstructive surgical procedures.',
      doctors: [
        {
          name: 'Dr. Keerthana',
          title: 'Plastic Surgeon',
          qualification: 'MBBS, MS (General Surgery), MCh (Plastic Surgery)',
          image: keerthanaImage
        }
      ],
      procedures: ['Cosmetic Surgery', 'Reconstructive Surgery', 'Burn Surgery', 'Aesthetic Procedures'],
      icon: Stethoscope
    },
    {
      id: 9,
      name: 'Laser Surgery',
      description: 'Advanced laser surgical procedures for various medical conditions.',
      doctors: [
        {
          name: 'Dr. Shanshank',
          title: 'Laser Surgeon',
          qualification: 'MBBS, MS, FMAS',
          image: shanshankImage
        }
      ],
      procedures: ['Laser Surgery', 'General Surgery', 'Laparoscopic Surgery', 'Pelvic Surgery'],
      icon: Stethoscope
    },
    {
      id: 10,
      name: 'Advanced Laparoscopic Surgery',
      description: 'Specialized laparoscopic procedures with minimal invasive techniques.',
      doctors: [
        {
          name: 'Dr. Pranay Palle',
          title: 'Laparoscopic Surgeon',
          qualification: 'MBBS, MS, FMAS',
          image: pranayPalleImage
        }
      ],
      procedures: ['Laparoscopic Surgery', 'General Surgery', 'Gallbladder Removal', 'Minimally Invasive Surgery'],
      icon: Stethoscope
    },
    {
      id: 11,
      name: 'Comprehensive Surgery & Podiatric Care',
      description: 'Complete surgical care including diabetic foot and podiatric treatments.',
      doctors: [
        {
          name: 'Dr. Rajesh Uppala',
          title: 'General, Laparoscopic, Laser and Podiatric Surgeon',
          qualification: 'MBBS, MS, FMAS',
          image: rajeshUppalaImage
        }
      ],
      procedures: ['General Surgery', 'Laparoscopic Surgery', 'Laser Surgery', 'Diabetic Foot Care'],
      icon: Stethoscope
    },
    {
      id: 12,
      name: 'Operations & Management',
      description: 'Healthcare operations and management expertise.',
      doctors: [
        {
          name: 'Mr. Rajkumar',
          title: 'Operations & Management Expert',
          qualification: 'Execution Specialist',
          image: RajkumarImage
        }
      ],
      procedures: ['Healthcare Operations', 'Quality Management', 'Process Optimization', 'Strategic Planning'],
      icon: Stethoscope
    }

  ];

  const specialtyNames = specialties.map(specialty => specialty.name);

  const filteredSpecialties = specialties.filter(specialty => {
    const matchesSearch = specialty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specialty.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specialty.doctors.some(doctor => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === '' || specialty.name === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[purple] text-white py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">Medical Specialties</h1>
            <p className="text-md text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive range of medical specialties with expert doctors and advanced treatments.
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
                placeholder="Search specialties or doctors..."
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
              {specialtyNames.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredSpecialties.map(specialty => {
              const IconComponent = specialty.icon;
              return (
                <div key={specialty.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <IconComponent className="w-8 h-8 text-purple-600 mr-4" />
                      <div>
                        <h2 className="text-2xl font-medium text-gray-800">{specialty.name}</h2>
                        <p className="text-gray-600 mt-2">{specialty.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Our Specialists</h3>
                        <div className="space-y-4">
                          {specialty.doctors.map((doctor, index) => (
                            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div>
                                <h4 className="font-medium text-gray-800">{doctor.name}</h4>
                                <p className="text-sm text-purple-600">{doctor.title}</p>
                                <p className="text-xs text-gray-600">{doctor.qualification}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Procedures & Treatments</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {specialty.procedures.map((procedure, index) => (
                            <div key={index} className="flex items-center text-gray-700 text-sm">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                              {procedure}
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <button
                            onClick={() => onBookAppointment && onBookAppointment()}
                            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredSpecialties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No specialties found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[teal]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-white mb-4">Need Help Choosing a Specialty?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our patient care coordinators can help you find the right specialist for your medical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
            <button
              onClick={() => onBookAppointment && onBookAppointment()}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
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

export default Specialties;