import {React,useRef,useState} from 'react'
import { Discord, NewsletterCharacterMob1,NewsletterCharacterMob2, Telegramf, Twitch, Twitterf, Youtube, logo,Newlogo, newsletterCharacter1,newsletterCharacter2 } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'
import OneLineFooter from './OneLinerFooter'
import emailjs from '@emailjs/browser';

const FooterSections = () => {
    const form = useRef();
    const [submitButton , setSubmitButton] = useState('Sign Up');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_uxvv6o5', 'template_o3uwd6k', form.current, {
            publicKey: 'mKlmggssjTCLH0X6Y',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setSubmitButton('Subscribed')
            },
            (error) => {
            console.log('FAILED...', error.text);
            setSubmitButton('Failed')
            },
        );
    };
    return (
        <>
            <div className="inner-wrapper bg_dark  section_100vh homefooter">
                <div className="section z-1 newsletter-area stayupdate-section-height ">
                    {/* <div className='left-img'>
                        <img src={newsletterCharacter2} alt='image-1'/>
                        <img src={NewsletterCharacterMob1} alt='image-1'/>
                    </div> */}
                    <div className="container z-2">
                        {/* <div className="spacer_100"></div> */}
                        <div className="spacer_100 show_mobile-l"></div>
                        <div className="newsletter_form-block w-form">
                            <div className="text_maxch-65">
                                <h4 words-slide-from-right="" text-split="" className="h_40">Stay in-the-know and never miss an update</h4>
                            </div>
                            <div className="spacer_24"></div>
                            <form ref={form} onSubmit={sendEmail} id="" name="" className="newsletter_form">
                                <div className="newsletter_input-wrap">
                                    <input name="user_name" className="form_input w-input" maxLength="256" name="Email" placeholder="Enter a valid email address" type="email" id="Email" required="" />
                                    <button className='signn-btn'>
                                    {submitButton}
                                    </button>
                                </div>
                            </form>
                            <div className="success w-form-done">
                                <div className="h2">
                                    <span className="text_tiel">Thank you!</span>
                                    Your submission has been received!
                                </div>
                            </div>
                            <div className="error w-form-fail">
                                <div className="p_xs text_grey">Oops! Something went wrong while submitting the form.</div>
                            </div>
                            <div className="text_maxch-48">
                                <div className="spacer_24"></div>
                                <p text-split="" words-slide-from-right="" className="p_14 text_neutral-500">Stay connected with the latest updates, exclusive offers, and insider insights by subscribing to our newsletter!</p>
                            </div>
                        </div>
                        {/* <div className="spacer_100"></div> */}
                    </div>
                    <div className='right-img'>
                        <img src={newsletterCharacter1} alt='image-1'/>
                        {/* <img src={NewsletterCharacterMob2}  alt='image-1'/> */}
                    </div>
                </div>
                <OneLineFooter/>
                {/* <footer className="section">
                    <div className="container">

                        <div className="spacer_100 mobile_half"></div>
                        <div className="footer_grid-2">
                            <div className="f_vertical-left">
                                <Link to='/' className="nav_logo-link w-inline-block">
                                    <Link to='/' className="nav_logo-link w-inline-block w--current">
                                        <img src={Newlogo} loading="eager" alt="morra-games" style={{ maxWidth: '66%',borderRadius:'0' }} />
                                    </Link>
                                </Link>
                                <div className="spacer_20"></div>
                                <div>
                                    <div style={{padding:'0'}} className="footer-link w-inline-block">
                                        <div className="p_14">Morra Games is a pioneering web3 studio that leverages cutting-edge technology and a community-driven approach to reshape the future of play.</div>
                                    </div>
                               
                                </div>
                               
                            </div>
                            <div id="w-node-_6121deff-1e28-450d-3597-60a1622e40f0-2bf1fd79" className="footer_links-wrap">
                                <div className="f_vertical-left">
                                    <div className="footer-link_header">
                                        <div className="p_14 text_neutral-200 font-family-unbound">Dubai</div>
                                    </div>
                                    <div to='' className="footer-link w-inline-block">
                                        <div className="p_14">35, Marasi Drive, Business Bay, Dubai. <br/>Email us. contact@morragames.com</div>
                                    </div>
                                    <div to='' className="footer-link w-inline-block">
                                        <div className="p_14">Assistance hours: Monday – Friday <br/>9 am to 5 pm GST </div>
                                    </div>
                                </div>
                           
                                <div className="f_vertical-left">
                                    <div className="footer-link_header">
                                        <div className="p_14 text_neutral-200 font-family-unbound">Chat with us</div>
                                    </div>
                                    <div>
                                        <Link style={{display:'flex'}} className="footer-link w-inline-block p_14" to=''><img style={{marginRight:'6px'}} src={Telegramf} alt='image'/> Telegram</Link>
                                    </div>
                                    <div>
                                        <Link style={{display:'flex'}} className="footer-link w-inline-block p_14" to=''><img style={{marginRight:'6px'}} src={Twitterf} alt='image'/>Twiiter</Link>
                                    </div>
                                    <div>
                                        <Link style={{display:'flex'}} className="footer-link w-inline-block p_14" to=''><img style={{marginRight:'6px'}} src={Discord} alt='image'/>Discord </Link>
                                    </div>
                                    <div>
                                        <Link style={{display:'flex'}} className="footer-link w-inline-block p_14" to=''><img style={{marginRight:'6px'}} src={Twitch} alt='image'/>Twitch </Link>
                                    </div>
                                    <div>
                                        <Link style={{display:'flex'}} className="footer-link w-inline-block p_14" to=''><img style={{marginRight:'6px'}} src={Youtube} alt='image'/>Youtube</Link>
                                    </div>
                                </div>

                                <div className="f_vertical-left">
                                    <div className="footer-link_header">
                                        <div className="p_14 text_neutral-200 font-family-unbound">Sitemap</div>
                                    </div>
                                   
                                    <Link to='https://morragames.medium.com/' className="footer-link w-inline-block">
                                        <div className="p_14">News</div>
                                    </Link>
                                    <Link to='https://docs.morragames.com' className="footer-link w-inline-block">
                                        <div className="p_14">Litepaper</div>
                                    </Link>
                                    <Link to='/' className="footer-link w-inline-block">
                                        <div className="p_14">Branding</div>
                                    </Link>
                                    <Link to='/contact' className="footer-link w-inline-block">
                                        <div className="p_14">Contact Us</div>
                                    </Link>
                                </div>
                                
                             

                                
                            
                                
                            </div>

                        </div>
                        <div className="spacer_50"></div>
                        <div className="f_vertical-center_t-center">
                            <div className="p_14 text_neutral-500">
                                Copyright© <span className="year-change">2024</span> Morra Games. All right reserved.
                            </div>
                            <div className="spacer_20"></div>
                            
                        </div>
                    </div>
                </footer> */}
            </div>
        </>
    )
}

export default FooterSections