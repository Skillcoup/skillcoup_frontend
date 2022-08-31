/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
// importing pages
import Home from "./Pages/HomePage";
import Contact from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about-us" element = {<AboutPage />} />
      </Routes>
    </div>
  );
}
export default App;
