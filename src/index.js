import React from 'react';
import ReactDOM from 'react-dom';


 import App from "./App";

import {BrowserRouter} from "react-router-dom";
// import  Heading from './Navbar';
// import { render } from 'react-dom';
import './index.css';


ReactDOM.render(
<React.StrictMode>
<BrowserRouter>


<App/>
</BrowserRouter>,
</React.StrictMode>,
 
document.getElementById('root')

);
