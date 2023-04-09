/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
// importing pages
import Home from "./Pages/HomePage";
import Contact from "./Pages/ContactPage";


import EarlyAccessSignup from "./Pages/EarlyAccessSignUp";
import EarlyAccesswhoWeAre from "./Components/EarlyAccessWhoWeAreComponent";

import AboutPage from "./Pages/AboutPage";
import EarlyAccessHomePage from "./Pages/EarlyAccessHomePage";


function App() {
  let isEarlyAccessLive = true;
  return (
    <div className='App'>
      <Routes>
        {!isEarlyAccessLive && (<Route path='/' element={<Home />} />)}
        {isEarlyAccessLive && (<Route path='/' element={<EarlyAccessHomePage />} />)}
        <Route path='/contact' element={<Contact />} />
        <Route path="/about-us" element = {<AboutPage />} />
        <Route path="/early-access-signup" element = {<EarlyAccessSignup />} />
        <Route path="/early-access-who-we-are" element = {<EarlyAccesswhoWeAre />} />

      </Routes>
    </div>
  );
}
export default App;
