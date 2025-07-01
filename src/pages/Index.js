import React, { useState, useEffect } from 'react';
import NavSection from '../Components/NavSection';
import { debounce } from 'lodash';


// components
import ServiceSections from '../Components/ServiceSections';
import FeaturesSections from '../Components/FeaturesSections';
import FooterSections from '../Components/FooterSections';
import TechStacks from '../Components/TechStacks';
import GameSectionNewSlider from '../Components/GameSectionNewSlider';
import PartnersLogos from '../Components/PartnersLogos';
import Services from '../Components/Services';
import OurPartnerSections from '../Components/OurPartnerSections';
import EpicAdventure from '../Components/EpicAdventure';
// import EcoSystemSection from '../Components/EcoSystemSection';
import ScrollingSection from '../Components/ScrollingSection';
// import NewEcoSystem from '../Components/NewEcoSystem';
import OneLineFooter from '../Components/OneLinerFooter';
import activeNavImg from '../assets/img/showActive.png'
import disableNavImg from '../assets/img/nav_df.png'

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [hoveredDot, setHoveredDot] = useState(null);

  const handleDotClick = (index) => {
    setCurrentSection(index);
  };

  const sections = [
    { component: <ServiceSections onClick={()=>handleDotClick(1)} key="ServiceSections" />, name: "Home" },
    { component: <Services key="Services" />, name: "Services" },
    { component: <GameSectionNewSlider key="GameSectionNewSlider" />, name: "Our Products" },
    { component: <FeaturesSections key="FeaturesSections" />, name: "Features" },
    { component: <OurPartnerSections key="OurPartnerSections" />, name: "Our Tech Stacks" },
    { component: <EpicAdventure key="EpicAdventure" />, name: "Marketplace" },
    // { component: <NewEcoSystem key="NewEcoSystem" />, name: "Morra Token" },
    { component: <ScrollingSection key="ScrollingSection" />, name: "Gallery" },
    { component: <PartnersLogos key="PartnersLogos" />, name: "Our Partners" },
    { component: <FooterSections key="FooterSections" />, name: "Newsletter" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  
    const handleScroll = debounce((event) => {
      if (scrolling) return;
  
      setScrolling(true);
  
      let nextSection = currentSection;
      let direction = scrollDirection;
  
      // Determine the scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        nextSection = Math.min(currentSection + 1, sections.length - 1);
        direction = 'down';
      } else {
        // Scrolling up
        nextSection = Math.max(currentSection - 1, 0);
        direction = 'up';
      }
  
      setScrollDirection(direction);
      setCurrentSection(nextSection);
  
      setTimeout(() => {
        setScrolling(false);
      }, 800); // Adjust timeout to match the scroll behavior duration
    }, 300); // Debounce scroll events, adjust timing as needed
  
    if (window.innerWidth > 576) {
      window.addEventListener('wheel', handleScroll);
    }
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, scrolling, scrollDirection, sections.length]);

  const handleScroll = debounce((event) => {
    if (scrolling || Math.abs(event.deltaY) < 50) return; // Ignore small deltaY values
  
    setScrolling(true);
  
    let nextSection = currentSection;
    let direction = scrollDirection;
  
    if (event.deltaY > 0) {
      nextSection = Math.min(currentSection + 1, sections.length - 1);
      direction = 'down';
    } else {
      nextSection = Math.max(currentSection - 1, 0);
      direction = 'up';
    }
  
    setScrollDirection(direction);
    setCurrentSection(nextSection);
  
    setTimeout(() => {
      setScrolling(false);
    }, 800);
  }, 300); // Debounce time

 

  return (
    <div className="page-wrap" id="homepage">
      {currentSection === 0 && <NavSection active />}

      <div style={{ position: 'fixed',display:'flex', flexDirection : 'column', justifyContent: 'center', alignItems : 'center', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: 1000, opacity: currentSection > 0 ? 1 : 0, visibility: currentSection > 0 ? 'visible' : 'hidden', transition: '0.8s ease-in-out' }}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="dot"
            style={{
              width: index === currentSection ? '12px' : '6px',
              height: index === currentSection ? '12px' : '6px',
              borderRadius: '50%',
              background: index === currentSection ? 'transparent linear-gradient(90deg, #2ad9a3 0%, #7573e2 100%)' : 'white',
              margin: '11px 0',
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => handleDotClick(index)}
            onMouseEnter={() => setHoveredDot(index)}
            onMouseLeave={() => setHoveredDot(null)}
          >
           
            {hoveredDot === index && (
              <div className="tooltip">
                {section.name}
                <div className="arrow" />
              </div>
            )}
          </div>
        ))}
        
      </div>


      <div className="sections-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`sectionfor100vh ${index === currentSection ? 'active' : ''} ${scrollDirection}`}
            style={{
              transform: index === currentSection ? 'translateY(0)' :
                        (index === currentSection + 1 && scrollDirection === 'down') ? 'translateY(100%)' :
                        (index === currentSection - 1 && scrollDirection === 'up') ? 'translateY(-100%)' : 'translateY(0)',
              zIndex: index === currentSection ? 1 : (index === currentSection + 1 || index === currentSection - 1) ? 2 : 0,
              opacity: index === currentSection ? 1 : 0,
              visibility: index === currentSection ? 'visible' : 'hidden',
              height: '100vh',
              overflow: 'hidden',
              position: index === currentSection ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#000000',
              transition: 'transform 0.8s ease, opacity 0.8s ease, visibility 0.8s ease'
            }}
          >
            {section.component}
          </div>
        ))}
      </div>

      <style jsx>{`
        .sections-container {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .section {
          width: 100%;
          height: 100%;
        }

        .tooltip {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: black;
          color: white;
          padding: 5px 10px;
          border-radius: 3px;
          white-space: nowrap;
          z-index: 1000;
          font-size: 12px;
        }

        .tooltip .arrow {
          position: absolute;
          top: 50%;
          left: -5px;
          margin-top: -5px;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid black;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
      `}</style>
    </div>
  );
};

export default Index;