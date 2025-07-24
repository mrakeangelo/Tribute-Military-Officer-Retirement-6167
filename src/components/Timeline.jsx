import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiStar, FiAward, FiShield, FiCompass } = FiIcons;

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: '1995',
      title: 'Naval Academy Graduation',
      subtitle: 'Commissioned as Ensign',
      description: 'Graduated with distinction from the United States Naval Academy, commissioned as an Ensign in the Surface Warfare community.',
      icon: FiCompass,
      color: 'gold',
    },
    {
      year: '1997',
      title: 'Division Officer',
      subtitle: 'USS Arleigh Burke (DDG-51)',
      description: 'Served as Operations Division Officer, earning Surface Warfare Officer qualification and leading a team of 45 sailors.',
      icon: FiAnchor,
      color: 'navy',
    },
    {
      year: '2001',
      title: 'Department Head',
      subtitle: 'USS Cole (DDG-67)',
      description: 'Operations Department Head during challenging deployment, demonstrating exceptional leadership during crisis response.',
      icon: FiShield,
      color: 'gold',
    },
    {
      year: '2007',
      title: 'Executive Officer',
      subtitle: 'USS Ramage (DDG-61)',
      description: 'Served as Executive Officer, preparing for command while mentoring junior officers and managing ship operations.',
      icon: FiStar,
      color: 'navy',
    },
    {
      year: '2012',
      title: 'Commanding Officer',
      subtitle: 'USS Gravely (DDG-107)',
      description: 'Commanded 300+ sailors through multiple deployments, earning the Battle Efficiency Award and Meritorious Unit Commendation.',
      icon: FiAward,
      color: 'gold',
    },
    {
      year: '2018',
      title: 'Staff Assignment',
      subtitle: 'Pentagon - OPNAV N3/N5',
      description: 'Served as Director of Surface Warfare Operations, shaping fleet strategy and policy at the highest levels.',
      icon: FiCompass,
      color: 'navy',
    },
    {
      year: '2023',
      title: 'Retirement',
      subtitle: 'Naval Station Norfolk',
      description: 'Retired after 28 years of distinguished service, leaving behind a legacy of excellence and mentorship.',
      icon: FiStar,
      color: 'gold',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-4">
            Command Career Timeline
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-600 max-w-3xl mx-auto">
            A distinguished career spanning nearly three decades of naval service, leadership, and dedication to the fleet.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-200 hidden lg:block"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Content */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      item.color === 'gold' ? 'bg-gold-500' : 'bg-navy-700'
                    }`}>
                      <SafeIcon icon={item.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="text-gold-600 font-semibold">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-pearl-700 leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Timeline Year Badge */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gold-500 rounded-full items-center justify-center border-4 border-white shadow-lg">
                <span className="text-white font-bold text-sm">{item.year}</span>
              </div>

              {/* Mobile Year Badge */}
              <div className="lg:hidden absolute -left-2 top-6 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-white font-bold text-xs">{item.year.slice(-2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;