/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
// importing components
import Home from "./Pages/HomePage";
import Contact from "./Pages/ContactPage";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
