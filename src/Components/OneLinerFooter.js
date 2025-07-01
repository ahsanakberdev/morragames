import React from 'react'
import { Discord,  Telegramf, Twitch, Twitterf, Youtube,Newlogo, NewlogoM} from '../Imports/ImportImages'

const OneLineFooter = () => {
    return (
        <footer className="footer">
          <div className='container'>
          <div className="left-section">
            <img src={Newlogo} className='morra-logoweb' alt="Morra Games Logo" style={{ maxWidth: '18%',borderRadius:'0' }}/>
            <img src={NewlogoM} className='morra-logomob' loading="eager" alt="morra-games" style={{borderRadius:'0'}}/>

            {/* <span>Copyright© 2024 Morra Games.</span> */}
          </div>
          <div className='right-sectiondivs'>
          <div className="center-section">
            <a href="https://t.me/morragames" target="_blank" rel="noopener noreferrer" className="icon">
            <img className=' icon' style={{marginRight:'16px'}} src={Telegramf} alt='image'/>
            </a>
            <a href="https://x.com/morragames" target="_blank" rel="noopener noreferrer" className="icon">
            <img className=' icon'style={{marginRight:'16px'}} src={Twitterf} alt='image'/>
            </a>
            <a href="https://discord.gg/VTPFAwHQZU" target="_blank" rel="noopener noreferrer" className="icon">
            <img className=' icon'style={{marginRight:'16px'}} src={Discord} alt='image'/>
            </a>
            {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon">
            <img className=' icon' style={{marginRight:'16px'}} src={Twitch} alt='image'/>
            </a> */}
            <a href="https://www.youtube.com/channel/UCCDn7l-MXhfprWb44yXc4jw" target="_blank" rel="noopener noreferrer" className="icon">
            <img className=' icon'style={{marginRight:'16px'}} src={Youtube} alt='image'/>
            </a>
          </div>
          <span>Copyright© 2024 Morra Games.</span>
          </div>
          {/* <div className="right-section">
            <span>Powered by Tekzit</span>
          </div> */}
          </div>
        </footer>
      );
}

export default OneLineFooter