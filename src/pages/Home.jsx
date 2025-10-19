import React, { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import VideoSection from '../components/sections/VideoSection';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import AboutSection from '../components/sections/AboutSection';
import RegistrationPopup from '../components/ui/RegistrationPopup';

const Home = ({ onBookAppointment }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero onBookAppointment={onBookAppointment} />
      <Services />         
      <AboutSection />
      <WhyChooseUs />
      <section id="video">
        <VideoSection />
      </section>
      <Testimonials />
      <div className="bg-teal-500">
        <FAQ />
      </div>
      <CTA onBookAppointment={onBookAppointment} />
      <RegistrationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}

export default Home;