import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyAurora from "../components/home/WhyAurora";
import Process from "../components/home/Process";
import OccupationalTherapy from "../components/home/OccupationalTherapy";
import Physiotherapy from "../components/home/Physiotherapy";
import ReferralPartners from "../components/home/ReferralPartners";
import CTA from "../components/home/CTA";

import SEO from "../components/SEO";


export default function Home() {
  return (
    <>
      <SEO
        title="Aurora Ebony Allied Health | Occupational Therapy & Physiotherapy Victoria"
        description="Aurora Ebony Allied Health provides personalised allied health services supporting independence, confidence and quality of life."
      />

      <Navbar />

      <main className="overflow-x-hidden bg-[#FAF7F4] text-[#253238]">

        <Hero />

        <Services />

        <WhyAurora />

        <Process />

        <OccupationalTherapy />

        <Physiotherapy />

        <ReferralPartners />

        <CTA />

      </main>

      <Footer />

    </>
  );
}