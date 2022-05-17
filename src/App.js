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
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import AllUsers from './pages/Dashboard/AllUsers';
import RequireAdmin from './Register/RequireAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor';
import ManageDoctors from './pages/Dashboard/ManageDoctors';

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
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointment/>}/>
          <Route path="myreview" element={<MyReview/>}/>
          <Route path="allusers" element={<RequireAdmin><AllUsers/></RequireAdmin>}/>
          <Route path="adddoctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>}/>
          <Route path="managedoctor" element={<RequireAdmin><ManageDoctors/></RequireAdmin>}/>
        </Route>
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
