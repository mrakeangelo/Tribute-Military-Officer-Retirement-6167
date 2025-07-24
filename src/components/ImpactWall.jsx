import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiUsers, FiHeart, FiStar } = FiIcons;

const ImpactWall = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Master Chief Petty Officer Sarah Johnson',
      role: 'Senior Enlisted Advisor, USS Gravely',
      message: 'Captain Stone led with both strength and compassion. She never asked us to do anything she wouldn\'t do herself. Her door was always open, and she truly cared about every sailor on board.',
      icon: FiStar,
    },
    {
      name: 'Commander Michael Rodriguez',
      role: 'Executive Officer, USS Gravely',
      message: 'Working under Captain Stone\'s command was a masterclass in leadership. She taught me that true leadership isn\'t about commanding respect—it\'s about earning it through your actions every single day.',
      icon: FiUsers,
    },
    {
      name: 'Petty Officer First Class David Chen',
      role: 'Operations Specialist',
      message: 'Ma\'am believed in me when I didn\'t believe in myself. She saw potential I didn\'t know I had and helped me become the leader I am today. I wouldn\'t be where I am without her guidance.',
      icon: FiHeart,
    },
    {
      name: 'Lieutenant Commander Lisa Thompson',
      role: 'Former Division Officer',
      message: 'Captain Stone was more than a commanding officer—she was a mentor, a role model, and someone who genuinely cared about our professional and personal growth. Her legacy lives on in all of us.',
      icon: FiMessageCircle,
    },
    {
      name: 'Captain Robert Martinez',
      role: 'Fellow Commanding Officer',
      message: 'Olivia set the standard for what it means to be a naval officer. Her dedication to her sailors, her professionalism, and her unwavering integrity made her a leader we all looked up to.',
      icon: FiStar,
    },
    {
      name: 'Chief Petty Officer Amanda Wilson',
      role: 'Engineering Department',
      message: 'Captain Stone always said that taking care of sailors wasn\'t just part of the job—it was the most important part. She lived by those words every day, and it made all the difference.',
      icon: FiHeart,
    },
  ];

  return (
    <section className="py-20 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-4">
            Officer Impact Wall
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-600 max-w-3xl mx-auto">
            Voices from the sailors, officers, and chiefs whose lives were touched by Captain Stone's leadership and mentorship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-gold-500"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center mr-4">
                  <SafeIcon icon={testimonial.icon} className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg">{testimonial.name}</h3>
                  <p className="text-pearl-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-pearl-700 italic leading-relaxed mb-4">
                "{testimonial.message}"
              </blockquote>
              
              <div className="flex justify-end">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon
                      key={i}
                      icon={FiStar}
                      className="h-4 w-4 text-gold-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-navy-900 rounded-lg p-8"
        >
          <h3 className="text-3xl font-display font-bold text-white text-center mb-8">
            Leadership Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-500 mb-2">1,200+</div>
              <div className="text-pearl-300">Sailors Led</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-500 mb-2">85%</div>
              <div className="text-pearl-300">Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-500 mb-2">150+</div>
              <div className="text-pearl-300">Officers Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-500 mb-2">25</div>
              <div className="text-pearl-300">Promotions Achieved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactWall;