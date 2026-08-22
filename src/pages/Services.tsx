import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ServicesHero from "../components/services/ServicesHero";
import OccupationalTherapy from "../components/services/OccupationalTherapy";
import Physiotherapy from "../components/services/Physiotherapy";
import SupportApproach from "../components/services/SupportApproach";
import ReferralPartners from "../components/services/ReferralPartners";

import CTA from "../components/home/CTA";

import SEO from "../components/SEO";


export default function Services() {
  return (
    <>

      <SEO
        title="Allied Health Services | Occupational Therapy & Physiotherapy"
        description="Aurora Ebony Allied Health provides personalised Occupational Therapy and Physiotherapy services designed around each person's goals and everyday life."
      />


      <Navbar />


      <main className="overflow-x-hidden">

        <ServicesHero />

        <OccupationalTherapy />

        <Physiotherapy />

        <SupportApproach />

        <ReferralPartners />

        <CTA />

      </main>


      <Footer />


    </>
  );
}