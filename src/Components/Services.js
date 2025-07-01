import React from 'react'
import { Hero_bg1, Hero_icon_1, Hero_bg2, Hero_bg3, Hero_bgMobb,Morraverse, Comics, Escort, right_arrow_icon } from '../Imports/ImportImages'
import TechStacks from './TechStacks'


const Services = () => {
  return (
    <section className='services section_100vh' id='services'>
    <div className="container z-2">
        <div>
            <h2 className="h_84 section-heading" style={{fontSize: '38px'}}>Services</h2>
            <div className="p_21 text_neutral-500 text_lh-1-5 text-white">Diverse Worlds, One Ecosystem: Morra Games Unleashed</div>
        </div>
        <div className="spacer_40"></div>
        <div className="bento-grid_12">
            <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac317-0c8ce33a" className="grid_1 mobile_2 full-height">
                <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac322-0c8ce33a" className="bento_item">
                    <div className="bento-inner_vertical-24">
                        <div className="text_maxch-15 mobile-100">
                            <h2 className="p_16 text_neutral-500 service-para">Immerse yourself in the world of <br /> gaming, from epic adventures to<br /> competitive play.</h2>
                        </div>
                        <div className="text_align-right">
                            <div className="h_40 service-icon-title mobile_vw font-family-unbound text-icon1">
                                <img src={Hero_icon_1} alt="gaming" style={{ height: '35px',width:'auto'}} /><br />
                                <div className="spacer_20 hide_mobile-l"></div>
                                Gaming
                            </div>
                        </div>
                    </div>
                </div>
                <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac322-0c8ce33a" className="bento_item">
                    <div className="bento-inner_vertical-24">
                
                        <h2 className="p_16 service-para text_neutral-500">Step into augmented realities where the digital and physical worlds converge.</h2>
                        <div className="text_align-right _100">
                            <div className="h_56 service-icon-title mobile_vw">
                                <img src={Morraverse} alt="gaming" style={{ width: '50px' }} /><br />
                                <div className="spacer_20 hide_mobile-l"></div>
                                <span count="transaction-count" className='text-icon2 font-family-unbound' api-data="transaction-count">
                                    Morraverse<br />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bento_curtain"></div>
                </div>
            </div>
            <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac329-0c8ce33a" className="grid_1">
                <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac32b-0c8ce33a" className="bento_item is--validator full-height">
                    <div className="bento-inner_vertical-24 comics-box">
                        <h2 className="p_16 text_neutral-500 service-para">Journey into captivating stories and interactive storytelling brought to life through comics.</h2>
                        <div className="spacer_50 hide_mobile-l"></div>
                        <div className="text_align-right _100 comics-bottom">
                            <div count="static" className="h_56 text-icon3 service-icon-title font-family-unbound">Comics</div>
                            <img src={Comics} alt="gaming" style={{ width: '50px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac334-0c8ce33a" className="bento_item carbon-free">
                <div className="f_vertical-left relative">
                    <img src={Escort} alt="gaming" style={{ width: '50px', marginBottom: '16px' }} />
                    <div className="h_40 text-icon4 font-family-unbound service-icon-title">Esport</div>
                    <div className="spacer_80"></div>

                    <h2 className="p_16 text_neutral-500 service-para">Gear up for the future of competitive gaming; we're building a community for all.</h2>

                </div>
                <div className="bento_curtain"></div>
            </div>
        </div>
    </div>
    <TechStacks/>

</section>
  )
}

export default Services