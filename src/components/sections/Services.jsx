import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Activity, 
  Stethoscope, 
  Scissors, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Phone,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import ServicesBg from '../../assets/LandingImages/serives-bg.jpg'
import MedicalIcons from './icons';

// Import service images
import generalSurgeryImg from '../../assets/servies/General-Surgery.png';
import proctologyImg from '../../assets/servies/protocology.jpg';
import laparoscopyImg from '../../assets/servies/Laparoscopy.jpg';
import gastroenterologyImg from '../../assets/servies/Surgical Gastroenterology.jpg';
import urologyImg from '../../assets/servies/Urology.jpg';
import medicalOncologyImg from '../../assets/servies/medical oncology.jpg';
import gynecologyImg from '../../assets/servies/Gynecology & Obstetrics.jpg';
import plasticSurgeryImg from '../../assets/servies/plastic surgery.jpg';
import vascularSurgeryImg from '../../assets/servies/vascular surgery.jpg';
import podiatricSurgeryImg from '../../assets/servies/Podiatric Surgery.jpg';
import entImg from '../../assets/servies/ENT.jpg';
import orthopedicsImg from '../../assets/servies/Orthopedics .jpg';

const Services = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  
  const ITEMS_PER_PAGE = 3; // Show 3 items initially

  const categories = [
    { id: 'all', name: 'All Services', icon: Stethoscope },
    { id: 'emergency', name: 'Emergency Care', icon: Activity },
    { id: 'speciality', name: 'Specialities', icon: Heart },
    { id: 'diagnostic', name: 'Diagnostics', icon: Eye },
    { id: 'surgical', name: 'Surgical', icon: Scissors }
  ];

  const services = [
    {
      id: 1,
      category: 'speciality',
      title: 'General Surgery ',
      description: ' Comprehensive surgical care for hernia, appendix, and other common procedures.',
      icon: Heart,
      image: generalSurgeryImg,
      features: ['Hernia Repair', 'Appendectomy', 'Gallbladder Surgery', 'Thyroid Surgery'],
      color: 'red',
      rating: 4.9
    },
    {
      id: 2,
      category: 'speciality',
      title: 'Proctology',
      description: ' Treatment for piles, fissure, fistula, and related anorectal disorders.',
      icon: Activity,
      image: proctologyImg,
      features: ['Piles Treatment', 'Anal Fissure', 'Anal Fistula', 'Pilonidal Sinus'],
      color: 'red',
      rating: 4.8
    },
    {
      id: 3,
      category: 'speciality',
      title: 'Laparoscopic Surgeries',
      description: 'Keyhole procedures ensuring faster recovery and minimal scars.',
      icon: Brain,
      image: laparoscopyImg,
      features: ['Brain Surgery', 'Spine Care', 'Stroke Treatment', 'Epilepsy Care'],
      color: 'purple',
      rating: 4.9
    },
    {
      id: 4,
      category: 'speciality',
      title: ' Surgical Gastroenterology',
      description: 'Advanced GI and abdominal surgeries for digestive health.',
      icon: Baby,
      image: gastroenterologyImg,
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Arthroscopy'],
      color: 'blue',
      rating: 4.7
    },
    {
      id: 5,
      category: 'speciality',
      title: ' Urology',
      description:'Treatment for urinary and kidney conditions using the latest techniques.', 
      icon: Eye,
      image: urologyImg,
      features: ['Newborn Care', 'Vaccination', 'Child Development', 'Pediatric Surgery'],
      color: 'green',
      rating: 4.8
    },
    {
      id: 6,
      category: 'speciality',
      title: 'Surgical Oncology',
     description: 'Expert cancer surgeries with multidisciplinary coordination.',
      icon: Scissors,
      image: medicalOncologyImg,
      features: ['Cataract Surgery', 'LASIK', 'Retina Care', 'Glaucoma Treatment'],
      color: 'indigo',
      rating: 4.9
    },
    {
      id: 7,
      category: 'diagnostic',
      title: 'Medical Oncology ',
     description:' Chemotherapy and advanced non-surgical cancer treatments.',
      icon: Eye,
      image: medicalOncologyImg,
      features: ['MRI/CT Scan', 'Ultrasound', 'Digital X-Ray', 'Mammography'],
      color: 'cyan',
      rating: 4.6
    },
    {
      id: 8,
      category: 'diagnostic',
      title: ' Gynecology & Obstetrics',
    description: 'Women\'s health, fertility, and maternity care with compassion.',
      icon: Eye,
      image: gynecologyImg,
      features: ['Blood Tests', 'Pathology', 'Microbiology', 'Genetic Testing'],
      color: 'teal',
      rating: 4.7
    },
    {
      id: 9,
      category: 'surgical',
      title: ' Plastic Surgery ',
      description: ' Cosmetic and reconstructive procedures for aesthetic and functional results',
      icon: Scissors,
      image: plasticSurgeryImg,
      features: ['Laparoscopic Surgery', 'Robotic Surgery', 'Day Care Surgery', 'Trauma Surgery'],
      color: 'orange',
      rating: 4.8
    },
    {
      id: 10,
      category: 'speciality',
      title: 'Vascular Surgery',
     description:' Treatment for varicose veins and vascular disorders.',
      icon: Shield,
      image: vascularSurgeryImg,
      features: ['Skin Cancer Screening', 'Laser Treatment', 'Cosmetic Procedures', 'Acne Treatment'],
      color: 'pink',
      rating: 4.6
    },
    {
      id: 11,
      category: 'speciality',
      title: 'Podiatric Surgery',
      description:' Specialized foot and ankle surgical solutions.',
      icon: Activity,
      image: podiatricSurgeryImg,
      features: ['Endoscopy', 'Liver Care', 'IBD Treatment', 'Colonoscopy'],
      color: 'yellow',
      rating: 4.7
    },
    {
      id: 12,
      category: 'emergency',
      title: 'ENT',
      description: 'Ear, nose, and throat treatments using endoscopic and microsurgical techniques.',
      icon: Clock,
      image: entImg,
      features: ['Walk-in Service', 'Minor Injuries', 'Illness Treatment', 'Basic Diagnostics'],
      color: 'red',
      rating: 4.5
    },
    { 
      id: 13,
      category: 'emergency',
      title: 'Orthopedics',
      description: ' Joint replacement, fracture management, and sports injury care.',
      icon: Users,
      image: orthopedicsImg,
      features: ['24/7 Emergency', 'Ambulance Service', 'Critical Care', 'Disaster Management'],
      color: 'purple',
      rating: 4.9
    }
  ];

  // Filter services based on category and search query
  const filteredServices = useMemo(() => {
    let filtered = activeCategory === 'all' 
      ? services 
      : services.filter(service => service.category === activeCategory);
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature => 
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  // Apply pagination
  const displayedServices = showAll 
    ? filteredServices 
    : filteredServices.slice(0, ITEMS_PER_PAGE);

  const hasMoreServices = filteredServices.length > ITEMS_PER_PAGE;
  const isShowingAll = showAll || filteredServices.length <= ITEMS_PER_PAGE;

  const getColorClasses = (color) => {
    const colorMap = {
      red: 'from-red-500 to-pink-500 group-hover:from-red-600 group-hover:to-pink-600',
      purple: 'from-purple-500 to-indigo-500 group-hover:from-purple-600 group-hover:to-indigo-600',
      blue: 'from-blue-500 to-cyan-500 group-hover:from-blue-600 group-hover:to-cyan-600',
      green: 'from-green-500 to-emerald-500 group-hover:from-green-600 group-hover:to-emerald-600',
      indigo: 'from-indigo-500 to-purple-500 group-hover:from-indigo-600 group-hover:to-purple-600',
      cyan: 'from-cyan-500 to-blue-500 group-hover:from-cyan-600 group-hover:to-blue-600',
      teal: 'from-teal-500 to-green-500 group-hover:from-teal-600 group-hover:to-green-600',
      orange: 'from-orange-500 to-red-500 group-hover:from-orange-600 group-hover:to-red-600',
      pink: 'from-pink-500 to-rose-500 group-hover:from-pink-600 group-hover:to-rose-600',
      yellow: 'from-yellow-500 to-orange-500 group-hover:from-yellow-600 group-hover:to-orange-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowAll(false); // Reset pagination when searching
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAll(false); // Reset pagination when changing category
    setSearchQuery(''); // Clear search when changing category
  };

  const handleServiceClick = (service) => {
    const serviceRoutes = {
      'general surgery': '/services/surgery',
      'proctology': '/services/proctology',
      'laparoscopic surgeries': '/services/laparoscopic-surgery',
      'surgical gastroenterology': '/services/gastroenterology',
      'urology': '/services/urology',
      'surgical oncology': '/services/oncology',
      'medical oncology': '/services/oncology',
      'gynecology & obstetrics': '/services/gynecology',
      'plastic surgery': '/services/laser-surgery',
      'vascular surgery': '/services/surgery',
      'podiatric surgery': '/services/surgery',
      'ent': '/services/surgery',
      'orthopedics': '/services/orthopedics'
    };
    
    const route = serviceRoutes[service.title.toLowerCase().trim()];
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="px-4 pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <MedicalIcons />
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl uppercase font-medium text-gray-800 mb-6 flex items-center justify-center gap-3">
            <Stethoscope className="w-8 h-8 text-teal-500" />
            <span className='bg-teal-400 p-3'>Our</span> <span className="text-[purple]">Specialities</span>
            <Heart className="w-8 h-8 text-purple-600" />
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services delivered by experienced specialists using advanced technology 
            and evidence-based treatments for optimal patient outcomes.
          </p>
        </div>

       <div className='bg-gray-200 p-6'>
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services, treatments, or specialties..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-teal-400 text-white transform scale-105'
                    : 'border border-gray-300 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            {searchQuery ? (
              <>Showing {displayedServices.length} of {filteredServices.length} results for "{searchQuery}"</>
            ) : (
              <>Showing {displayedServices.length} of {filteredServices.length} services</>
            )}
          </p>
        </div>

        {/* Services Grid */}
        {displayedServices.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-sm hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => handleServiceClick(service)}
                  >
                    <div
                      className="relative p-4 text-white overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${service.image || ServicesBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <IconComponent strokeWidth={2} size={20} />
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{service.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-md font-medium mb-2 relative z-10">{service.title}</h3>
                    </div>

                    <div className="p-3">
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex justify-end space-x-3 px-3">
                        <button className=' cursor-pointer'><ArrowRight strokeWidth={1} size={18} className='' /></button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More / Show Less Button */}
            {hasMoreServices && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center px-6 py-3 bg-teal-400 text-white rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  {isShowingAll ? (
                    <>
                      <ChevronUp className="w-5 h-5 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5 mr-2" />
                      Load More Services ({filteredServices.length - ITEMS_PER_PAGE} more)
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          /* No Results Message */
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery 
                ? `No services match your search "${searchQuery}". Try different keywords or browse categories.`
                : 'No services available in this category.'
              }
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-teal-500 hover:text-teal-600 font-medium"
              >
                Clear search and show all services
              </button>
            )}
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Services;