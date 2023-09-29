import React from 'react'
import { useRef } from 'react'
import { FaBars , FaTimes} from 'react-icons/fa'
import './CSS/navbar.css'


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }
  return (
    <div style={{zIndex: "10"}} className='Navbar' ref={navRef}>
        <h1 style={{fontFamily: "'Ubuntu', sans-serif"}}><a href='#'>Portfo<span style={{color: "#F08000"}}>lio.</span></a></h1>
        <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href='#Portfolio'>Portfolio</a></li>            
            <li><a href='#Contact'>Contact</a></li>
            <button>
              <FaTimes className='nav-btn close-btn' onClick={showNavbar}/>
            </button>
        </ul>
        <button>
          <FaBars className='nav-btn' onClick={showNavbar}/>
        </button>
    </div>
  )
}

export default Navbar