import React from 'react'
import './footer.css'

import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id='footer'>
      <h4>If you want to research more about</h4>
      <a href="#" className='footer__logo'>Jean Calvin</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portifolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target='_blank' href="https://www.linkedin.com/in/rwaburindi-jean-calvin-4921ab296/"><BsLinkedin/></a>
        <a target='_blank' href="https://github.com/cal250"><BsGithub/></a>
        <a target='_blank' href="https://www.instagram.com/calvin_sta_/"><BsInstagram/></a>
      </div>


      <div className="footer__copyright">
        <small>
          &copy; Calvin.
        </small>
      </div>

    </footer>
  )
}

export default Footer