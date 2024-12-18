import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUpForm from "./components/Form";
import Contact from "./components/Contact";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Footer from "./components/Footer/index";
import NotFound from "./components/Notfound/notfound";
import BookingPage from "./components/BookingPage/BookingPage";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import EventForm from "./components/BookingPage/EventForm";
import EventList from "./components/BookingPage/EventList";
import EventlistVendor from "./components/BookingPage/EventlistVendor";
import Vendors from "./components/Vendors";
import About from "./components/About";
import VendorSignup from "./components/VendorSignup/vendorRegister";
import Vendorlogin from "./components/Login/vendorlog";
import VendorDisplayPage from "./components/Packages";
import AshtonPage from "../Display/ashton";
import ZziwaPage from "../Display/zziwa";
import KemPage from "../Display/kem";
import JanziPage from "../Display/janzi";
import LatitudePage from "../Display/latitude";
import RidesPage from "../Display/rides";
import StratPage from "../Display/strat";

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
          <Route exact path="/bookingpage" element={<BookingPage />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/bookingpage/eventform" element={<EventForm />} />
          <Route exact path="/bookingpage/eventlist" element={<EventList />} />
          <Route
            exact
            path="/bookingpage/EventlistVendor"
            element={<EventlistVendor />}
          />
          <Route exact path="/vendors" element={<Vendors />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/vendorregister" element={<VendorSignup />} />
          <Route exact path="/Vendorlogin" element={<Vendorlogin />} />
          <Route exact path="/vendordisplay" element={<VendorDisplayPage />} />
          <Route exact path="/ashtonpage" element={<AshtonPage />} />
          <Route exact path="/zziwapage" element={<ZziwaPage />} />
          <Route exact path="/kempage" element={<KemPage />} />
          <Route exact path="/janzipage" element={<JanziPage />} />
          <Route exact path="/latitudepage" element={<LatitudePage />} />
          <Route exact path="/ridespage" element={<RidesPage />} />
          <Route exact path="/stratpage" element={<StratPage />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
