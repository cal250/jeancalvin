import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://www.linkedin.com/in/rwaburindi-jean-calvin-4921ab296/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/cal250" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials