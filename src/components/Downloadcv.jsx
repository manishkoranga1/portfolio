import React from 'react'
import './button.css'
import CV from '../assets/Resume/ResumeOverleaf.pdf'

const Downloadcv = () => {
  return (
    <button class="button">
    <a href={CV} target="_blank" download="ManishKorangaResume"><span class="button-content">Download CV</span></a>
</button>
  )
}

export default Downloadcv