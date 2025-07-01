import React, {useEffect,useState,useRef} from 'react'
import ServiceSections from './ServiceSections'
import FeaturesSections from './FeaturesSections'
import FooterSections from './FooterSections'
import TechStacks from './TechStacks'
import GameSectionNewSlider from './GameSectionNewSlider'
import PartnersLogos from './PartnersLogos'
import Services from './Services'
import OurPartnerSections from './OurPartnerSections'
import EpicAdventure from './EpicAdventure'
import EcoSystemSection from './EcoSystemSection'
import ScrollingSection from './ScrollingSection'
import NewEcoSystem from './NewEcoSystem'
import OneLineFooter from './OneLinerFooter'


const MainSection = () => {
    
  
    
    return (
        <>
      <main className="main-wrapper">
    
      <ServiceSections />
      <Services  />
      <GameSectionNewSlider  />
      <FeaturesSections  />
      <OurPartnerSections />
      <EpicAdventure/>
      {/* <NewEcoSystem/> */}
      <ScrollingSection />
      <PartnersLogos />
      <FooterSections />
    </main>
        </>
    )
}

export default MainSection