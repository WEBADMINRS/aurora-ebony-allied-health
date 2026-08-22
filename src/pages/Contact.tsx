import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";


export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        <ContactHero />

        <ContactDetails />

        <ContactForm />

      </main>

      <Footer />
    </>
  );
}