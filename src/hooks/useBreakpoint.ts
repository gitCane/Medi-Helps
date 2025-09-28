import { useState, useEffect } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

const breakpoints = {
  mobile: 0,
  tablet: 480, // --breakpoint-sm
  laptop: 768, // --breakpoint-md
  desktop: 1024, // --breakpoint-lg
  xl: 1280, // --breakpoint-xl
};

export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= breakpoints.desktop) {
        setCurrentBreakpoint('desktop');
      } else if (width >= breakpoints.laptop) {
        setCurrentBreakpoint('laptop');
      } else if (width >= breakpoints.tablet) {
        setCurrentBreakpoint('tablet');
      } else {
        setCurrentBreakpoint('mobile');
      }
    };

    // Set initial breakpoint
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const isLaptop = currentBreakpoint === 'laptop';
  const isDesktop = currentBreakpoint === 'desktop';

  return {
    currentBreakpoint,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    // Helper methods for common checks
    isMobileOrTablet: isMobile || isTablet,
    isLaptopOrDesktop: isLaptop || isDesktop,
  };
};