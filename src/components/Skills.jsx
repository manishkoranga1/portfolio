import React from 'react'
import './CSS/skills.css'
import Heading from './Heading'
import Sheading from './Sheading'

const Skills = () => {
    return (
        <div className='skills' id='Skills'>
            <Sheading
                name="What do I offer"
            />
            <Heading
                name1='My'
                name2='Skills'
            />
            <div className='m-container'>
                <div className='m-l-container'>
                <div className='heading'><h1>Web Develoment</h1></div>
                    <div className='l-container'>
                        <div className='bar'><i style={{color: "#F16529"}} class='bx bxl-html5'></i>
                            <div className='info'>
                                <span>HTML</span>
                            </div>
                            <div className='progress-line html'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'><i style={{color: "#2965f1"}} class='bx bxl-css3'></i>
                            <div className='info'>
                                <span>CSS</span>
                            </div>
                            <div className='progress-line html'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'><i style={{color: "#F0DB4F"}} class='bx bxl-javascript' ></i>
                            <div className='info'>
                                <span>Javascript</span>
                            </div>
                            <div className='progress-line html'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'><i style={{color: "#61DBFB"}} class='bx bxl-react' ></i>
                            <div className='info'>
                                <span>ReactJs</span>
                            </div>
                            <div className='progress-line react'>
                                <span></span>
                            </div>
                        </div>
                        <div className='bar'><i style={{color: "#3C873A"}} class='bx bxl-nodejs' ></i>
                            <div className='info'>
                                <span>Node.js</span>
                            </div>
                            <div className='progress-line react'>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='r-container'>
                    <div className='radial-bars'>
                    <div className='heading'><h1>Programming and DSA</h1></div>
                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className='percentage'>88%</div>
                            <div className='text'>C++</div>
                        </div>
                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                <circle className='path path-2' cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className='percentage'>81%</div>
                            <div className='text'>JAVA</div>
                        </div>
                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                <circle className='path path-3' cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className='percentage'>72%</div>
                            <div className='text'>Python</div>
                        </div>
                        <div className='radial-bar'>
                            <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                <circle className='path path-4' cx="100" cy="100" r="80"></circle>
                            </svg>
                            <div className='percentage'>75%</div>
                            <div className='text'>DSA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills