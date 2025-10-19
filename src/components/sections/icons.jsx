import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import RegistrationPopup from '../ui/RegistrationPopup';

// Import medical condition icons
import pilesIcon from '../../assets/icons/piles.jpg';
import herniaIcon from '../../assets/icons/hernia.jpg';
import analFissureIcon from '../../assets/icons/analFissure.jpg';
import analFistulaIcon from '../../assets/icons/analFistula.jpg';
import varicoseVeinsIcon from '../../assets/icons/varicoseVeins.jpg';
import lipomaIcon from '../../assets/icons/lipoma.jpg';
import diabeticFootIcon from '../../assets/icons/diabeticFootulcer.jpg';
import gynecomastiaIcon from '../../assets/icons/gynecomastia.jpg';
import aclTearIcon from '../../assets/icons/aclTear.jpg';
import deepVeinThrombosisIcon from '../../assets/icons/deepVeinThrombosis.jpg';

import laserCircumcisionIcon from '../../assets/icons/laserCircumcision.jpg';
import uterineFibroidIcon from '../../assets/icons/uterineFibroid.jpg';
import eswlSurgeryIcon from '../../assets/icons/ESWL Surgery .jpg';
import gallBladderStonesIcon from '../../assets/icons/Gall bladder stones.jpg';
import hysterectomyIcon from '../../assets/icons/Hysterectomy .jpg';
import kidneyStonesIcon from '../../assets/icons/Kidney stones .jpg';
import laparoscopicTubectomyIcon from '../../assets/icons/Laproscopic tubectomy.jpg';
import ovarianCystIcon from '../../assets/icons/ovarian cyst .jpg';
import pcnlSurgeryIcon from '../../assets/icons/PCNL surgery .jpg';
import pilonidalSinusIcon from '../../assets/icons/Pilonidal sinus .jpg';
import rirsSurgeryIcon from '../../assets/icons/RIRS surgery .jpg';
import sebaceousCystIcon from '../../assets/icons/Sebaceous cyst.jpg';
import thyroidTumourIcon from '../../assets/icons/Thyroid tumour .jpg';
import uretricCalculiIcon from '../../assets/icons/Uretric Calculi.jpg';
import urslSurgeryIcon from '../../assets/icons/URSL Surgery .jpg';
import vasectomyIcon from '../../assets/icons/Vasectomy .jpg';


const MedicalIcons = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  
  const ITEMS_PER_ROW = 6;
  const INITIAL_ROWS = 1;

  const icons = [
    // General Surgery & Proctology
    { src: pilesIcon, name: 'Piles Treatment', alt: 'Piles', specialty: 'General Surgery' },
    { src: herniaIcon, name: 'Hernia Surgery', alt: 'Hernia', specialty: 'General Surgery' },
    { src: analFissureIcon, name: 'Anal Fissure', alt: 'Anal Fissure', specialty: 'General Surgery' },
    { src: analFistulaIcon, name: 'Anal Fistula', alt: 'Anal Fistula', specialty: 'General Surgery' },
    
    // Plastic & Cosmetic Surgery
    { src: lipomaIcon, name: 'Lipoma Removal', alt: 'Lipoma', specialty: 'Plastic & Reconstructive Surgery' },
    { src: gynecomastiaIcon, name: 'Gynecomastia Surgery', alt: 'Gynecomastia', specialty: 'Plastic & Reconstructive Surgery' },
    { src: laserCircumcisionIcon, name: 'Laser Circumcision', alt: 'Laser Circumcision', specialty: 'General Surgery' },

    
    // Vascular & Orthopedic
    { src: varicoseVeinsIcon, name: 'Varicose Veins', alt: 'Varicose Veins', specialty: 'General Surgery' },
    { src: deepVeinThrombosisIcon, name: 'Deep Vein Thrombosis', alt: 'DVT', specialty: 'General Surgery' },
    { src: aclTearIcon, name: 'ACL Tear Treatment', alt: 'ACL Tear', specialty: 'Orthopedics & Joint Replacement' },
    { src: diabeticFootIcon, name: 'Diabetic Foot Care', alt: 'Diabetic Foot', specialty: 'General Surgery' },
    
    // Gynecology & Fertility
    { src: uterineFibroidIcon, name: 'Uterine Fibroid', alt: 'Uterine Fibroid', specialty: 'Obstetrics & Gynaecology' },
    { src: hysterectomyIcon, name: 'Hysterectomy', alt: 'Hysterectomy', specialty: 'Obstetrics & Gynaecology' },
    { src: laparoscopicTubectomyIcon, name: 'Laparoscopic Tubectomy', alt: 'Tubectomy', specialty: 'Obstetrics & Gynaecology' },
    { src: ovarianCystIcon, name: 'Ovarian Cyst', alt: 'Ovarian Cyst', specialty: 'Obstetrics & Gynaecology' },
    
    // Urology & Kidney Stones
    { src: kidneyStonesIcon, name: 'Kidney Stones', alt: 'Kidney Stones', specialty: 'Urology' },
    { src: eswlSurgeryIcon, name: 'ESWL Surgery', alt: 'ESWL', specialty: 'Urology' },
    { src: pcnlSurgeryIcon, name: 'PCNL Surgery', alt: 'PCNL', specialty: 'Urology' },
    { src: rirsSurgeryIcon, name: 'RIRS Surgery', alt: 'RIRS', specialty: 'Urology' },
    { src: urslSurgeryIcon, name: 'URSL Surgery', alt: 'URSL', specialty: 'Urology' },
    { src: uretricCalculiIcon, name: 'Ureteric Calculi', alt: 'Ureteric Stones', specialty: 'Urology' },
    { src: vasectomyIcon, name: 'Vasectomy', alt: 'Vasectomy', specialty: 'Urology' },
    
    // Additional Surgeries
    { src: gallBladderStonesIcon, name: 'Gall Bladder Stones', alt: 'Gallbladder', specialty: 'General Surgery' },
    { src: pilonidalSinusIcon, name: 'Pilonidal Sinus', alt: 'Pilonidal Sinus', specialty: 'General Surgery' },
    { src: sebaceousCystIcon, name: 'Sebaceous Cyst', alt: 'Sebaceous Cyst', specialty: 'General Surgery' },
    { src: thyroidTumourIcon, name: 'Thyroid Tumour', alt: 'Thyroid Surgery', specialty: 'General Surgery' }
  ];

  const handleIconClick = (specialty) => {
    setShowRegistrationPopup(true);
  };



  const displayedIcons = showAll ? icons : icons.slice(0, ITEMS_PER_ROW * INITIAL_ROWS);
  const hasMoreIcons = icons.length > ITEMS_PER_ROW * INITIAL_ROWS;

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="mt-8 mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {displayedIcons.map((icon, index) => (
          <div 
            key={index} 
            className="relative flex flex-col items-center group w-32 sm:w-40 md:w-44 lg:w-48"
          >
            <div className="relative">
              <img 
                src={icon.src} 
                alt={icon.alt} 
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 object-cover rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer" 
                onClick={() => handleIconClick(icon.specialty)}
              />
              
              {/* Action buttons */}
              <div className="absolute top-2 right-2">
                <div className="relative">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === index ? null : index); }}
                    className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    title="More Options"
                  >
                    <MoreHorizontal className="w-6 h-6 text-gray-600" />
                  </button>
                  
                  {activeDropdown === index && (
                    <div className="absolute top-6 right-0 bg-white border rounded-lg shadow-lg py-1 z-10 w-32">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleIconClick(icon.specialty); setActiveDropdown(null); }}
                        className="w-full px-3 py-1 text-left text-xs hover:bg-gray-100"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setShowRegistrationPopup(true); setActiveDropdown(null); }}
                        className="w-full px-3 py-1 text-left text-xs hover:bg-gray-100"
                      >
                        Book Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <span className="text-sm md:text-base text-gray-700 mt-3 text-center leading-tight">
              {icon.name}
            </span>
          </div>
        ))}
      </div>
      
      {hasMoreIcons && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show More ({icons.length - ITEMS_PER_ROW * INITIAL_ROWS} more)
              </>
            )}
          </button>
        </div>
      )}
      
      <RegistrationPopup 
        isOpen={showRegistrationPopup} 
        onClose={() => setShowRegistrationPopup(false)} 
      />
    </div>
  );
};

export default MedicalIcons;