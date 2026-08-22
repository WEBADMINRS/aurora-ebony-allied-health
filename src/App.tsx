import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Schema from "./components/Schema";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Referrals from "./pages/Referrals";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";



function ScrollToHash() {

  const { hash } = useLocation();


  useEffect(() => {

    if (hash) {

      const element = document.querySelector(hash);


      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 100);

      }

    } else {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  }, [hash]);


  return null;

}



export default function App() {

  return (
    <>

      <Schema />

      <ScrollToHash />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/about"
          element={<About />}
        />


        <Route
          path="/services"
          element={<Services />}
        />


        <Route
          path="/referrals"
          element={<Referrals />}
        />


        <Route
          path="/booking"
          element={<Booking />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


      </Routes>

    </>
  );
}