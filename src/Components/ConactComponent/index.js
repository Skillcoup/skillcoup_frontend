import React from 'react'
import bgimage from './Group 207.png';
import instagram_logo from './instagram.png';
import facebook_logo from './facebook.png';
import twitter_logo from './twitter.png';
import linkedin_logo from './linkedin.png';
import followus_bg from './follow us bg.png';
import Footer from '../Footer/Footer';

import './index.css';

const ContactComponent = () => {
  const haveBulkOrderBg = {
    backgroundImage: "url('https://res.cloudinary.com/skillcoup/image/upload/v1661794453/contact_us/bulk_qs7uw6.jpg')",
  };
  return (
    <>
      <div className="bgimage">
        <img className='background' src={bgimage} alt="contact-us-bg" />
      </div>


      <div className='form_container container col-xl-8 col-lg-8' >
        <div className='row justify-content-center' >
          <div className=" col-xl-8 col-lg-8">
            <section id='contact' >
              <div className='section-headline' >
                <h3 className='page-heading text-center'>Contact Us </h3>
              </div>
              <br /><br />

              <form method="post" name="contactform" autocomplete="on" >
                <div className='row' >
                  <div className='col-md-6' >
                    <p className='heading-2' >Name*</p>
                    <div className='name input-with-icon-left' >
                      <input className='with-border' name='name' type='text' placeholder='Your Name' required='required' />
                      <i className="zmdi zmdi-account-circle"></i>
                    </div>
                  </div>

                  <div className='col-md-6' >
                    <p className='heading-2' >Email*</p>
                    <div className='email input-with-icon-left' >
                      <input className='with-border' name='email' type='email' placeholder='Email Address' required='required' />
                      <i className="zmdi zmdi-email"></i>
                    </div>
                  </div>
                </div>

                <p className='heading-2' >Subject*</p>
                <div className="input-with-icon-left">
                  <input className="with-border" name="subject" type="text" id="subject" placeholder="Specify in few words" required="required" />
                  <i className="zmdi zmdi-comment-text-alt"></i>
                </div>

                <div>
                  <textarea class="with-border" name="comments" cols="40" rows="5" id="comments" placeholder="Submit your requirements in details
" spellcheck="true" required="required"></textarea>
                </div>

                <div className='submit-form'>
                  <input type="submit" className="submit button margin-top-15" id="submit" value="Submit Message" />
                </div>

              </form>
            </section>

          </div>
        </div>
      </div>


      {/* Get in touch */}

      <div className='col-xl-10 col-lg-10 offset-xl-1 offset-lg-1' >
        <div className='getintouch_container' >
          <div className='row contact-location-info' >
            <div className='col-xl-6 col-md-6' >
              <div className='contact-address' >
                <ul>
                  <li className="contact-address-headline" >Get In Touch</li>
                  <li></li>


                  <li><i className="zmdi zmdi-pin-drop">&nbsp;</i> <span className="bold_txt">Location :</span>
                    <p>Pandharpur - 12, Manmatheshwar Housing Society , Link Road , Pandharpur - 413304 , Dist. Solapur.</p>
                  </li>
                  <hr />
                  <li><i className="zmdi zmdi-phone"></i> <span className="bold_txt">Phone :</span> <br />

                    &nbsp; <a href="callto:+919158246012">(+91) 9158246012</a>
                    &nbsp; <a href="callto:+917756938818">(+91) 7756938818</a>
                  </li>
                  <hr />
                  <li><i class="zmdi zmdi-email"></i> <span className="bold_txt"> Email :</span> <br />
                    &nbsp; <a href="mailto:admin@skillcoup.com">admin@skillcoup.com</a>
                  </li>
                  <hr />
                  <li>
                    <div className="freelancer-socials">
                      <ul>
                        <li><a href=" https://instagram.com/skillcoup?igshid=wt7x1hn1uinj" title="Instagram" data-tippy-placement="top"><i className="icon-brand-instagram"></i></a></li>
                        <li><a href="https://twitter.com/skillcoup?s=08" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/skill.coup.7" title="Facebook" data-tippy-placement="top"><i className="icon-brand-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/skillcoup" title="LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.4655701239803!2d75.31044241435711!3d17.67545339908642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc41823e0554f45%3A0xf72c6d55f122e450!2sLink%20Rd%2C%20Pandharpur%2C%20Maharashtra%20413304!5e0!3m2!1sen!2sin!4v1629004779788!5m2!1sen!2sin" width="100%" height="460" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>

        </div>
      </div>


      {/* Bulk Order */}


      <div className="photo-section" style={haveBulkOrderBg}>

        <div className="text-content white-font">
          <div className="container">

            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-12"></div>
              <div className="col-lg-6 col-md-8 col-sm-12 bulk_txt">
                <span className="bold_txt heading_txt" style={{ fontSize: "50px" }}>Have a bulk order?</span>
                <p style={{ fontWeight: 100 }} >Dont worry! Just give a call to (+91) 9158246012 </p>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                  the day, going forward, a new normal that has evolved from generation is on the runway
                  towards.</p>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* Follow us */}

      <div className='follow-us' >
        <div className='bgimage_container col-xl-8 col-lg-8 offset-xl-2 offset-lg-2'>
          <img className='background' src={followus_bg} alt="follow-us-background" />
          <div className='social-handles' >
            <span className='bold_txt heading_txt' >Follow Us At</span>
            <div className="freelancer-socials">
              <ul>
                <li>
                  <a href="https://instagram.com/skillcoup?igshid=wt7x1hn1uinj" title="Instagram" data-tippy-placement="bottom" data-tippy-theme="light">
                    <img alt='instagram' className="margin-top-20" src={instagram_logo} width="50px" height="50px" />
                  </a>

                </li>
                <li>
                  <a href="https://www.facebook.com/skill.coup.7" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                    <img alt='facebook' className="margin-top-20" src={facebook_logo} width="50px" height="50px" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/skillcoup" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
                    <img alt='linkedin' className="margin-top-20" src={linkedin_logo} width="50px" height="50px" />
                  </a>
                </li>
                <li>

                  <a href="https://twitter.com/skillcoup?s=08" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
                    <img alt='twitter' className="margin-top-20" src={twitter_logo} width="50px" height="50px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      {/* <div  >
            <div className='follow_us col-xl-8 col-lg-8' >
              <div className='row' >
                  <img className='follow_us_bgimage' src={followus_bg} alt="image"/>
                    <div className='social-handles ' >
                        <span className='bold_txt heading_txt' >Follow Us At</span>
                        <div className="freelancer-socials">
                          <ul>
                            <li>
                              <a href="https://instagram.com/skillcoup?igshid=wt7x1hn1uinj" title="Instagram" data-tippy-placement="bottom" data-tippy-theme="light">
                                <img className="margin-top-20" src={instagram_logo} width="50px" height="50px"/>
                              </a>

                            </li>
                            <li>
                              <a href="https://www.facebook.com/skill.coup.7" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                <img className="margin-top-20" src={facebook_logo} width="50px" height="50px"/>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/company/skillcoup" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
                                <img className="margin-top-20" src={linkedin_logo} width="50px" height="50px"/>
                              </a>
                            </li>
                            <li>

                              <a href="https://twitter.com/skillcoup?s=08" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
                                <img className="margin-top-20" src={twitter_logo} width="50px" height="50px"/>
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
              </div>
            </div>
        </div> */}
      <Footer />
    </>
  )
}

export default ContactComponent


