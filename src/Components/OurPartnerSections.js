import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/partner-section.css';
import useWindowDimensions from './WindowDimensions';
import { AndroidL, AwsIconn, ImmutableL, Infrastructuree, IosL, PhotonIconn, UnityIconn, Unreal, Web3Iconn } from '../Imports/ImportImages';

const OurPartnerSections = () => {
    const { width } = useWindowDimensions();

    return (
        <section className="section_backers-hero our-partnerss custom-partner-section section_100vh" id='techstack'>
            <div className="container z-2">
                <div className="padding-global">
                    <div className="padding-section-large">
                        <div className="container-large">
                            <div className="tag_wrapper">
                                <aside className="tag-dot is-yellow"></aside>
                                <div className="text-size-hero text-color-transparent-white partner-subtitle">Our Tech Stacks</div>
                            </div>
                            <div className={`_12-columns vertical-align-center ${width < 769 ? "flex-direction-column" : ""}`}>
                                <div className={`column _5-col-desktop content-box tablet-12-col ${width < 769 ? "manage-width display flex-direction-column" : ""}`}>
                                    <div className="max-width-medium">
                                        <h1 className="h_64 section-heading">Building the <br /> future of web3<br /> entertainment</h1>
                                    </div>
                                    <div className="_12-columns">
                                        <div className="column tablet-4-col"></div>
                                        <div className="column _12-col-desktop tablet-8-col">
                                            <div className="max-width-medium">
                                                <p className="text-size-main text-color-white lines-up section-para" text-split="" lines-up="" style={{ opacity: 1 }}>We're not just building games – we're shaping experiences. By embracing cutting-edge technologies from industry leaders, we're creating the future of web3 entertainment, one innovation at a time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="visible-tablet-down spacer-5-5 spacer-mobile-3-5"></div>
                                </div>
                                <div className="column _7-col-desktop tablet-12-col">
                                    <div className="backers_mask">
                                        <div className="backers_wrapper">
                                            <div className="backers-line left-to-right">
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={Unreal} loading="lazy" alt="Unreal Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={AndroidL} loading="lazy" alt="Android Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={AwsIconn} loading="lazy" alt="AWS Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={PhotonIconn} loading="lazy" alt="Photon Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={Web3Iconn} loading="lazy" alt="Web3 Logo" className="backer-logo" />
                                                </Link>
                                              
                                            </div>
                                            <div className="backers-line right-to-left">
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={IosL} loading="lazy" alt="iOS Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={ImmutableL} loading="lazy" alt="Immutable Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={Infrastructuree} loading="lazy" alt="Infrastructure Logo" className="backer-logo" />
                                                </Link>
                                                <Link to='/' className="backer w-inline-block">
                                                    <img src={UnityIconn} loading="lazy" alt="Unity Logo" className="backer-logo" />
                                                </Link>
                                               
                                             
                                            </div>
                                            <div className="backer-gradient is-right pointer-events-off hide-tablet"></div>
                                        </div>
                                        <div className="backer-gradient is-right pointer-events-off visible-tablet-down"></div>
                                        <div className="backer-gradient pointer-events-off"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartnerSections;
