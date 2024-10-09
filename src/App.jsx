import {   BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import SignUpForm from "./components/Form"
import Contact from "./components/Contact"
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Footer from "./components/Footer/index";
import NotFound from "./components/Notfound/notfound"
import BookingPage from "./components/BookingPage/BookingPage";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import EventForm from "./components/BookingPage/EventForm";
import EventList from "./components/BookingPage/EventList";
import Vendors from "./components/Vendors";
import About from "./components/About";
import VendorSignup from "./components/VendorSignup/vendorRegister"
import Vendorlogin from "./components/Login/vendorlog"





function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
           <Route exact path="/register" element={<Register />} />
          <Route exact path="/register/SignUpForm" element={<SignUpForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/bookingpage"element={<BookingPage />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/bookingpage/eventform" element={<EventForm />} />
          <Route exact path="/bookingpage/eventlist" element={<EventList />}  />
          <Route exact path="/vendors" element={<Vendors />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/vendorregister" element={<VendorSignup />} />
          <Route exact path="/Vendorlogin" element={<Vendorlogin />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

