import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUsers, FiCompass, FiAward, FiAnchor, FiGlobe } = FiIcons;

const LegacyMetrics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    {
      icon: FiClock,
      number: '28',
      label: 'Years of Service',
      description: 'Nearly three decades of dedicated naval service',
      color: 'gold',
    },
    {
      icon: FiUsers,
      number: '1,200+',
      label: 'Sailors Led',
      description: 'Lives touched and careers shaped through leadership',
      color: 'navy',
    },
    {
      icon: FiCompass,
      number: '15',
      label: 'Deployments',
      description: 'Missions completed across the globe',
      color: 'gold',
    },
    {
      icon: FiAward,
      number: '24',
      label: 'Awards & Medals',
      description: 'Recognition for exceptional service and leadership',
      color: 'navy',
    },
    {
      icon: FiAnchor,
      number: '3',
      label: 'Commands',
      description: 'Ships and units led with distinction',
      color: 'gold',
    },
    {
      icon: FiGlobe,
      number: '45',
      label: 'Ports Visited',
      description: 'Countries and territories served in',
      color: 'navy',
    },
  ];

  const achievements = [
    {
      title: 'Battle Efficiency Award',
      year: '2013',
      description: 'USS Gravely recognized as most efficient ship in the fleet',
    },
    {
      title: 'Meritorious Unit Commendation',
      year: '2014',
      description: 'Exceptional performance during Mediterranean deployment',
    },
    {
      title: 'Surface Warfare Excellence Award',
      year: '2015',
      description: 'Outstanding leadership in surface warfare operations',
    },
    {
      title: 'Navy League Award',
      year: '2019',
      description: 'Recognition for contributions to Navy-civilian relations',
    },
  ];

  return (
    <section id="legacy" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Legacy Metrics
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-300 max-w-3xl mx-auto">
            A quantitative look at the impact and achievements of a distinguished naval career.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                metric.color === 'gold' ? 'bg-gold-500' : 'bg-navy-700'
              }`}>
                <SafeIcon icon={metric.icon} className="h-8 w-8 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
                className="text-4xl font-bold text-gold-500 mb-2"
              >
                {metric.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{metric.label}</h3>
              <p className="text-pearl-300 text-sm leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Notable Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
        >
          <h3 className="text-3xl font-display font-bold text-white text-center mb-8">
            Notable Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 rounded-lg p-6 border border-white/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-white flex-1">{achievement.title}</h4>
                  <span className="text-gold-500 font-bold text-sm bg-gold-500/20 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-pearl-300 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legacy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-3xl font-display text-white italic leading-relaxed mb-6">
              "Success is not measured by the heights we reach, but by the number of people we lift up along the way."
            </blockquote>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-4"></div>
            <p className="text-pearl-300 font-semibold">
              Captain Olivia M. Stone's Leadership Philosophy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyMetrics;