import React from 'react'
import { Link } from 'react-scroll'
import leftHover from '../assets/img/left_hover.png'
import navDf from '../assets/img/nav_df.png'
import activeIcon from '../assets/img/showActive.png'



const LeftBar = () => {

  return (
    <div className='leftbar'>
       <ul>
       <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0} // adjust offset based on your layout
            duration={100}
            style={{color: "white" }}
          >
            <div className='select-point'>
            <img src={navDf} style={{width: "30px", opacity: "0.7"}}  alt="icon-img" />
               <span className='onhover-show'>
              <img src={leftHover} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" />

              <span className='select-text'>
            Home
              </span>
               </span>
              <img src={activeIcon} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" className='active-section' />

            </div>
            
            
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={0} // adjust offset based on your layout
            duration={100}

            style={{color: "white" , }}
          >
            <div className='select-point'>
            <img src={navDf} style={{width: "30px", opacity: "0.5"}}  alt="icon-img"/>
               <span className='onhover-show'>
              <img src={leftHover} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" />
              <span className='select-text'>
            Services
              </span>
               </span>
              <img src={activeIcon} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" className='active-section' />
            </div>
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={0} // adjust offset based on your layout
            duration={100}
            style={{color: "white" }}
          >
            <div className='select-point'>
            <img src={navDf} style={{width: "30px", opacity: "0.5"}}  alt="icon-img"/>
               <span className='onhover-show'>
              <img src={leftHover} style={{width: "30px", marginLeft: "-30px"}} alt="icon-img"  />
              <span className='select-text'>
            Our Products
              </span>
               </span>
              <img src={activeIcon} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" className='active-section' />

            </div>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            offset={0} // adjust offset based on your layout
            duration={100}
            style={{color: "white" }}
          >
           <div className='select-point'>
            <img src={navDf} style={{width: "30px", opacity: "0.5"}} alt='icon-img' />
               <span className='onhover-show'>
              <img src={leftHover} style={{width: "30px", marginLeft: "-30px"}} alt='icon-img'  />
              <span className='select-text'>
            Features
              </span>
               </span>
              <img src={activeIcon} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" className='active-section' />

            </div>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="partners"
            spy={true}
            smooth={true}
            offset={0} // adjust offset based on your layout
            duration={100}
            style={{color: "white"}}
          >
         <div className='select-point'>
            <img src={navDf} style={{width: "30px", opacity: "0.5"}} alt="icon-img" />
               <span className='onhover-show'>
              <img src={leftHover} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" />
              <span className='select-text'>
           Partners
              </span>
               </span>
              <img src={activeIcon} style={{width: "30px", marginLeft: "-30px"}}  alt="icon-img" className='active-section' />

            </div>
          </Link>
        </li>
        {/* Add more navbar links here if needed */}
      </ul>

    </div>
  )
}

export default LeftBar
