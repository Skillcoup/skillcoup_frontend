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
                                <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                                <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Ajinkya} alt="" />

                                </div>
                                <p class="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                                <p class="overview"><b>Antonio Moreno</b>, Web Developer</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Kalyan} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Mamta} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Priya} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Shailendra} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Priya} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Priyanka} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Varsha} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
                            </div>
                            <div class="carousel-item">
                                <div class="img-box">
                                    <img src={Pranya} alt="" />

                                </div>
                                <p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                                <p class="overview"><b>Michael Holz</b>, Seo Analyst</p>
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