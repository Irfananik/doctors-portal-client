import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navebar from './pages/Shared/Navebar';
import Appointment from './pages/Appointment/Appointment';
import Reviews from './Reviews/Reviews';
import Contact from './Contact/Contact';
import Login from './Register/Login';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div className="">
      <Navebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
