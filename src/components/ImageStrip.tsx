import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageStrip.css';

const images = [
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&q=90&fit=crop',
  'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&h=600&q=90&fit=crop',
  'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&q=90&fit=crop',
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&q=90&fit=crop',
  'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&h=600&q=90&fit=crop',
  'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=600&q=90&fit=crop',
];

const ImageStrip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-strip">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="strip-image"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageStrip;
