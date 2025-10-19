import React, { useState } from 'react';
import { Star, Quote, Heart, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sandeep Goud",
    role: "Heart Surgery Patient",
    location: "Uppal, Hyderabad",
    content: "I had a minor surgery done through surgiheal's panel of doctor. From booking the consultation to post-surgery care, everything was smooth.The staff followed up regulary, which gave me a lot of confidence",
    rating: 5,
    image: "https://media.istockphoto.com/id/924009114/photo/portrait-of-indian-man.jpg?s=170667a&w=0&k=20&c=clWpeUuuJuv2okI9Y2ioD7ZMmjfS1IS8qG6EzenOzG8=",
    specialty: "Cardiology"
  },
  {
    name: "Rajesh Reedy",
    role: "Orthopedic Patient",
    location: "Banjara Hills, Hyderabad",
    content: " My mother needed specialized treament, and we found the right doctor through surgihea.The way they guided us and answered our doubts patiently was impressive.Truly professional service.",
    rating: 5,
    image: "https://as2.ftcdn.net/v2/jpg/02/67/50/37/1000_F_267503734_ut3fydCBeEWViWORWsJoGNhj5vewWFIG.jpg",
    specialty: "Orthopedics"
  },
  {
    name: "Anitha Kumari",
    role: "Pediatric Parent",
    location: "Kukatpally, Hyderabad",
    content: "I was nervous about my procedure,but the surgeon recommended by surgiheal exolained everything clearly.The whole process was transparent and stress-free.",
    rating: 5,
    image: "https://as1.ftcdn.net/v2/jpg/02/96/07/04/1000_F_296070450_Jd5JTMFIiIOycPxiXFy70sBx5enf2wuB.jpg",
    specialty: "Pediatrics"
  },
  {
    name: "Mohammed Imran",
    role: "Emergency Patient",
    location: "Charminar, Hyderabad",
    content: "Surgiheal helped me connect with the right specialist without any hassle. The support team was available even at late hours when I had questions. Very thankful for their dedication.",
    rating: 5,
    image: "https://media.istockphoto.com/id/1398271235/photo/portrait-of-a-young-man-out-for-a-walk-in-a-park-in-the-summer.jpg?s=612x612&w=0&k=20&c=xR9NW7W7I-VPYRumpg-ofphDdt7LM-sZwwUK5NFoW3w=",
    specialty: "Emergency Care"
  },
  {
    name: "Sneha Patil",
    role: "Cancer Survivor",
    location: "Madhapur, Hyderabad",
    content: "What I liked most about Surgiheal was the clear pricing and the way they handled all the hospital formalities. It saved us a lot of time and tension.",
    rating: 5,
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay1zNTItZHNjMjU1MzU2OC1jaGltLTFzcS5qcGc.jpg",
    specialty: "Oncology"
  },
  {
    name: "James Thompson",
    role: "Neurology Patient",
    location: "LB Nagar, Hyderabad",
    content: "I had been postponing my treatment out of fear. Surgiheal not only arranged the best doctor but also gave me confidence with their continuous support. I recovered much faster than I expected.",
    rating: 5,
    image: "https://i1.rgstatic.net/ii/profile.image/1007879075139589-1617308505826_Q512/Shrikant-Kumar-3.jpg",
    specialty: "Neurology"
  },
  {
    name: "Divya Rani",
    role: "Maternity Patient",
    location: "Jubilee Hills, Hyderabad",
    content: "I had been postponing my treatment out of fear. Surgiheal not only arranged the best doctor but also gave me confidence with their continuous support. I recovered much faster than I expected.",
    rating: 5,
    image: "https://www.wordofmouthdentalcare.co.uk/retina-images/hot-button-4.webp",
    specialty: "Maternity"
  },
  {
    name: "Arun Varma",
    role: "Diabetes Patient",
    location: " Ameerpet,Hyderabad",
    content: "Excellent service! The team arranged my consultation within a day and guided me throughout. The doctors associated with them are very experienced.",
    rating: 5,
    image: "https://as2.ftcdn.net/v2/jpg/08/58/63/05/1000_F_858630520_QUmsNp4Lm5MLBGf9jMW3M06gVb3tKLu3.jpg",
    specialty: "Endocrinology"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerPage) : Math.max(0, prev - testimonialsPerPage)
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-blue-600" />
          </div> */}
          <h2 className="text-4xl lg:text-5xl font-medium uppercase text-gray-900 mb-6">
            Patient <span className="text-[purple]">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real experiences from patients who received exceptional care at SurgiHeal Healthcare.
          </p>
        </div>

        {/* Navigation Controls */}
      
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.name}-${currentIndex}`}
              className="group bg-white rounded-sm p-6 relative transform hover:-translate-y-4 transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 cursor-pointer"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[teal] rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              
              <Quote strokeWidth={1} className="w-7 h-7 text-[purple] mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {testimonial.specialty}
                </span>
                <p className="text-gray-600 leading-relaxed text-md group-hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    strokeWidth={1}
                    className="w-4 h-4 text-[teal] fill-current mr-1 transform group-hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: `${i * 100}ms` }} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
              </div>
              
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4  ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-medium test-md text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={prevTestimonials}
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full  transition-all duration-300 hover:bg-blue-50 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * testimonialsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / testimonialsPerPage) === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonials}
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full  transition-all duration-300 hover:bg-blue-50 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;