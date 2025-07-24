import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiSend, FiUser, FiMail, FiHeart } = FiIcons;

const Guestbook = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rank: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const existingMessages = [
    {
      name: 'Admiral Sarah Mitchell',
      rank: 'U.S. Navy (Ret.)',
      message: 'Olivia, your leadership and dedication have been an inspiration to all of us. Fair winds and following seas in your retirement.',
      date: '2023-10-15',
    },
    {
      name: 'Captain Robert Johnson',
      rank: 'U.S. Navy',
      message: 'Thank you for setting the standard for excellence. Your legacy will continue to inspire future generations of naval officers.',
      date: '2023-10-14',
    },
    {
      name: 'Master Chief Patricia Davis',
      rank: 'U.S. Navy (Ret.)',
      message: 'Ma\'am, it was an honor to serve under your command. You truly embodied what it means to be a leader of sailors.',
      date: '2023-10-13',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', rank: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="guestbook" className="py-20 bg-pearl-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-4">
            Guestbook & Farewell Wall
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-600 max-w-3xl mx-auto">
            Share your memories, sea stories, and farewell messages for Captain Stone. Your words will become part of her lasting legacy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Guestbook Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <SafeIcon icon={FiMessageCircle} className="h-8 w-8 text-gold-500 mr-3" />
              <h3 className="text-2xl font-display font-bold text-navy-900">
                Leave a Message
              </h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <SafeIcon icon={FiHeart} className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-navy-900 mb-2">
                  Thank you for your message!
                </h4>
                <p className="text-pearl-600">
                  Your tribute has been submitted and will be reviewed before being added to the wall.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiUser} className="absolute left-3 top-3 h-5 w-5 text-pearl-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-pearl-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-3 top-3 h-5 w-5 text-pearl-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-pearl-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="rank" className="block text-sm font-medium text-navy-900 mb-2">
                    Rank/Position
                  </label>
                  <input
                    type="text"
                    id="rank"
                    name="rank"
                    value={formData.rank}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pearl-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="e.g., Lieutenant Commander, USN or Civilian"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-pearl-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                    placeholder="Share your memories, sea stories, or farewell message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-navy-900 font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="h-5 w-5 mr-2" />
                  Submit Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Existing Messages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-navy-900 mb-6">
              Recent Messages
            </h3>
            
            {existingMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gold-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 text-lg">{message.name}</h4>
                    <p className="text-gold-600 text-sm">{message.rank}</p>
                  </div>
                  <span className="text-pearl-500 text-sm">{message.date}</span>
                </div>
                <blockquote className="text-pearl-700 italic leading-relaxed">
                  "{message.message}"
                </blockquote>
              </motion.div>
            ))}

            <div className="bg-navy-900 rounded-lg p-6 text-center">
              <SafeIcon icon={FiMessageCircle} className="h-12 w-12 text-gold-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Join the Conversation
              </h4>
              <p className="text-pearl-300">
                Your message will be reviewed and added to this wall of tributes for Captain Stone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;