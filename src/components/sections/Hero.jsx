// import { ArrowRight, Play, Shield, Clock, Users, Mouse, PhoneCall, TvMinimalPlay } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import HomeImage from "../../assets/LandingImages/home-section-image.png";
// import Button from '../ui/Buttons/Button';
// import AnimatedCounter from '../ui/AnimatedCounter/AnimatedCounter';
// import AnimatedCounterNoIcon from '../ui/AnimatedCounter/AnimatedCounterNoIcon';
// import AppointmentForm from './AppointmentForm';

// const Hero = () => {
//     const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section className=" flex items-center bg-teal-400 overflow-hidden pt-20">
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-end">
//           <div className="animate-fade-in-up">

//             <h1 className="text-4xl lg:text-5xl font-semibold text-[purple] mb-6 uppercase leading-tight">
//               Your Health, Our
//               <span className="text-white block">Priority</span>
//             </h1>
            
//             <p className="text-md text-gray-600 font-medium mb-6 leading-relaxed">
//               Experience world-class healthcare with our team of expert doctors, 
//               state-of-the-art facilities, and personalized care that puts you first.
//             </p>
            
//             <div className=" flex flex-col sm:flex-row gap-4 mb-12">
//               <Button 
//                  label="Book Appointment"
//                  icon={<PhoneCall strokeWidth={1} size={18} />}
//                  onClick={() => alert("button clicked")}
//               />
//               <Button 
//                  label="Watch Our Story"
//                  icon={<TvMinimalPlay  strokeWidth={1} size={18} />}
//                    onClick={() => {
//                     const section = document.getElementById("video");
//                     section?.scrollIntoView({ behavior: "smooth" });
//                  }}
//               />

//                 {isOpen && (
//                   <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
//                     <button
//                       onClick={() => setIsOpen(false)}
//                       className="absolute top-4 right-6 text-white text-3xl hover:text-red-500 z-50"
//                     >
//                       ✕
//                     </button>

//                       <iframe
//                         className="w-full h-full"
//                         src="https://youtu.be/rrIPBpaJgZI?si=hNjwDPbThugoVy4H" 
//                         title="YouTube video"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       ></iframe>
//                   </div>
//                 )}

//             </div>

//               <div className="bg-white w-full lg:max-w-md mx-auto relative  group backdrop-blur-sm rounded-sm p-4 mb-8">              <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-black mb-1">24/7 Emergency Hotline</p>
//                   <p className="text-xs text-gray-600">Call us anytime for urgent medical assistance</p>
//                 </div>
//                 <a 
//                   href="tel:+916300618837"
//                   className="bg-sky-400 text-[purple] px-6 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center "
//                 >
//                   <PhoneCall className="w-4 h-4 mr-2" strokeWidth={2} />
//                    <span className='font-medium text-sm font-sans'> +916300618837</span>
//                 </a>
//               </div>
//               <div className='absolute top-0 right-0 w-20  h-full group-hover:w-24 duration-300  bg-sky-200 -z-10'></div>
//             </div>
            
//           </div>
          
//           <div className="relative -left-36 animate-fade-in-right flex justify-end  items-end ">
//             <img 
//               src={HomeImage} 
//               alt="Home-page" 
//               className="w-full h-full bg-cover "
//             />

           
//             <div className='absolute left-1/2 -translate-x-1/2 h-64 sm:h-96 w-64 sm:w-96 bg-[purple] border-[10px] border-[purple] -z-10 rounded-full'></div>

//             <div className='hidden lg:flex absolute top-0 left-0 p-10 bg-white text-xl font-bold  justify-center items-center flex-col rounded-full'>
//               <AnimatedCounterNoIcon
//                 end={30}
//                 suffix="+"
//                 label="Doctors"
//                 duration={1800}
//                 delay={800}
//               />
//             </div>


//              <div className="absolute bottom-10 -right-40 m-3 ">
//               <AppointmentForm />
//               </div>

             
//           </div>
//         </div>
//       </div>
       

     
//     </section>
//   );
// };

// export default Hero;




import { PhoneCall, TvMinimalPlay } from 'lucide-react';
import { useState } from 'react';
import HomeImage from "../../assets/LandingImages/background.jpg";
import Button from '../ui/Buttons/Button';
import AnimatedCounterNoIcon from '../ui/AnimatedCounter/AnimatedCounterNoIcon';
import AppointmentForm from './AppointmentForm';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex items-center bg-teal-400 overflow-hidden pt-16">
      <div className=" relative z-10 w-full">
        
        {/* Grid Layout: 1 col on mobile, 3 cols on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3  items-stretch">
          
          {/* LEFT BOX: Content */}
          <div className="flex flex-col justify-center animate-fade-in-up p-8 bg-sky-400">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[purple] mb-6 uppercase leading-tight">
              Your Health, Our
              <span className="text-white block">Priority</span>
            </h1>

            <p className="text-md text-gray-600 font-medium mb-6 leading-relaxed">
              Surgi Heal delivers end-to-end perioperative care with a 24/7 Clinical Care Coordinator guiding every step—preoperative planning, insurance facilitation, inpatient support, transport, attendant welfare, and structured postoperative follow-up.
            </p>
           
            {/* Benefits Boxes */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">🩺</div>
                <div className="text-xxl font-medium text-gray-800">Free Consultation</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">🚗</div>
                <div className="text-xxl font-medium text-gray-800">Free Cab Service</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">💳</div>
                <div className="text-xxl font-medium text-gray-800">Zero-Cost EMI</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">🛡️</div>
                <div className="text-xxl font-medium text-gray-800">Insurance Help</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">👨‍⚕️</div>
                <div className="text-xxl font-medium text-gray-800">24/7 Care Coordinator</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-1">🔄</div>
                <div className="text-xxl font-medium text-gray-800">Follow-Up Care</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                label="Book Appointment"
                icon={<PhoneCall strokeWidth={1} size={18} />}
                onClick={() => alert("button clicked")}
              />
              <Button
                label="Watch Our Story"
                icon={<TvMinimalPlay strokeWidth={1} size={18} />}
                onClick={() => {
                  const section = document.getElementById("video");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>

            {/* Emergency Box */}
            <div className="bg-white w-full mx-auto relative group backdrop-blur-sm rounded-sm p-4 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black mb-1">24/7 Emergency Hotline</p>
                  <p className="text-xs text-gray-600">Call us anytime for urgent medical assistance</p>
                </div>
                <a
                  href="tel:+919381087752"
                  className="text-gray-100 bg-red-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center "
                >
                  <PhoneCall className="w-4 h-4 mr-2" strokeWidth={2} />
                  <span className="font-medium text-sm font-sans"> +919381087752</span>
                </a>
              </div>
              <div className="absolute top-0 right-0 w-20 h-full group-hover:w-24 duration-300 bg-sky-200 -z-10"></div>
            </div>
          </div>

          {/* MIDDLE BOX: Image */}
          <div className="relative flex items-end justify-center h-full   lg:border-l-4 border-[purple]">
            <img
              src={HomeImage}
              alt="Home-page"
              className="w-full h-full object-cover"
            />

            {/* Purple Circle Background */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-64 sm:h-96 w-64 sm:w-96 bg-[purple] border-[10px] border-[purple] -z-10 rounded-full"></div>

            {/* Counter (only lg) */}
            <div className="hidden lg:flex absolute top-6 left-6 p-6 bg-white text-xl font-bold justify-center items-center flex-col rounded-full shadow-lg">
              <AnimatedCounterNoIcon
                end={30}
                suffix="+"
                label="Doctors"
                duration={1800}
                delay={800}
              />
            </div>
          </div>


          {/* RIGHT BOX: Form */}
          <div className="flex flex-col items-center justify-center text-center p-6 bg-[purple]">
            <h2 className="text-2xl font-medium text-white  uppercase">
              Book Your <span className='text-yellow-400 font-semibold animate-pulse'>Free</span> Appointment
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Get a free consultation and <span className="font-semibold text-yellow-400">Free scan</span> today.
            </p>

            <AppointmentForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
