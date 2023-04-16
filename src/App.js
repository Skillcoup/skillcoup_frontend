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
  let isEarlyAccessLive = process.env.REACT_APP_EARLY_ACCESS;
  return (
    <div className='App overflow-hidden'>
      {!isEarlyAccessLive && (<Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about-us" element={<AboutPage />} />

      </Routes>)}
      {isEarlyAccessLive && (
        <Routes>
          <Route path='/' element={<EarlyAccessHomePage />} />
          <Route path="/early-access" element={<EarlyAccessSignup />} />
          <Route path="/who-we-are" element={<EarlyAccesswhoWeAre />} />
        </Routes>

      )}
    </div>
  );
}
export default App;
