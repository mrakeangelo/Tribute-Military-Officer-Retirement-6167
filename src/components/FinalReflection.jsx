import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiHeart, FiUsers, FiCompass } = FiIcons;

const FinalReflection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reflection" className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            A Letter to the Fleet
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-300 max-w-3xl mx-auto">
            Final reflections from a career dedicated to service, leadership, and the men and women of the United States Navy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Letter Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiFileText} className="h-8 w-8 text-gold-500 mr-3" />
              <h3 className="text-2xl font-display font-bold text-white">
                To My Sailors, Past and Present
              </h3>
            </div>
            
            <div className="space-y-6 text-pearl-200 leading-relaxed">
              <p className="text-lg">
                As I fold the flag one final time, I am filled not with sadness, but with immense pride 
                and gratitude. For 28 years, I have had the honor of serving alongside the finest men 
                and women this nation has to offer.
              </p>
              
              <p>
                To the young sailors just beginning their journey: embrace every challenge as an opportunity 
                to grow. The sea will test you, but it will also teach you lessons that no classroom can provide. 
                Lead with compassion, serve with honor, and never forget that your greatest strength lies 
                in the shipmates beside you.
              </p>
              
              <p>
                To my fellow officers: command is not about rank or authority—it is about responsibility. 
                The responsibility to care for your sailors, to make the hard decisions, and to always 
                put the mission and your people first. Trust in your training, rely on your chiefs, 
                and never stop learning.
              </p>
              
              <p>
                The Navy has given me more than I could ever give in return. It has been my honor to serve, 
                to lead, and to be part of something greater than myself. Fair winds and following seas 
                to all who continue to serve.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-gold-500 font-semibold">
                Very respectfully,<br />
                Captain Olivia M. Stone, USN (Ret.)
              </p>
            </div>
          </motion.div>

          {/* Reflection Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiHeart} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">28</h4>
                <p className="text-pearl-300">Years of Service</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUsers} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">1,200+</h4>
                <p className="text-pearl-300">Sailors Mentored</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCompass} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">15</h4>
                <p className="text-pearl-300">Deployments</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiFileText} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">3</h4>
                <p className="text-pearl-300">Commands</p>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <blockquote className="text-pearl-200 italic text-lg text-center">
                "Leadership is not about being in charge. It is about taking care of those in your charge."
              </blockquote>
              <p className="text-gold-500 text-center mt-4 font-semibold">
                - Captain Stone's Leadership Philosophy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalReflection;