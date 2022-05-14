import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navebar from './pages/Shared/Navebar';
import Appointment from './pages/Appointment/Appointment';
import Reviews from './Reviews/Reviews';
import Contact from './Contact/Contact';
import Login from './Register/Login';
import Footer from './pages/Shared/Footer';
import SignUp from './Register/SignUp';
import RequireAuth from './Register/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
