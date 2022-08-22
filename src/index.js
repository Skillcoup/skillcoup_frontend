import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import App from "./App";
import {BrowserRouter} from "react-router-dom";
// import  Heading from './Navbar';
import { render } from 'react-dom';
import './index.css';
// import {Browserouter} from 'react-router-dom'

ReactDOM.render(

<BrowserRouter>

<Navbar/>
<Hero/>
{/* <App/> */}
</BrowserRouter>,

 
document.getElementById('root')

);
