import { useState, useEffect } from "react";

const useNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
      console.log("Menu toggled");  
      setIsOpen(!isOpen);
    }

    useEffect(() => {
      const handleScroll = () => {
        const heroSection = document.getElementById('hero');
        const header = document.getElementById('header');
        if (heroSection && header) {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          setIsFixed(heroBottom <= 0);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return{
        isOpen,
        toggleMenu,
        isFixed,
    }
        
}

export default useNavbar;