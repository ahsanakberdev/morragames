import React from 'react'
import {  Beam,Acceled, Gameswift, GreoEngine, ImmutablePartner, MexcGlobal, Myria, Spintop, UniswapPartner, blockchainGame, polygonStudios } from '../Imports/ImportImages'

function PartnersLogos() {
  return (

    <section className='our-partnerssarea section_100vh partners-section' id='partners'>
        <div className='container'>
        <div>
        <h2 className="section-heading">Our Partners</h2>
        <div className='flexarea'>
            <div className='row-11 row'>
            <div>
                <img src={ImmutablePartner} alt='image1'/>
            </div>
            <div>
                <img src={UniswapPartner} alt='image1'/>
            </div>
            </div>
            <div className='row-22 row'>
            <div>
                <img src={Myria} alt='image1'/>
            </div>
            <div>
                <img src={Gameswift} alt='image1'/>
            </div>
            <div>
                <img src={polygonStudios} alt='image1'/>
            </div>
            <div className='beam'>
                <img src={Beam} alt='image1'/>
            </div>
            </div>
            <div className='row-33 row'>
            <div>
                <img src={Spintop} alt='image1'/>
            </div>
            <div>
                <img src={blockchainGame} alt='image1'/>
            </div>
            <div>
                <img src={MexcGlobal} alt='image1'/>
            </div>
            <div>
                <img src={GreoEngine} alt='image1'/>
            </div>
            <div>
                <img src={Acceled} alt='image1'/>
            </div>
            </div>
            <div className='row-44 beam-logo row'>
            <div className='beam'>
                <img src={Beam} alt='image1'/>
            </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default PartnersLogos