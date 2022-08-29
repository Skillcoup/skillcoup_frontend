import "./App.css";
import { Routes, Route } from "react-router-dom";
import EmployerFreelancer from "./components/employer_freelancer/EmployerFreelancer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Freelancer from "./components/freelancer/Freelancer";
import Employer1 from "./pages/Employer1.jsx";
import Employer2 from "./pages/Employer2";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer-freelancer" element={<EmployerFreelancer />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/employer1" element={<Employer1 />} />
        <Route path="/employer2" element={<Employer2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
