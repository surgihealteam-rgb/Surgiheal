import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Calendar } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is SurgiHeal?",
      answer: " Surgi Heal is a comprehensive surgical care platform that provides end-to-end support for patients undergoing secondary care surgeries. From consultations and preoperative planning to hospitalization, postoperative care, and insurance assistance, we ensure a stress-free, seamless experience for patients and their families."
    },
    {
      question: "How does the free consultation works?",
      answer:"At Surgi Heal, patients can schedule a free consultation with our expert surgeons. During this consultation, your medical history is reviewed, the required investigations are suggested, and the best surgical options are explained. Our Care Coordinator ensures all appointments are scheduled conveniently "
    },
    {
      question: "What insurance and payment options does Surgi Heal provide?",
answer:"Surgi Heal offers full insurance claim support, including documentation and pre-authorization assistance. For patients without insurance or for additional costs, we provide zero-cost EMI options, allowing you to pay for your treatment in convenient monthly installments, making surgery more affordable and stress-free. "
    },
    {
      question: "Do you provide transport services for patients?",
answer:"Yes! Surgi Heal arranges complimentary cab pickup and drop for patients, ensuring safe and hassle-free transportation to and from the hospital. This service is part of our commitment to provide a smooth, stress-free surgical experience. "
    },
    {
      question: "How long will I stay in the hospital?",
answer:"Most procedures at Surgi Heal are designed for 1-day hospital stays, especially for minimally invasive surgeries. Complex surgeries may require longer admission, but our Care Coordinator will provide clear guidance on hospital stay duration and recovery plans."
    },
    {
      question: "What is the role of a 24/7 Care Coordinator?",
answer:"Each patient is assigned a dedicated Care Coordinator who is available 24/7. They manage all aspects of the surgical journey, including scheduling appointments, assisting with insurance, coordinating tests, answering questions, and providing continuous emotional and logistical support to patients and families. "
    },
    {
      question: "Do you provide post-operative care at home?",
answer:"Absolutely. Surgi Heal ensures structured post-operative follow-ups, including wound care, recovery monitoring, physiotherapy, and guidance for any complications. Our Care Coordinators schedule visits or virtual consultations so patients can heal safely and comfortably at home. "
    },
    {
      question: "Can attendants/family members be supported during my hospital stay?",
answer:"Yes. Surgi Heal provides attendant support, including complimentary meals, comfort arrangements, and guidance throughout the hospitalization. We ensure that your family is taken care of while you focus on recovery. "
    },
    {
      question: "What types of surgeries does Surgi Heal handle?",
answer:" Surgi Heal supports a wide range of secondary care surgeries, including general surgery, laparoscopic procedures, orthopedic surgery, gynecological surgery, ophthalmology (LASIK), ENT, and more. Our network of experienced surgeons and modern facilities ensures safety and excellence in every procedure."
    },
    {
      question: "How do I get started with Surgi Heal?",
answer:"Getting started is simple! You can book a free consultation through our website or call our Care Coordinator. Once your initial consultation is scheduled, our team guides you through diagnostics, insurance, hospital admission, surgery, and recovery — making your surgical journey completely stress-free."
    },
  
    {
      question: "What technology and equipment does SurgiHeal use?",
      answer: "We use state-of-the-art medical technology including advanced laparoscopic equipment, laser surgery systems, modern imaging technology, and fully equipped operating rooms. This ensures precise, safe, and effective treatments with the latest medical innovations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about SurgiHeal's services, procedures, and patient care.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              >
                <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our patient care coordinators are available 24/7 to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919381087752"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 9381087752
            </a>
        
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;