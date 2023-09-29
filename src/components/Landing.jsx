import React from 'react'
import Downloadcv from './Downloadcv'

const Landing = () => {
  return (
    <div className='Landing' id='Home'>
        <div className='Content'>
        <h1 className='s-heading s-headin'>
            Hello, It's Me
        </h1>
        <h1 className='m-heading'>
            Manish Koranga
        </h1>
        <h1 className='s-headin'>
            And I am a Web Developer
        </h1>
        <div className='description'>
        Passionate Web developer with expertise in cutting-edge, full-stack web technologies, building innovative solutions and seamless digital experiences. Unwavering commitment to ethics and teamwork—a coder with a conscience, ready to innovate.
        </div>
        <div className='social-media'>
            <a href='#'><i class='bx bxl-facebook-circle'></i></a>
            <a href='https://www.linkedin.com/in/manish-singh-koranga-b63225189/' target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin' ></i></a>
            <a href='https://github.com/manishkoranga1' target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i></a>
            <a href='#'><i class='bx bxl-instagram' ></i></a>
        </div>
        <div className='Download'>
        <Downloadcv />
    </div>
    </div>
    
    </div>
  )
}

export default Landing