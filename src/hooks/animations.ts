import { useEffect, useCallback, useState } from 'react';

export const useRevealOnScroll = (threshold = 0.15): void => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold });
    const elements = document.querySelectorAll('.reveal, .reveal-grid');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
};

export const useFloatingAnimation = (elementId: string, duration = 6000) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.animate(
        [
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-8px)' },
          { transform: 'translateY(0px)' }
        ],
        {
          duration,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    }
  }, [elementId, duration]);
};

export const useImageSlider = (images: string[], interval = 6000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setSlide = useCallback((i: number) => {
    setCurrentSlide((i + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => setSlide(currentSlide + 1), interval);
    return () => clearInterval(timer);
  }, [currentSlide, interval, setSlide]);

  const nextSlide = useCallback(() => setSlide(currentSlide + 1), [currentSlide, setSlide]);
  const prevSlide = useCallback(() => setSlide(currentSlide - 1), [currentSlide, setSlide]);

  return { currentSlide, nextSlide, prevSlide };
};
