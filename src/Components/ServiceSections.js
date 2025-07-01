import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroSlidesData } from '../resources/localData'
import useWindowDimensions from './WindowDimensions'
import karnakPopVid from '../assets/img/Temple-of-Egypt.webm'

const ServiceSections = (props) => {
    const [activeItem, setActiveItem] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const {width} = useWindowDimensions();

    useEffect(() => {
        setFadeIn(true);
    }, [activeItem]);

    const handleItemClick = async(index) => {
        if(activeItem !== index){
        setFadeIn(false);
        setActiveItem(index);
        }
    };

 
    // const backgroundImages = [
    //     {web:Hero_bg3,mob:Hero_bg3},
    //     {web:Hero_bg3,mob:Hero_bg3},
    //     {web:Hero_bg3,mob:Hero_bg3},
    //     Hero_bg1, Hero_bg2, Hero_bg3,Hero_bgMobb
    // ];
    return (
        <>
            <section className="inner-wrapper bg_dark section_100vh" id='home' >
                <div className="hero_bg-gradient"></div>
                <div>

                    <div style={{height:'100vh',overflow:'hidden',backgroundColor: '#000'}} className="container_bg z-0 banner-homee">
                        
                            <> 
                            {/* <img src={Hero_bg3} alt="" sizes="(max-width: 767px) 100vw, 62vw" className='hero_bg-image' /> */}
                            <video video loop autoplay='' muted>
                                <source src={karnakPopVid} type="video/mp4" />
                            </video>
                            </>
                        

                    </div>
                    <div className="container z-2 h-small-mobb" style={{ position: 'relative',height: '100vh',display:'flex',flexDirection : 'column', justifyContent:'center' }}>
                        {/* <div className='swiper-silder-menu f_vertical-center_t-center '>
                            {['Ownership', 'Innovation', 'Sustainability'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`menu-item ${index === activeItem ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div> */}
                        <div className="f_vertical-center_t-center">
                            <div className="spacer_200 mobile_300"></div>
                            <div className='swiper-silder-menu f_vertical-center_t-center '>
                            {['Ownership', 'Innovation', 'Sustainability'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`menu-item ${index === activeItem ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div> 
                       
                            <Link to='/' className="btn outline-green w-inline-block">
                                <div color-mode="light" data-w-id="122a7b7b-7a76-5b49-a473-0c09ae6c842b" className="btn_bg bg_outline"></div>
                               
                                <div color-mode="light" className="btn_outline-wrap">
                                    <div className="btn_new">New</div>
                                    <div className="p_14 text_inline">Diverse Worlds, One Ecosystem</div>
                                </div>
                            </Link>
                           
                           
                            <div className="spacer_12"></div>
                            <h1 className="h_64 page-title">{HeroSlidesData[activeItem].title}</h1>
                            <div className="spacer_24"></div>
                            <div className="text_maxch-85">
                                <p className="page-paragraph p_21 text_neutral-500 text-white">{HeroSlidesData[activeItem].desc} </p>
                            </div>
                           
                            <div className="spacer_40"></div>
                            <link rel="prefetch" href="/ecosystem" />
                            {/* <Link to='/' className="btn teal w-inline-block">
                                <div color-mode="light" className="btn_bg bg_dark-teal"></div>
                                <div className="p_16 text-white display"><span>Discover More</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' />
                                </div>

                            </Link> */}
                            <link rel="prefetch" href="/builders/start-building" />
                            <div className="spacer_100"></div>
                        </div>
                        <div className="nav-transition"></div>
                    </div>
                </div>
                <div>
                            <div class="arrow-down-homepagemain">
                                <p class="click-here" onClick={props.onClick}>Click Here</p>
                                    <div class="arrow"></div>
                                </div>
                            </div>
            </section>

        </>

    )
}

export default ServiceSections
