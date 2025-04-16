import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has dark mode preference
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', (!isDarkMode).toString());
      document.documentElement.classList.toggle('dark');
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;