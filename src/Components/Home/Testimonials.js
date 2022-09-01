import React from 'react';
import "./Testimonials.css";
import Siddhi from "../../assets/Siddhi.png";
import Ajinkya from "../../assets/Ajinkya.png";
import Priya from "../../assets/Priya.png";
import Priyanka from "../../assets/Priyanka.png";
import Pranya from "../../assets/PranayGoel.png";
import Mamta from "../../assets/Mamta.png";
import Varsha from "../../assets/VarshaYadav.png";
import Kalyan from "../../assets/KalyanKumar.png";
import Shailendra from "../../assets/Shailendra.png";

const Testimonials = () => {
    return (







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












    );
}
export default Testimonials;