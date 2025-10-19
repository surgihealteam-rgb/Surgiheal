import React from 'react';
import { Heart, Award, Shield } from 'lucide-react';
import ShivakumarImage from '../assets/doctors/shivakumar.jpg';
import PrashanthImage from '../assets/doctors/Prashanth.jpg';
import SwapnaImage from '../assets/doctors/Swapna.jpg';
import VineethImage from '../assets/doctors/Vineeth.jpg';
import RajsreeImage from '../assets/doctors/Rajsree.jpg';
import AvinashImage from '../assets/doctors/Avinash.jpg';
import RajkumarImage from '../assets/doctors/Rajkumar.jpg';
import keerthanaImage from '../assets/doctors/keerthana.jpg';
import saiThirumalRaoImage from '../assets/doctors/saiThirumalRao.jpg';
import shanshankImage from '../assets/doctors/shanshank.jpg';
import pranayPalleImage from '../assets/doctors/pranayPalle.jpg';
import rajeshUppalaImage from '../assets/doctors/rajeshUppala.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[purple] text-white py-6 sm:py-8 md:py-10 mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6 leading-tight px-2">About SurgiHeal</h1>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              At Surgiheal, we blend science, skill, and compassion to deliver advanced, ethical surgical care.
Our multidisciplinary team offers safe, affordable treatments across specialties, combining modern techniques with personalized recovery support.
With a growing network of clinics and partner hospitals, we're redefining surgical care through technology, transparency, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-sm border-[1px] border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <Heart strokeWidth={1} className="text-purple-600 mr-3 sm:mr-4 flex-shrink-0" size={24} />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800">Our Mission</h2>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To make every surgery a stress-free, healing experience.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To bring clarity and confidence to patients through honest guidance.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To stand beside families with financial, emotional, and medical support.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  To redefine surgery as a journey of healing, not hardship.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-sm border-[1px] border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <Award strokeWidth={1} className="text-teal-600 mr-3 sm:mr-4 flex-shrink-0" size={24} />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To create a world where no patient feels lost, anxious, or unsupported during their surgical journey - a world where care is compassionate, seamless, and built entirely around the patient and their family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  SurgiHeal began with a mission: patients need more than surgery—they need genuine, caring support. Many families face hospital formalities, insurance hassles, and unanswered questions, especially during crucial moments.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We founded SurgiHeal to address this. By uniting skilled surgeons, advanced technology, and compassionate care teams, we designed a system that lets patients focus entirely on their recovery.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  With over 30 centers, SurgiHeal has guided thousands of families through surgery, providing dignity, comfort, and peace of mind.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="text-center border p-3 sm:p-4 font-serif border-gray-300 rounded-sm">
                  <div className="text-lg sm:text-xl font-semibold text-purple-600">50,000+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Patients Served</div>
                </div>
                <div className="text-center border p-3 sm:p-4 font-serif rounded-sm border-gray-300">
                  <div className="text-lg sm:text-xl font-semibold text-teal-600">100+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Medical Professionals</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Hospital Building" 
                className="rounded-lg shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              These values guide everything we do and shape our commitment to excellence in healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-[teal] p-4 sm:p-6 md:p-8 rounded-sm text-center">
              <Shield className="text-purple-600 mx-auto mb-3 sm:mb-4" size={32} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 mb-2 sm:mb-4">Compassion</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                 Treating every patient like family.
              </p>
            </div>
            <div className="bg-[teal] p-4 sm:p-6 md:p-8 rounded-sm text-center">
              <Heart className="text-teal-600 mx-auto mb-3 sm:mb-4" size={32} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 mb-2 sm:mb-4">Precision</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Every procedure, every time, handled with utmost accuracy.
              </p>
            </div>
            <div className="bg-[teal] p-4 sm:p-6 md:p-8 rounded-sm text-center">
              <Award className="text-purple-600 mx-auto mb-3 sm:mb-4" size={32} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 mb-2 sm:mb-4">Integrity</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Honest opinions and transparent communication.
              </p>
            </div>
            <div className="bg-[teal] p-4 sm:p-6 md:p-8 rounded-sm text-center">
              <Award className="text-purple-600 mx-auto mb-3 sm:mb-4" size={32} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 mb-2 sm:mb-4">Safety</h3>
              <p className="text-gray-300 text-xs sm:text-sm">
               Strict adherence to sterilization, hygiene, and global surgical protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-3 sm:mb-4">Our Expert Medical Team</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Meet our distinguished team of medical professionals dedicated to providing world-class healthcare.
            </p>
          </div>
          
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Dr. Shivakumar */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={ShivakumarImage}
                  alt="Dr. Shiva Kumar" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Shiva Kumar</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">General, Laparoscopic, Laser & Podiatric Surgeon</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS, FMAS, FIAGES</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">General Surgery</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Laparoscopy</span>
                </div>
              </div>
            </div>

            {/* Dr. Prashanth */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={PrashanthImage}
                  alt="Dr. Prashanth" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Prashanth</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Surgical Gastroenterologist</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS, MCh (Surgical Gastroenterology)</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Gastroenterology</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Surgery</span>
                </div>
              </div>
            </div>

            {/* Dr. Swapna */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={SwapnaImage}
                  alt="Dr. Swapna" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Swapna</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Obstetrician & Gynaecologist</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS, FMAS, FICOG</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Gynecology</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Obstetrics</span>
                </div>
              </div>
            </div>

            {/* Dr. Vineeth */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={VineethImage}
                  alt="Dr. D.V. Vineeth" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. D.V. Vineeth</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Surgical Oncologist</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS, Dr NB (Surgical Oncology), FMAS</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Oncology</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Cancer Surgery</span>
                </div>
              </div>
            </div>

            {/* Dr. Rajsree */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={RajsreeImage}
                  alt="Dr. Rajsree" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Rajsree</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Interventional Radiologist</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MD (Radiology - NIMS, HYD)</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Radiology</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Intervention</span>
                </div>
              </div>
            </div>

            {/* Dr. Avinash */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={AvinashImage}
                  alt="Dr. Avinash" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Avinash</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Urologist & Minimal Access Surgeon</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS, MCh (Urology/Genitourinary Surgery)</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Urology</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Minimal Access</span>
                </div>
              </div>
            </div>

            {/* Dr. Rajkumar */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={RajkumarImage}
                  alt="Mr. Rajkumar" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Mr. Rajkumar</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Operations & Management Expert</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">Execution Specialist</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Operations</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Management</span>
                </div>
              </div>
            </div>

            {/* Dr. Keerthana */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={keerthanaImage}
                  alt="Dr. Keerthana" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Keerthana</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Plastic Surgeon</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS (General Surgery), MCh (Plastic Surgery)</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Plastic Surgery</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Cosmetic Surgery</span>
                </div>
              </div>
            </div>

            {/* Dr. Sai Thirumal Rao */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={saiThirumalRaoImage}
                  alt="Dr. Sai Thirumal Rao" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Sai Thirumal Rao</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Orthopedic Surgeon</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3"> MS in Orthopaedics | Diploma in Sports Medicine (IOC). Fellowship in Arthroscopy & Sports Medicine (Cardiff, UK).</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Orthopedics</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Joint Surgery</span>
                </div>
              </div>
            </div>

            {/* Dr. Shanshank */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={shanshankImage}
                  alt="Dr. Shanshank" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Shanshank</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">Laser Surgeon</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS,MS, FMAS </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">General,laparoscopic,Laser Surgeon</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">pelvis.</span>
                </div>
              </div>
            </div>

            {/* Dr. Pranay Palle */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={pranayPalleImage}
                  alt="Dr. Pranay Palle" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Pranay Palle</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">laparoscopic</p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS, FMAS</p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">General,laparoscopic</span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs">Gallbladder removal</span>
                </div>
              </div>
            </div>

            {/* Dr. Rajesh Uppala */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={rajeshUppalaImage}
                  alt="Dr. Rajesh Uppala" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Dr. Rajesh Uppala</h3>
                <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed"></p>
                <p className="text-gray-500 text-xs mb-2 sm:mb-3">MBBS, MS,FMAS </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">General,laparoscopic,Laser and Podiatric Surgeon </span>
                  <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs"> Diabetic foot issues.</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;