import React, { useRef } from 'react';
import './CSS/contact.css'
import Sheading from './Sheading'
import Heading from './Heading'

import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SECRET_SERVICE, process.env.REACT_APP_SECRET_TEMPLATE, form.current, process.env.REACT_APP_SECRET_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Message Sent.")
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (



    <div className='Contact' id='Contact'>
      <Sheading
        name="Let's Connect"
      />
      <Heading
        name1='Contact'
        name2='Me'
      />
      <div className='m-container'>
        <div className="contact_us_green">
          <div className="responsive-container-block big-container">
            <div className="responsive-container-block container">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
                <form ref={form} onSubmit={sendEmail} className="form-box">
                  <div className="container-block form-wrapper">
                    <div className="head-text-box">
                      <p className="text-blk contactus-head">
                        Hello
                      </p>
                      <p className="text-blk contactus-subhead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al iqua. Ut enim
                      </p>
                    </div>
                    <div className="responsive-container-block">
                      <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                        <p className="text-blk input-title">
                          FIRST NAME
                        </p>
                        <input className="input" id="ijowk-6" name="FirstName" />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">
                          LAST NAME
                        </p>
                        <input className="input" id="indfi-4" name="LastName" />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">
                          EMAIL
                        </p>
                        <input className="input" id="ipmgh-6" name="Email" />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">
                          PHONE NUMBER
                        </p>
                        <input className="input" id="imgis-5" name="PhoneNumber" />
                      </div>
                      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                        <p className="text-blk input-title">
                          WHAT DO YOU HAVE IN MIND
                        </p>
                        <textarea name="message" className="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      <button type="submit" value="Send" className="submit-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
                <div className="container-box">
                  <div className="text-content">
                    <p className="text-blk contactus-head">
                      Let's Connect
                    </p>
                    <p className="text-blk contactus-subhead">
                      Crafting seamless online experiences and bringing innovative ideas to life. I'm here to make your digital dreams a reality. Let's connect and make something extraordinary happen!
                    </p>
                  </div>
                  <div className="workik-contact-bigbox">
                    <div className="workik-contact-box">
                      <div className="phone text-box">
                        <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" />
                        <p className="contact-text">
                          +91 6397665601
                        </p>
                      </div>
                      <div className="address text-box">
                        <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" />
                        <p className="contact-text">
                          manishkoranga187@gmail.com
                        </p>
                      </div>
                      <div className="mail text-box">
                        <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" />
                        <p className="contact-text">
                          Nainital, Uttarakhand, India
                        </p>
                      </div>
                    </div>
                    <div className="social-media-links">
                      <a href="">
                        <img className="social-svg" id="is9ym" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                      </a>
                      <a href="">
                        <img className="social-svg" id="i706n" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                      </a>
                      <a href="">
                        <img className="social-svg" id="ib9ve" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                      </a>
                      <a href="">
                        <img className="social-svg" id="ie9fx" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                      </a>
                      {/* <a href='https://www.linkedin.com/in/manish-singh-koranga-b63225189/' target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
                      <a href='https://github.com/manishkoranga1' target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a>
                      <a href="#"><i class="fa fa-youtube"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact