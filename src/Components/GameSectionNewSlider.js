import {React,useState,useEffect, useRef} from 'react'
// import SliderWithThumbnails from './SliderWithThumbnails '
import { AppleIconn,PlayStoreIconn,right_arrow_icon,PcIconn,ComicsIconn,ArrowLaunch } from '../Imports/ImportImages'
// import image1 from '../assets/img/karnak-gameimg2.png';
import image1 from '../assets/img/karnak-gameimg33.webp';
// import image2 from '../assets/img/mythiaGame.png';
import image2 from '../assets/img/Mythya banner.webp';
// import video1 from '../assets/img/mythya-bannervideo.mp4';
import video1 from '../assets/img/Mythya WebM.webm';
import image3 from '../assets/img/fawntics.png';
// import image2 from '../assets/img/news-archive1.webp';
// import image4 from '../assets/img/news-archive1.png';
import image5 from '../assets/img/powerra.webp';
import image6 from '../assets/img/ourgame1.webp';
import logo1 from '../assets/img/karnatkLogo.png'
import { Link } from 'react-router-dom';
import useWindowDimensions from './WindowDimensions';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import TechStacks from './TechStacks';
import Index from './../pages/Index';

SwiperCore.use([Autoplay]);
function GameSectionNewSlider() {
  
  const { width } = useWindowDimensions()
    const [currentGame, setCurrentGame] = useState(0); // Index of current game
    // const [fadeIn, setFadeIn] = useState(false); // State to trigger fade-in effect
    // const [preloadedImage, setPreloadedImage] = useState(null); // State to store preloaded image
    var settings = {
      centerMode: true,
  centerPadding: '60px',
  autoplay : true,
  speed : 800,
  dots : true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
    };
    const [loadedImages, setLoadedImages] = useState([]);
    const [fadeIn, setFadeIn] = useState(false);
    const swiperRef = useRef(null);
    const games = [
        {
          title: 'Karnak Legacy',
          image: image1,

          content: {
            logo : logo1,
            paragraph: 'Karnak Legacy is a mobile extraction royale shooter game set in steampunk Egyptian world.',
            Url : '/karnak-legacy',
            isLaunch : true,
            productType : 0,
          },
        },
          {
            title: 'Mythya',
            image: image2,
            // video : video1,
            content: {
              heading: 'Mythya',
              paragraph: 'Mythya is a mobile real-time strategy game where players build cities and lead powerful armies to battle.',
              Url : '/mythya',
              isLaunch : true,
              productType : 0,
            },
          },
          // {
          //   title: 'Fawnatics',
          //   image: image3,
          //   content: {
          //     heading: 'Fawnatics',
          //     paragraph: 'Fawnatics is a unique fusion of art and storytelling, where 10K stunning Fawns PFP collection come to life in an web3-enabled comic book series and video game.',
          //     // Url : '/games1'
          //     isLaunch : false,
          //     productType : 2,
          //   },
          // },
          // {
          //   title: 'Cult with Cars: Revved-Up Rivals',
          //   image: image4,
          //   content: {
          //     heading: 'Cult with Cars: Revved-Up Rivals',
          //     paragraph: 'Revved-Up Rivals is a moddable car racing that takes the thrill of racing to a whole new level.',
          //     // Url : '/games2'
          //     isLaunch : false,
          //     productType : 0,
          //   },
          // },
          // {
          //   title: 'Power Of RA',
          //   image: image5,
          //   content: {
          //     heading: 'Power Of RA',
          //     paragraph: 'The Power of Ra is an epic comic book series that immerses readers in the rich and mystical world of ancient Egyptian mythology.',
          //     // Url : '/games2'
          //     isLaunch : false,
          //     productType : 2,
          //   },
          // },
            {
              title: 'Metalands',
              image: image6,
              content: {
                heading: 'Metalands',
                paragraph: 'Metalands is a first person shooter game set in a post-apocalyptic world. The player takes on the role of a bunker manager.',
                // Url : '/games1'
                isLaunch : false,
                productType : 1,
              },
            },
           
           
        // Add more games as needed
      ];
      // const changeGame = (index) => {
      //   const newImage = new Image(); // Create a new Image object
      //   newImage.onload = () => {
      //     // Once the new image is loaded, update state and trigger fade-in effect
      //     setPreloadedImage(newImage.src);
      //     setCurrentGame(index);
      //     setFadeIn(true);
      //     setTimeout(() => {
      //       setFadeIn(false); // Reset fade-in effect after transition
      //     }, 150); // Adjust timeout to match transition duration
      //   };
      //   newImage.src = games[index].image; // Set the src attribute to preload the image
      // };
    //   const changeGame = (index) => {
    //     setCurrentGame(index);
    // };
    const [activeSlideIndex, setActiveSlideIndex] = useState(1);



    useEffect(() => {
      const preloadImages = () => {
          const images = games.map(game => {
              const img = new Image();
              img.src = game.image;
              return img;
          });
          setLoadedImages(images);
      };

      preloadImages();
  }, [games]);

  const changeGame = (index) => {
    if (swiperRef.current) {
      
      setActiveSlideIndex(swiperRef.current.swiper.slideToLoop(index));
    }

      setFadeIn(true);
      setTimeout(() => {
          setCurrentGame(index);
          setFadeIn(false);
      }, 300); // Adjust timeout to match transition duration
  };

    // const images = [image1, image2, image3];
  return (
    
    <div className='game-slider-sec home-gamesliderr section_100vh' id='products'>
    <div className='container new_container'>
            <div className="f_vertical-center_t-center">
                {/* <div className="btn outline-green features">
                    <div color-mode="light" className="btn_bg bg_outline"></div>
                    <div color-mode="light" className="btn_outline-wrap is--label">
                        <div className="p_16 features-top" >Our Products</div>
                    </div>
                </div>
                <div className="spacer_16"></div>
                <div className="text_maxch-85">
                    <h2 className="h_84 section-heading">Escape reality through   <br/>
                    entertainment</h2>
                </div>
                <div className="spacer_16"></div>
                <div className="p_21 text_neutral-500 text_lh-1-5 section-paragraph">Dive into a world of endless possibilities with Morra Games!  Embark <br/> on thrilling adventures from the comfort of your screen.</div> */}
            </div>
            {/* <div className="spacer_40"></div> */}



            <Slider className='slides-backk games-slider-sectionn adjust_height' {...settings}>
     {games.map((index ) => (
      <div >
      {index.video ? 
     <video className='mobvideomythya' video loop autoplay='' muted>
     <source src={video1} type="video/mp4" />
 </video>
 :
   <img src={index.image} className='slick-image'/> 
     
      }
        
     
       
        
        <div>
        <div className="content">
            <img className='logo' src={index.content.logo}/>
          <h2>{index.content.heading}</h2>
          <p>{index.content.paragraph}</p>
          <div style={{display:'flex',alignItems:'center'}}>
          { index.content.isLaunch ?
          <Link to={index.content.Url} className="btn teal w-inline-block" style={{marginRight:'30px',borderRadius:'0'}}>
                <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                 <span className="p_16 text-white display" style={{cursor:'pointer'}}><span>Learn More</span> <img src={ArrowLaunch} style={{borderRadius:'0',width:'auto', height:'auto',objectFit:'contain'}} className="icon_20 margin-left-10" alt='->' /> </span>  
            </Link>
            : 
            <Link target='_blank' to='https://www.youtube.com/watch?v=aOSJ5xAq9N0' className="btn teal" style={{marginRight:'30px',color:'white'}}>
            {/* <div color-mode="light" class="btn_bg bg_dark-teal"></div> */}
                <span>Watch</span>  
             </Link>
                }
            <div className='icon'>
            <img src={index.content.productType === 0 ? AppleIconn : index.content.productType === 1 ? PcIconn : ComicsIconn} style={{width:'auto', height: 'auto',marginRight:'15px',borderRadius:'0px'}} alt='apple'/>
            </div>
            {index.content.productType === 0 ? (
              <div to='' className='icon'>
              <img src={PlayStoreIconn} style={{width:'auto', height: 'auto',borderRadius:'0px'}} alt='play store'/>
              </div>
            ) : null}
            </div>
        </div>
        </div>
      </div>
     ))}
    </Slider>




            <div className={width < 768 ? 'game-section-part' : 'main-gallery-partt-pro'}>
        <div className="game-slider games-slider-sectionn " style={{height:width < 768 ? '100%' : 'auto'}}>


      <div className={`videoo-w-100 main-image adjust_height ${fadeIn ? 'fade-in' : ''}`}>
      {loadedImages.map((item, index) => 
         games[index].video ? 
         <video video loop autoplay='' muted>
         <source src={video1} type="video/mp4" />
     </video> :
        <img
         key={index}
         src={games[index].image}
         alt={games[index].title}
         style={{ opacity: currentGame === index ? 1 : 0 ,position:width < 768 ? currentGame === index ? 'relative': 'absolute' : ''}}
     />
   
      )}
        <div className="content">
            <img className='logo' src={games[currentGame].content.logo}/>
          <h2>{games[currentGame].content.heading}</h2>
          <p>{games[currentGame].content.paragraph}</p>
          <div style={{display:'flex',alignItems:'center'}}>
          { games[currentGame].content.isLaunch ?
          <Link to={games[currentGame].content.Url} class="btn teal w-inline-block" style={{marginRight:'30px',borderRadius:'0'}}>
                <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                 <span className="p_16 text-white display" style={{cursor:'pointer'}}><span>Learn More</span> <img src={ArrowLaunch} style={{width:'auto', height:'auto',objectFit:'contain',borderRadius:'0'}} className="icon_20 margin-left-10" alt='->' /> </span>  
            </Link>
            : 
            <Link target='_blank' to='https://www.youtube.com/watch?v=aOSJ5xAq9N0' class="btn teal" style={{marginRight:'30px',color:'white'}}>
            {/* <div color-mode="light" class="btn_bg bg_dark-teal"></div> */}
                <span>Watch</span>  
             </Link>
                }
            <div to='' className='icon'>
            <img src={games[currentGame].content.productType === 0 ? AppleIconn : games[currentGame].content.productType === 1 ? PcIconn : ComicsIconn} style={{width:'auto', height: 'auto',marginRight:'15px',borderRadius:'0px'}} alt='apple'/>
            </div>
            {games[currentGame].content.productType === 0 ? (
              <div to='' className='icon'>
              <img src={PlayStoreIconn} style={{width:'auto', height: 'auto',borderRadius:'0px'}} alt='play store'/>
              </div>
            ) : null}
            </div>
        </div>
      </div>
      
      <div className="thumbnail-slider" style={{overflowX:width < 768 ? 'auto' : 'visible'}}>
      {width > 768 ? (
  games.map((game, index) => (
    <div
      key={index}
      
      className={`thumbnail-part ${index === currentGame ? 'active' : ''}`}
      onClick={() => changeGame(index)}
    >
      <img src={game.image} alt={game.title} />
      <h4>{game.title}</h4>
    </div>
  ))
) : (
  <Swiper
  ref={swiperRef}
    // effect="slide"
    grabCursor={true}
    centeredSlides={false}
    loop={true}
    slidesPerView={3}
    spaceBetween={0}
    initialSlide={activeSlideIndex}
    onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
  >
    {games.map((game, index) => (
      <SwiperSlide key={index}>
      <div
        key={index}
        className={`thumbnail-part  opacity-0 ${index === currentGame ? 'active' : ''}`}
        onClick={() => changeGame(index)}
      >
        <img src={game.image} alt={game.title}style={{ height: '150px' }} />
         {/* <h4>{game.title}</h4> */}
      </div>
      </SwiperSlide>
    ))}
  </Swiper>
)}

      </div> 
      
     
        </div>
        </div>
        </div>
    </div>
  )
}

export default GameSectionNewSlider
