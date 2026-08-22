import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import Approach from "../components/about/Approach";
import Values from "../components/about/Values";
import Commitment from "../components/about/Commitment";

import CTA from "../components/home/CTA";

import SEO from "../components/SEO";


export default function About() {
  return (
    <>

      <SEO
        title="About Aurora Ebony Allied Health"
        description="Learn more about Aurora Ebony Allied Health and our personalised Occupational Therapy and Physiotherapy services."
      />


      <Navbar />


      <main className="overflow-x-hidden bg-white text-[#253238]">

        <AboutHero />

        <Story />

        <Approach />

        <Values />

        <Commitment />

        <CTA />

      </main>


      <Footer />


    </>
  );
}