import React from 'react';
import { Heart, Users, Clock, MapPin, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl uppercase font-medium text-gray-800 mb-4">
            About <span className='bg-teal-400 p-3'>Us</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Your Trusted Partner in Healthcare Excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-10">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-500 leading-relaxed">
              <p>
                At <span className="font-bold text-[purple]">Surgiheal</span>, we believe that <span className="font-semibold text-teal-600">healing is an art guided by science and compassion</span>. We are a <span className="font-semibold">multidisciplinary surgical care team</span> dedicated to providing <span className="font-bold text-green-600">safe, ethical, and advanced treatments</span> across a wide range of specialties.
              </p>
              <br />
              <p>
                Founded with the vision of making <span className="font-semibold text-[purple]">quality surgical care accessible and affordable</span>, Surgiheal integrates <span className="font-semibold">modern surgical techniques, experienced specialists, and personalized post-operative care</span> under one roof.
              </p>
              <br />
              <p>
                Our focus is not only on <span className="font-semibold text-teal-600">performing successful procedures</span> but also on ensuring <span className="font-bold text-green-600">complete recovery and patient comfort</span>—from the first consultation to post-surgery follow-up at home if needed.
              </p>
              <br />
              <p>
                With a growing network of clinics and partner hospitals, our mission is to <span className="font-bold text-[purple]">reshape the surgical care experience through technology, transparency, and trust</span>.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg text-purple-800 mb-2">Compassion</h4>
                <p className="text-sm text-gray-600">Treating every patient like family.</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-bold text-lg text-teal-800 mb-2">Precision</h4>
                <p className="text-sm text-gray-600">Every procedure, every time, handled with utmost accuracy.</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg text-purple-800 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">Honest opinions and transparent communication.</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-bold text-lg text-teal-800 mb-2">Safety</h4>
                <p className="text-sm text-gray-600">Strict adherence to sterilization, hygiene, and global surgical protocols.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className=" bg-sky-100 border-gray-300 max-w-6xl mx-auto rounded-2xl p-8 ">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fact 1 */}
            <div className="text-center group">
              <div className="border-[1px] border-gray-400 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center  transition-colors">
                <Users strokeWidth={1} className="w-6 h-6 text-[purple]" />
              </div>
              <h4 className="font-medium text-xl text-gray-800 mb-2">50+</h4>
              <p className="text-gray-600 font-medium">Specialist Doctors</p>
              <p className="text-sm text-gray-500">across multiple disciplines</p>
            </div>

            {/* Fact 2 */}
            <div className="text-center group">
              <div className="border-[1px] border-gray-400  p-3 rounded-full  w-12 h-12 mx-auto mb-4 flex items-center justify-center transition-colors">
                <Heart strokeWidth={1} className="w-6 h-6 text-[purple]]" />
              </div>
              <h4 className="font-medium text-xl text-gray-800 mb-2">50,000+</h4>
              <p className="text-gray-600 font-medium">Patients Treated</p>
              <p className="text-sm text-gray-500">with trust and care</p>
            </div>

            {/* Fact 3 */}
            <div className="text-center group">
              <div className="border-[1px] border-gray-400  p-3 rounded-full  w-12 h-12 mx-auto mb-4 flex items-center justify-center  transition-colors">
                <Clock strokeWidth={1} className="w-6 h-6 text-[purple]" />
              </div>
              <h4 className="font-medium text-xl text-gray-800 mb-2">24/7</h4>
              <p className="text-gray-600 font-medium">Emergency Care</p>
              <p className="text-sm text-gray-500">& Critical Care facilities</p>
            </div>

            {/* Fact 4 */}
            <div className="text-center group">
              <div className="border-[1px] border-gray-400  p-3 rounded-full  w-12 h-12 mx-auto mb-4 flex items-center justify-center transition-colors">
                <MapPin strokeWidth={1} className="w-6 h-6 text-[purple]" />
              </div>
              <h4 className="font-medium text-xl text-gray-800 mb-2">Network</h4>
              <p className="text-gray-600 font-medium">Clinics & Labs</p>
              <p className="text-sm text-gray-500">for easy accessibility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;