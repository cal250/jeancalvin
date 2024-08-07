import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials';
import {BsArrowDownCircle} from 'react-icons/bs'
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json.json'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hey 👋!</h3>
        <h1>Am Calvin Jean</h1>
        <h5 className="text_light">FullStack Software Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
        <Lottie animationData={animationData} loop={true} autoplay={true} />

        </div>

        <a href="#footer" className='scroll__down'><BsArrowDownCircle/></a>
      </div>
    </header>
  )
}

export default Header