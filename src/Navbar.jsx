import React from 'react';

function Heading() {
    return (
        <>
            {/* @section('header-menu') */}
            <header id="header-container" class="fullwidth transparent-header">

                {/* <!-- Header --> */}
                <div id="header">
                    <div class="container">

                        {/* <!-- Left Side Content --> */}
                        <div class="left-side">

                            {/* <!-- Logo --> */}
                            <div id="logo">
                                <a href="{{ url('/') }}"><img src="images/skillcoup_white.png" alt="Loading" /></a>
                            </div>

                        </div>
                        {/* <!-- Left Side Content / End --> */}


                        {/* <!-- Right Side Content / End --> */}
                        <div class="right-side">
                            {/* <!-- Main Navigation --> */}
                            <nav id="navigation">
                                <ul id="responsive">

                                    <li class="@if(request()->is('home*')) active @endif"><a href="{{ url('/') }}">Home</a></li>
                                    <li class="@if(request()->is('About*')) active @endif"><a href="{{ route('about') }}">About</a></li>
                                    <li class="@if(request()->is('Contact*')) active @endif"><a href="{{ route('contact') }}">Contact us</a></li>
                                    <li>
                                        <a href="#sign-in-dialog" class="popup-with-zoom-anim log-in-button"><span style="color:white;">Log In</span></a>
                                    </li>
                                    <li>
                                        {/* <!-- <a href="#" class="ripple-effect btn-fill">Get Started</a> --> */}
                                        <a href="#sign-up-dialog" class="popup-with-zoom-anim log-in-button">
                                            <button id="btn-get-started" class="button ripple-effect btn-get-started" style="padding-top:5px;">Get
                                                Started</button></a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="clearfix"></div>

                            <span class="mmenu-trigger">
                                <button class="hamburger hamburger--collapse bg-dark" type="button">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>

                                </button>

                            </span>

                        </div>
                    </div>
                    {/* <!-- Header / End --> */}
                </div>
            </header>
            <div class="clearfix"></div>

        </>

    );
}
export default Heading;