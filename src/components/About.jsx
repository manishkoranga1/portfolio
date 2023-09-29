import React from 'react'
import './CSS/about.css'
import Heading from './Heading'
import Sheading from './Sheading'
import photo from './images/passport2.jpg'

const About = () => {
    return (
        <div className='About' id='About'>
            <Sheading
                name='Let Me Introduce Myself'
            />
            <Heading
                name1='About'
                name2='Me'
            />
            <div className='content' >
                <div className='l-box'>
                    <div className='img1'>
                        <div className='img2'><img src={photo}></img></div>
                    </div>
                </div>
                <div className='r-box'>
                    <div className='m-heading'>
                        <h1>Manish Singh Koranga</h1>
                    </div>
                    <div className='s-heading'>
                        <h1>Webdeveloper/ Programmer</h1>
                    </div>
                    <div className='cnt'>
                        <p>Hi, I am Manish Singh Koranga, a 2019-23 batch B.Tech graduate in Computer Science and Engineering. As a web developer, I command expertise in HTML, CSS, and JavaScript, alongside proficiency in front-end technologies like React.js. I have a strong foundation in Node.js and a working knowledge of MongoDB for database administration in backend development. Additionally, I'm also skilled in supplemental technologies like Express.js and EJS.</p>
                        <p>Beyond web development, I am proficient in several other programming languages, such as C++, Python, and Java. Additionally, I have a solid understanding of data structures and algorithms, which allows me to create scalable and efficient solutions. This range of knowledge equips me to address problems from a broad viewpoint. </p>
                        <p>Beyond my technical expertise, I stand out. I am characterized as a committed and moral individual. I place a high value on teamwork and consider collaboration to be the key to success. This combination of technical expertise and moral character helps me succeed in whatever I do.</p>
                        {/* <ul>
                        <li><i style={{fontSize: "20px"}} className="fa fa-envelope"></i> Info@YourGmail24.com</li>
                        <li><i style={{fontSize: "20px"}} className="fa">&#xf2c0;</i> +91 638273898</li>
                        <li> <i style={{fontSize: "20px"}} className="fa ">&#xf2bb;</i> 153 Williamson Plaza, Maggieberg</li>
                    </ul> */}
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default About