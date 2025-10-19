import { Calendar, Phone, MapPin, Clock } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-[purple] relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium uppercase text-white mb-4">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Book your appointment today and experience world-class healthcare 
            with our expert medical team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Calendar  strokeWidth={1} className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
            <p className="text-blue-100 text-sm">Schedule appointments online or by phone</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Clock strokeWidth={1} className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Quick Service</h3>
            <p className="text-blue-100 text-sm">Minimal waiting times with efficient care</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <Phone strokeWidth={1} className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
            <p className="text-blue-100 text-sm">Round-the-clock medical assistance</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center hover:bg-white/20 transition-all duration-300">
            <MapPin strokeWidth={1} className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Convenient Location</h3>
            <p className="text-blue-100 text-sm">Easily accessible with ample parking</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-4  py-3 text-sm rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
              <Calendar strokeWidth={1} className="mr-2 w-5 h-5" />
              Book Appointment Now
            </button>
            
            <button className="border-[1px] border-white text-white px-4 py-3 text-sm rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
              <Phone strokeWidth={1} className="mr-2 w-5 h-5" />
              Call: +91 9381087752
            </button>
          </div>
          
          <p className="text-blue-100 mt-6 text-sm">
            Emergency? Call our 24/7 hotline: <span className="font-semibold text-white">+91  9381087752 </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;