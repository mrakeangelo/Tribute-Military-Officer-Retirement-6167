import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiStar } = FiIcons;

const Footer = () => {
  const quotes = [
    "She led from the bridge — but mentored from the heart.",
    "The sea is quieter now — but her legacy still echoes.",
    "In service to country, in dedication to sailors, in honor of family.",
    "Fair winds and following seas to a remarkable naval officer.",
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <footer className="bg-navy-900 relative overflow-hidden">
      {/* Navy Crest Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <SafeIcon icon={FiAnchor} className="h-96 w-96 text-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quote Carousel */}
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <blockquote className="text-2xl sm:text-3xl font-display text-white italic leading-relaxed mb-6">
            "{quotes[currentQuote]}"
          </blockquote>
          <div className="flex justify-center space-x-2">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentQuote ? 'bg-gold-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Legacy Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-white mb-4">
              A Legacy of Service
            </h3>
            <p className="text-pearl-300 leading-relaxed">
              Captain Olivia M. Stone's 28-year naval career exemplifies the highest 
              traditions of naval service, leadership, and dedication to country.
            </p>
          </div>

          {/* Service Stats */}
          <div className="text-center">
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Service Summary
            </h3>
            <div className="space-y-2 text-pearl-300">
              <p>1995 - 2023</p>
              <p>28 Years of Service</p>
              <p>1,200+ Sailors Led</p>
              <p>15 Deployments</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-display font-bold text-white mb-4">
              Honor & Remembrance
            </h3>
            <p className="text-pearl-300 leading-relaxed">
              This tribute website honors Captain Stone's distinguished service 
              and the countless lives she touched throughout her naval career.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <SafeIcon icon={FiAnchor} className="h-6 w-6 text-gold-500" />
            <span className="text-white font-display font-semibold">
              CAPT Olivia M. Stone, USN (Ret.)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-pearl-300">
            <div className="flex items-center space-x-1">
              <span>Built with</span>
              <SafeIcon icon={FiHeart} className="h-4 w-4 text-gold-500" />
              <span>by Mrake Agency</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <SafeIcon
                  key={i}
                  icon={FiStar}
                  className="h-4 w-4 text-gold-500"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-pearl-400 text-sm italic">
            "Semper Fortis" - Always Courageous
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;