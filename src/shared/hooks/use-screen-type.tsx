import { useState, useCallback, useLayoutEffect, useEffect } from 'react';

export const useScreenType = () => {
  const [isPhone, setPhone] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isLaptop, setLaptop] = useState(true);
  const [isDesktop, setDesktop] = useState(true);
  const handleWindowResize = useCallback(() => {
    setPhone(window.innerWidth >= 370);
    setTablet(window.innerWidth >= 768);
    setLaptop(window.innerWidth > 1280);
    setDesktop(window.innerWidth > 1440);
  }, []);
  useLayoutEffect(() => handleWindowResize());
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);
  return { isTablet, isLaptop, isDesktop, isPhone };
};
