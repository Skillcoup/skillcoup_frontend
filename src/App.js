/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
// importing pages
import Home from "./Pages/HomePage";
import Contact from "./Pages/ContactPage";
import AboutPage from "./Pages/EarlyAccessSignUp";
import EarlyAccessSignup from "./Pages/EarlyAccessSignUp";
import EarlyAccesswhoWeAre from "./Components/EarlyAccessWhoWeAreComponent";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about-us" element = {<AboutPage />} />
        <Route path="/early-access-signup" element = {<EarlyAccessSignup />} />
        <Route path="/early-access-who-we-are" element = {<EarlyAccesswhoWeAre />} />
      </Routes>
    </div>
  );
}
export default App;
