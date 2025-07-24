import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight, FiCamera } = FiIcons;

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'ceremonies', name: 'Ceremonies' },
    { id: 'command', name: 'Command' },
    { id: 'awards', name: 'Awards' },
    { id: 'family', name: 'Family' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
      alt: 'Change of Command Ceremony',
      category: 'ceremonies',
      caption: 'Change of Command Ceremony - USS Gravely (DDG-107)',
      location: 'Naval Station Norfolk',
      date: '2012',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
      alt: 'Award Presentation',
      category: 'awards',
      caption: 'Receiving the Meritorious Service Medal',
      location: 'Pentagon',
      date: '2018',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop',
      alt: 'Ship Operations',
      category: 'command',
      caption: 'On the bridge during Mediterranean deployment',
      location: 'USS Gravely',
      date: '2014',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=2070&auto=format&fit=crop',
      alt: 'Family Portrait',
      category: 'family',
      caption: 'Family portrait at Naval Academy graduation',
      location: 'Annapolis, MD',
      date: '1995',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
      alt: 'Promotion Ceremony',
      category: 'ceremonies',
      caption: 'Promotion to Captain',
      location: 'Naval Station Norfolk',
      date: '2010',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
      alt: 'Command Team',
      category: 'command',
      caption: 'With the USS Gravely command team',
      location: 'At sea',
      date: '2013',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-4">
            Career Gallery & Visual Logbook
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-pearl-600 max-w-3xl mx-auto">
            Capturing moments of service, leadership, and dedication throughout a distinguished naval career.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-pearl-100 text-navy-700 hover:bg-pearl-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/70 transition-all duration-300 flex items-center justify-center">
                <SafeIcon 
                  icon={FiCamera} 
                  className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{image.caption}</h3>
                <p className="text-pearl-300 text-sm">{image.location} • {image.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-navy-900/90 text-white p-6 rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">{selectedImage.caption}</h3>
                  <p className="text-pearl-300">{selectedImage.location} • {selectedImage.date}</p>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="h-6 w-6 text-white" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="h-6 w-6 text-white" />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <SafeIcon icon={FiX} className="h-6 w-6 text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;