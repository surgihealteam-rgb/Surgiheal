import { Stethoscope, Car, CreditCard, FileText, Clock, Utensils, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Stethoscope,
    title: "Free Consultation + Free Health Scanning",
    description: "Get expert medical consultation and comprehensive health screening at no cost.",
    color: "blue"
  },
  {
    icon: Car,
    title: "Free Cab Pickup & Drop",
    description: "Complimentary transportation service for your convenience and comfort.",
    color: "green"
  },
  {
    icon: CreditCard,
    title: "Zero-Cost EMI Options",
    description: "Flexible payment plans with zero-cost EMI to make healthcare affordable.",
    color: "purple"
  },
  {
    icon: FileText,
    title: "Insurance Claim Assistance",
    description: "Complete support with insurance paperwork and claim processing.",
    color: "orange"
  },
  {
    icon: Clock,
    title: "24/7 Personal Care Coordinator",
    description: "Dedicated care coordinator available round-the-clock for your needs.",
    color: "teal"
  },
  {
    icon: Utensils,
    title: "Free Attendant Meals",
    description: "Complimentary meals for patient attendants during hospital stay.",
    color: "red"
  },
  {
    icon: Heart,
    title: "Postoperative Follow-Up Care",
    description: "Comprehensive post-surgery care and regular follow-up consultations.",
    color: "pink"
  }
];

const colors = {
  blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
  red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
  pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
};

const featureCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  })
};

const iconHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, rotate: [0, 8, -8, 0], transition: { duration: 0.35, type: "spring" } }
};

const WhyChooseUs = () => (
  <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-teal-700 mb-6">
          Why Choose <span className="text-purple-700">SurgiHeal</span>?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience comprehensive healthcare with unmatched benefits and personalized care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              className="group border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-2xl transition-all duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureCardVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center transition-all duration-300 ${colors[feature.color]}`}
                variants={iconHoverVariants}
                initial="initial"
                whileHover="hover"
              >
                <Icon strokeWidth={1.5} className="w-8 h-8" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;