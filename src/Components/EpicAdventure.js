import {React} from 'react'
import { EpicAdventureImg,right_arrow_icon } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'
// import GameSlider from './GameSlider'
// import GameSlider2 from './GameSlider2'
import vid from '../assets/img/Training-Room.webm'

function EpicAdventure() {
    // const src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <div>
       
        <section className='epic-edventure section_100vh' id= 'store'>
            <div className='background-picture'>
                <video video loop autoplay='' muted>
                    <source src={vid} type="video/mp4" />
                </video>
                {/* <img src={EpicAdventureImg}  alt='epic-adventure-img'/> */}
                <div className='content-area'>
                <div color-mode="light" className="btn_outline-wrap is--label" style={{paddingLeft:'20px',paddingRight:'20px'}}> 
                    <div className="p_16 features-top">Outloot</div>
                </div>
                <div>
                    <h2 className="h_84 section-heading">Get Everything you need for <br/>
                        an epic on-chain adventure</h2>
                        <p className='section-paragraph p_14'>Don't just play the game – own it. Outloot empowers you to forge your own path with exclusive on-chain treasures for every adventurer.</p>
                </div>
                {/* <GameSlider2/>  */}
                <span to='' class="btn teal w-inline-block" style={{marginTop:'40px',cursor:'default'}}> 
                    <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                    <span to="http://docs.outloot.gg/" className="p_16 text-white display"><span>Coming Soon</span>
                    {/* <svg className="icon_20 margin-left-10" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0496 12.955L13.8839 20.1206C13.3464 20.7029 12.406 20.7029 11.8685 20.1206C11.2863 19.5832 11.2863 18.6428 11.8685 18.1053L16.571 13.3581H2.86672C2.06058 13.3581 1.43359 12.7311 1.43359 11.925C1.43359 11.1636 2.06058 10.4918 2.86672 10.4918H16.571L11.8685 5.78939C11.2863 5.25196 11.2863 4.31147 11.8685 3.77406C12.406 3.19185 13.3464 3.19185 13.8839 3.77406L21.0496 10.9397C21.6316 11.4771 21.6316 12.4176 21.0496 12.955Z" fill="white"/>
                    </svg> */}
                    </span>
                </span>    
                </div>
            </div> 
        </section>
        
       
    </div>
  )
}

export default EpicAdventure