/** @format */

import React from "react";

import "./Commoncss.css";

import blog1 from "../../assets/blog1.jpeg";
import blog2 from "../../assets/blog2.jpeg";
import blog3 from "../../assets/blog3.jpeg";
import brandimg from '../../assets/brandimgall.png';
import clientillustration from "../../assets/clientillustration.png";
import Siddhi from "../../assets/Siddhi.png";
import Ajinkya from "../../assets/Ajinkya.png";
import Priya from "../../assets/Priya.png";
import Priyanka from "../../assets/Priyanka.png";
import Pranya from "../../assets/PranayGoel.png";
import Mamta from "../../assets/Mamta.png";
import Varsha from "../../assets/VarshaYadav.png";
import Kalyan from "../../assets/KalyanKumar.png";
import Shailendra from "../../assets/Shailendra.png";

import Buttons from "./Buttons";
import Category from "./Category";
import Footer from "../Footer/Footer";

const HomeComponent = () => {
  return (
    <>
      <div className='intro-banner'>
        <div className='container-fluid'>
          <div className='left'>
            <div className='content-container'>
              <h3>
                <strong>Get Best Talent </strong>
                <strong>At The Best Price</strong>
                {/* <br /> */}
                <span>India ka apna earning platform</span>
              </h3>
              <div className='d-flex content'>
                <Buttons buttonText={"Get in touch"} />
              </div>

              <div className="projectcounter" >
                  
                            <ul class="intro-stats margin-top-45 hide-under-992px">
                                <li>
                                    <div className="counter1"></div><div className="plus"  >+</div>
                                    <span>Projects Completed</span>
                                </li>   
                            </ul>
                  
              </div>
            </div>
          </div>
          <div className='right'></div>
        </div>
      </div>
      <section>
        <div class="section margin-top-65 display-flex">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-headline centered margin-bottom-15">

                        </div>
                    </div>
                </div>

                <div class="row " id="for-clients">
                    <div class="col-md-6 left-container">
                        <img src={clientillustration} alt="" />
                    </div>
                    <div class="col-md-6 right-container">
                        <div class="margin-top-25 margin-bottom-15">
                            <h1>Experienced Professionals.</h1>
                            <h1>Affordable Price.</h1>
                            <p>Hire experienced professionals for all your requirements.
                                <ul>
                                    <li class=""  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg> Verified profiles</li>
                                    <li ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg>
                                        Plenty of Opportunities</li>
                                    <li > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg>Protected Data</li>
                                    <li > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" fill="rgba(7,39,86,1)"/></svg> Safe Payment</li>
                                </ul>
                            </p>
                             <div class="row">
                                <div class="col-md-6 client-btn" >
                                    <div class="post-job-container">
                                        <h3>Get Your First Job  <br />Done</h3>
                                        <p>Get Started &nbsp;<i class="icon-material-outline-arrow-forward"></i></p>
                                    </div>
                                </div>

                                <div class="col-md-6" >
                                    <div class="post-job-container">
                                        <h3>Get Me The Best <br />Talent</h3>
                                        <p>Get Started &nbsp;<i class="icon-material-outline-arrow-forward"></i></p>

                                    </div>
                                </div>
                            </div> 

                        </div>
                    </div>

                </div>
            </div>
        </div>
    {/* </div > */}
    
          
            {/* // </div > */}
        {/* // </div > */}
    
    
    
    </section >
        <div className="section category">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div class="section-headline centered margin-bottom-35">

                            <h3 >Explore Categories</h3>
                        </div>
                        <div className="categories-container">
                        <Category Icon={
                         () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.05 14.121L4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.415 1.414 1.415 1.414-1.415 1.415L7.05 14.12zm9.9-11.313l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0zM14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05 6.343 4.928 4.929 6.343l2.121 2.12-1.414 1.415z" fill="rgba(24,160,251,1)"/></svg>
                        }
                        title="Design"
                        description="Artistic Designs for logos, website graphics, social media posts, advertisements,
                        banners, etc. that make your brand stand out" />
                       
                       <Category Icon={
                         () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2zM7 8v2h10V8H7zm0 4v2h10v-2H7z" fill="rgba(24,160,251,1)"/></svg>
                        }
                        title="Writing & Translation"
                        description="Artistic Designs for logos, website graphics, social media posts, advertisements,
                        banners, etc. that make your brand stand out." />

                        <Category Icon={
                          () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(24,160,251,1)"/></svg>
                        }
                        title="Video & Animation"
                        description="Artistic Designs for logos, website graphics, social media posts, advertisements,
                        banners, etc. that make your brand stand out." />


                        <Category Icon={
                            () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" fill="rgba(24,160,251,1)"/></svg>
                        }
                        title="Web & App Development"
                        description="Artistic Designs for logos, website graphics, social media posts, advertisements,
                        banners, etc. that make your brand stand out." />

                        <Category Icon={
                            () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0H24V24H0z"/><path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" fill="rgba(24,160,251,1)"/></svg>
                        }
                        title="Digital Marketing"
                        description="Artistic Designs for logos, website graphics, social media posts, advertisements,
                        banners, etc. that make your brand stand out." />

                        <Category Icon={
                            () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3h13z" fill="rgba(24,160,251,1)"/></svg>
                        }
                        title="Music & Audio"
                        description="Artistic Designs for logos, website graphics, social media posts, advertisements,
                        banners, etc. that make your brand stand out." />                        
                    </div>

                </div>
            </div>
        </div>
        </div>
        <div className="photo-section" >

{/* <!-- Infobox --> */}
<div className="text-content white-font ">
    <div className="container">
        <div className="row">
            <div className="photo-content col-lg-6 col-md-5 col-sm-12">

                <h2  >Get Hired, or Hire Talent.</h2>
                <h2 >Scale up with best talent around.</h2>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of
                    the day, going forward, a new normal that has evolved from generation is on the runway
                    towards.
                </p>
                <div className="d-flex content" >
                    <Buttons buttonText={"Get it Now"} />


                </div>
            </div>
        </div>

    </div>
</div>

{/* <!-- Infobox / End --> */}

</div>
      {/* <Timeline /> */}
      <div>
           {/* <!-- Recent Blog Posts --> */}
    <div class="section padding-top-55 margin-bottom-55 padding-bottom-55 container">
        <div class="container">
            <div class="row blog-row">
                <div class="col-xl-12 col-md-10 col-sm-9">

                    {/* <!-- Section Headline --> */}
                    <div class="section-headline centered margin-top-55 margin-bottom-55">
                        <h3 style={{paddingBottom: "50px"}} >Our Blogs</h3>
                        {/* <!--<a href="pages-blog.html" class="headline-link">View Blog</a> --> */}
                    </div>

                    <div class="row">
                        {/* <!-- Blog Post Item --> */}
                        <div class="col-xl-4 blog-compact-item-container">
                            <a href="https://link.medium.com/UnjoPtlNOib">
                                <img src={blog1} alt=""/>
                                <div class="blog-compact-item">

                                    
                                    <div class="blog-compact-item-content">
                                        
                                        <h3>5 Reasons Why You should hire Freelancers</h3>
                                        <p>We are very well aware of the reasons that professionals have to go for
                                            Freelancing, but today we will discuss why hiring freelancers is an
                                            attractive option for clients and business owners.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* <!-- Blog post Item / End --> */}

                        {/* <!-- Blog Post Item --> */}
                        <div class="col-xl-4  blog-compact-item-container">
                            <a href="https://link.medium.com/IwuEADoNOib">
                                <img src={blog2} alt=""/>
                                <div class="blog-compact-item">

                                    
                                    <div class="blog-compact-item-content">
                                       
                                        <h3>How Freelancing Saved Businesses during the Pandemic.</h3>
                                        <p>In the last year, Freelancing has exploded onto the job market and many
                                            established names are now turning to freelancers for short term as well as
                                            regular work requirements.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* <!-- Blog post Item / End --> */}

                        {/* <!-- Blog Post Item --> */}
                        <div class="col-xl-4 blog-compact-item-container">
                            <a href="https://link.medium.com/4jt6cMpNOib">
                                <img src={blog3} alt=" "/>
                                <div class="blog-compact-item">

                                    
                                    <div class="blog-compact-item-content">
                                       
                                        <h3>How to Grow Your Freelance Career: A Comprehensive Guide</h3>
                                        <p>In this article, let’s explore some simple tips and ways through which
                                            freelancers can expand their network and gain access to more projects and
                                            clients.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* <!-- Blog post Item / End --> */}
                    </div>


                </div>
            </div>
        </div>
    </div>
    {/* <!-- Recent Blog Posts / End --> */}
      </div>
      {/* <div>
        <VTime />
      </div> */}
       <div class="section-headline centered margin-top-0 margin-bottom-25">
                <h3>Trusted By</h3>
            </div>
            <div className="container">
                <img src={brandimg} alt="" />
            </div>
            <div class="container-xl padding-65 margin-bottom-65">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="section-headline centered margin-bottom-15">

                        <h2 >Testimonials</h2>
                    </div>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        {/* <!-- Carousel indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                        </ol>
                        {/* <!-- Wrapper for carousel items --> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="img-box">
                                    <img src={Siddhi} alt="" />

                                </div>
                                <p class="testimonial">It was a very nice experience working with the skillcoup. They are doing a good job. Best of luck for a bright future.</p>
                                <p class="overview"><b>Siddhi Keskar</b>, Content Writer</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Ajinkya} alt="" />

                                </div>
                                <p class="testimonial">Great experience working with skillcoup.</p>
                                <p class="overview"><b>Ajinkya Shinde</b>, Content Writer</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Kalyan} alt="" />

                                </div>
                                <p class="testimonial">We are glad to work with skillcoup. Mediators are very responsive and professional. We await to work further with you.</p>
                                <p class="overview"><b>Kalyan Kumar</b>, Founder at Kubuni Creations</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Mamta} alt="" />

                                </div>
                                <p class="testimonial">I have been working with them for a couple of months only but the service, creativity they have is fabulous. Great Work.</p>
                                <p class="overview"><b>Mamta Bagrecha</b>, Founder at Evren Solutions</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Priya} alt="" />

                                </div>
                                <p class="testimonial">Happy with the deliverables. If you are looking for budget friendly services this is a great place.</p>
                                <p class="overview"><b>Priya Srivastava</b>, Founder at The Ravya</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Shailendra} alt="" />

                                </div>
                                <p class="testimonial">I am happy and satisfied with the freelancers provided by Skillcoup. I get work done on time. I would like to work with skillcoup in future also.</p>
                                <p class="overview"><b>Shailendra Yadav</b>, Founder at Snabay Technologies</p>
                            </div>
                            
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Priyanka} alt="" />

                                </div>
                                <p class="testimonial">They are pretty resonable when it comes to creating social media posts. Yes the designers need to be well informed about the idea but over all my experience has been good with them.</p>
                                <p class="overview"><b>Priyanka Lodha</b>, Founder at Isasakshi</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Varsha} alt="" />

                                </div>
                                <p class="testimonial">A friend recommended me to Skillcoup months back and since then there is no looking back. I have successfully collaborated with you for many projects and the entire process has always been very smooth. Love working with you guys and want to work more. Reviewing because I want others to help themselves and join a place where there is work satisfaction.</p>
                                <p class="overview"><b>Varsha Yadav</b>, Content Writer</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Pranya} alt="" />

                                </div>
                                <p class="testimonial">It was a great experience working with Skillcoup. The clients here are also super freindly.</p>
                                <p class="overview"><b>Pranav Goel</b>, 3D Animator</p>
                            </div>
                        </div>
                        {/* <!-- Carousel controls --> */}
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       <div className=" container container-main section margin-top-0 margin-bottom-65">
                <div className="container typewriter-container">
                    <div className="row typewriter">
                        <div className="col-xl-7 col-md-7 yellow" >
                            <br />

                              <div className="typerwriter-overlay">
                                <p>
                                    <h3 className="margin-top-25">Get Hired, or Hire Talent </h3>
                                    <h3 className="margin-top-25">At no extra commission.</h3>
                                </p> 

                                 <div className="green">
                                 <div className="d-flex content" >
                                    <Buttons buttonText={"Contact Now"}/>


                                </div>


                                </div>  
                               
                            </div>

                        </div>


                    </div>
                </div>
            </div>
      <Footer />
    </>
  );
};
export default HomeComponent;
