import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiShield, FiTarget } = FiIcons;

const MedalsAndRank = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const awards = [
    {
      name: 'Defense Meritorious Service Medal',
      icon: FiAward,
      description: 'For exceptionally meritorious service in a duty of great responsibility',
      year: '2020',
    },
    {
      name: 'Meritorious Service Medal (3 awards)',
      icon: FiStar,
      description: 'For outstanding non-combat meritorious achievement or service',
      year: '2015, 2018, 2021',
    },
    {
      name: 'Navy and Marine Corps Commendation Medal (4 awards)',
      icon: FiShield,
      description: 'For sustained acts of heroism or meritorious service',
      year: '2008, 2011, 2014, 2017',
    },
    {
      name: 'Navy and Marine Corps Achievement Medal (2 awards)',
      icon: FiTarget,
      description: 'For professional achievement or leadership',
      year: '2003, 2006',
    },
  ];

  const qualifications = [
    {
      name: 'Surface Warfare Officer',
      badge: 'SWO',
      earned: '1997',
      description: 'Qualified Surface Warfare Officer',
    },
    {
      name: 'Joint Professional Military Education',
      badge: 'JPME',
      earned: '2009',
      description: 'Advanced military education certification',
    },
    {
      name: 'Naval War College',
      badge: 'NWC',
      earned: '2010',
      description: 'Master of Arts in National Security and Strategic Studies',
    },
    {
      name: 'Command at Sea',
      badge: 'CAS',
      earned: '2012',
      description: 'Qualified for command of major surface combatant',
    },
  ];

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM0 0h40v40H0V0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Medals, Rank, and Legacy
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-300 max-w-3xl mx-auto">
            Recognition of distinguished service, leadership excellence, and professional achievement throughout a naval career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards and Decorations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Awards & Decorations
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={award.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{award.name}</h4>
                      <p className="text-pearl-300 mb-2">{award.description}</p>
                      <p className="text-gold-500 font-medium text-sm">{award.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications and Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Qualifications & Badges
            </h3>
            <div className="space-y-6">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gold-500">
                      <span className="text-gold-500 font-bold text-xs">{qual.badge}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{qual.name}</h4>
                      <p className="text-pearl-300 mb-2">{qual.description}</p>
                      <p className="text-gold-500 font-medium text-sm">Earned: {qual.earned}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Rank Progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Rank Progression
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { rank: 'ENS', year: '1995', name: 'Ensign' },
                { rank: 'LTJG', year: '1997', name: 'Lieutenant Junior Grade' },
                { rank: 'LT', year: '1999', name: 'Lieutenant' },
                { rank: 'LCDR', year: '2005', name: 'Lieutenant Commander' },
                { rank: 'CDR', year: '2010', name: 'Commander' },
                { rank: 'CAPT', year: '2016', name: 'Captain' },
              ].map((rank, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-navy-900 font-bold text-sm">{rank.rank}</span>
                  </div>
                  <p className="text-white font-semibold text-sm">{rank.name}</p>
                  <p className="text-pearl-400 text-xs">{rank.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MedalsAndRank;