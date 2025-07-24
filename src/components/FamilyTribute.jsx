import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiHome, FiUsers, FiGift } = FiIcons;

const FamilyTribute = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const familyMembers = [
    {
      name: 'Commander James Stone',
      role: 'Husband & Fellow Naval Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      message: 'My anchor through every storm, my compass through every challenge. Your strength inspired me to be better every day.',
    },
    {
      name: 'Emily Stone',
      role: 'Daughter',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop',
      message: 'Mom taught me that service isn\'t just a job—it\'s a calling. She showed me how to lead with both strength and compassion.',
    },
    {
      name: 'Michael Stone',
      role: 'Son',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      message: 'Growing up as a Navy kid taught me resilience, adaptability, and the importance of serving something greater than yourself.',
    },
  ];

  const sacrifices = [
    {
      icon: FiHome,
      title: 'Multiple Relocations',
      description: '12 moves across 8 states and 3 countries, each time building a new home with grace and determination.',
    },
    {
      icon: FiHeart,
      title: 'Extended Deployments',
      description: 'Countless birthdays, holidays, and milestones celebrated through video calls and letters.',
    },
    {
      icon: FiUsers,
      title: 'Community Building',
      description: 'Creating support networks for military families, ensuring no spouse or child felt alone.',
    },
    {
      icon: FiGift,
      title: 'Shared Dreams',
      description: 'Supporting each other\'s careers while maintaining a strong family foundation.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-4">
            Family & Sacrifice Tribute
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-600 max-w-3xl mx-auto">
            Behind every great naval officer is a family that serves alongside them, sharing in both the challenges and the pride of military service.
          </p>
        </motion.div>

        {/* Family Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {familyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-pearl-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                <blockquote className="text-pearl-700 italic leading-relaxed">
                  "{member.message}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family Sacrifices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-navy-900 rounded-lg p-8 mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-white text-center mb-8">
            The Sacrifices We Made Together
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sacrifices.map((sacrifice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={sacrifice.icon} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{sacrifice.title}</h4>
                <p className="text-pearl-300 leading-relaxed">{sacrifice.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank You Letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-pearl-50 rounded-lg p-8 border-l-4 border-gold-500"
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={FiHeart} className="h-8 w-8 text-gold-500 mr-3" />
            <h3 className="text-2xl font-display font-bold text-navy-900">
              A Letter of Gratitude
            </h3>
          </div>
          
          <div className="space-y-6 text-pearl-700 leading-relaxed">
            <p className="text-lg">
              To my beloved family,
            </p>
            
            <p>
              As I reflect on 28 years of naval service, I am overwhelmed not by the medals or the commands, 
              but by the incredible support and love you have shown me every step of the way. You didn't just 
              support my career—you lived it alongside me.
            </p>
            
            <p>
              James, my steadfast partner, you understood the demands of service because you lived them too. 
              Your strength gave me strength, your wisdom guided my decisions, and your love sustained me 
              through every challenge.
            </p>
            
            <p>
              Emily and Michael, you grew up in a world of constant change, new schools, and long separations. 
              Yet you thrived, adapted, and became the remarkable adults you are today. You taught me that 
              being a mother was just as important as being a captain.
            </p>
            
            <p>
              The Navy gave me a career, but you gave me a life worth living. Every award I received, 
              every sailor I led, every mission I completed—it was all made possible by the foundation 
              of love and support you provided.
            </p>
            
            <p>
              Thank you for your service to our country through your service to me.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-pearl-200">
            <p className="text-gold-600 font-semibold">
              With all my love and gratitude,<br />
              Mom / Olivia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyTribute;