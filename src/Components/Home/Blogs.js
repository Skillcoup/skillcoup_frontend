import React from 'react';
import './Blogs.css';
import blog1 from "../../assets/blog1.jpeg";
import blog2 from "../../assets/blog2.jpeg";
import blog3 from "../../assets/blog3.jpeg";
import "./Blogs.css";
const Blogs= () => {
    return(
        <>
        {/*  */}
        
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
        
        
        </>
    );

}
export default Blogs;