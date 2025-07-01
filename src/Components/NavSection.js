import React, { useState,useEffect } from 'react'
import { logo,Newlogo, slider_icon,Cancel,NewlogoM } from '../Imports/ImportImages'
import { Link } from 'react-router-dom';

const NavSection = (props) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the scroll position is greater than a certain threshold (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <nav className={`nav ${isHeaderActive ? 'active' : ''}`}>
            <div click="off" className="nav-overlay" style={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'flex' : 'none' }}></div>

            <div className="nav-menu_backdrop">
                <Link to='/'className="nav_logo-link w-inline-block w--current">
                    <img src={Newlogo} className='morra-logoweb' loading="eager" alt="morra-games" style={{borderRadius:'0'}}/>
                    <img src={NewlogoM} className='morra-logomob' loading="eager" alt="morra-games" style={{borderRadius:'0'}}/>
                </Link>
                {/* <div className="nav_link-wrap" > */}
                <div className={`nav_link-wrap ${isOpen ? 'active' : null}`}>
                    <div>
                        <img src={Cancel} onClick={toggleMenu} className='close-navigation-box' alt='close'/>
                    </div>
                    <div className="nav_link-wrap_center">
                        <div data-w-id="a3154880-70cd-30fb-62fc-6b7dd3a49d89" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <Link to='/' className="nav-llnk text-white">
                                    <div>Home</div>
                                </Link>
                            </div>
                        </div>
                       
                        
                        <div data-w-id="d4a768de-1b55-7610-cebd-14c0127a8cd3" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                {/* <Link to='/contact' className="nav-llnk text-white">
                                    <div>Contact</div>
                                </Link> */}
                            </div>
                        </div>
                        <div data-w-id="f997643b-91a8-ddf8-1fe6-9295ab5ad346" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <Link to='https://blog.morragames.com' className="nav-llnk text-white">
                                    <div>Blog <svg style={{marginLeft:'5px'}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6667 2.27333L3.8 9.14C3.73973 9.20933 3.66578 9.26545 3.5828 9.30485C3.49982 9.34425 3.40958 9.36608 3.31777 9.36896C3.22595 9.37184 3.13453 9.35571 3.04924 9.32159C2.96394 9.28746 2.88663 9.23608 2.82213 9.17067C2.75764 9.10525 2.70736 9.02721 2.67445 8.94145C2.64154 8.85568 2.62671 8.76404 2.63089 8.67227C2.63507 8.5805 2.65818 8.49059 2.69875 8.40817C2.73932 8.32576 2.79649 8.25261 2.86667 8.19333L9.72 1.33333H7.33333C7.15652 1.33333 6.98695 1.2631 6.86193 1.13807C6.7369 1.01305 6.66667 0.843478 6.66667 0.666667C6.66667 0.489856 6.7369 0.320286 6.86193 0.195262C6.98695 0.0702379 7.15652 0 7.33333 0H11.3333C11.5101 0 11.6797 0.0702379 11.8047 0.195262C11.9298 0.320286 12 0.489856 12 0.666667V4.66667C12 4.84348 11.9298 5.01305 11.8047 5.13807C11.6797 5.2631 11.5101 5.33333 11.3333 5.33333C11.1565 5.33333 10.987 5.2631 10.8619 5.13807C10.7369 5.01305 10.6667 4.84348 10.6667 4.66667V2.27333ZM10.6667 7.33333C10.6667 7.15652 10.7369 6.98695 10.8619 6.86193C10.987 6.7369 11.1565 6.66667 11.3333 6.66667C11.5101 6.66667 11.6797 6.7369 11.8047 6.86193C11.9298 6.98695 12 7.15652 12 7.33333V10.6667C12 11.0203 11.8595 11.3594 11.6095 11.6095C11.3594 11.8595 11.0203 12 10.6667 12H1.33333C0.979711 12 0.640573 11.8595 0.390524 11.6095C0.140476 11.3594 0 11.0203 0 10.6667V1.33333C0 0.6 0.6 0 1.33333 0H4.66667C4.84348 0 5.01305 0.070238 5.13807 0.195262C5.2631 0.320287 5.33333 0.489856 5.33333 0.666667C5.33333 0.843478 5.2631 1.01305 5.13807 1.13807C5.01305 1.2631 4.84348 1.33333 4.66667 1.33333H1.33333V10.6667H10.6667V7.33333Z" fill="white"/>
                                            </svg>
                                        </div>
                                </Link>
                            </div>
                        </div>
                        <div data-w-id="f48ab5da-4350-7b50-2de3-258870a7d043" className="nav-link_drop-wrap">
                            <div className="drop_trigger logins-areaa">
                                <Link to='https://docs.morragames.com' className="nav-llnk text-white" style={{borderBottom:'0'}}>
                                    <div className='litepaper-after'>Litepaper 

                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* <div className='logins-areaa'>
                            <Link to='' >
                            Marketplace
                            </Link>
                            <Link to='' >
                            Login
                            </Link>
                        </div> */}
                        {/* <div data-w-id="f1e9dc3c-c342-6fab-59d5-cd53f0afecd5" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <div className="nav-llnk">
                                    <img src={slider_icon} loading="eager" alt="morra-games" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div role="Navigation" aria-label="Mobile Navigation" className='nav-menu_button' onClick={toggleMenu}>
                    <div
                        data-is-ix2-target="1"
                        className="nav-menu_lottie"
                        data-w-id="fe9aaf11-fc83-e8d2-99e4-79d077c1cfad"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/63c67e1faff95c11945da274/63c67e1faff95c0ab35da28c_lottieflow-menu-nav-09-000000-easey.json"
                        data-loop="0"
                        data-direction="1"
                        data-autoplay="0"
                        data-renderer="svg"
                        data-default-duration="2.5"
                        data-duration="0"
                        data-ix2-initial-state="0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 850 850" width="850" height="850" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
                            <defs>
                                <clipPath id="__lottie_element_2">
                                    <rect width="850" height="850" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#__lottie_element_2)">
                                <g transform="matrix(1,0,0,1,425,425)" opacity="1" style={{ display: 'block' }}>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="60" d=" M324,-250 C324,-250 3,-250 3,-250 C3,-250 -324,-250 -324,-250"></path>
                                    </g>
                                </g>
                                <g transform="matrix(1,0,0,1,425,425)" opacity="1" style={{ display: 'block' }}>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="60" d=" M-324,250 C-324,250 3,250 3,250 C3,250 324,250 324,250"></path>
                                    </g>
                                </g>
                                <g transform="matrix(1,0,0,1,425,425)" opacity="1" style={{ display: 'block' }}>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="60" d=" M-324,0 C-324,0 324,0 324,0"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavSection