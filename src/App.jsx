import {   BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./components/Home"
import SignUpForm from "./components/Form"
import Contact from "./components/Contact"
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Footer from "./components/Footer/index";
import NotFound from "./components/Notfound/notfound"
import BookingPage from "./components/BookingPage/BookingPage";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
           <Route exact path="/register/organization" element={<Register />} />
          <Route exact path="/register/SignUpForm" element={<SignUpForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/bookingpage"element={<BookingPage />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

