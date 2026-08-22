import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ReferralsHero from "../components/referrals/ReferralsHero";
import WhyRefer from "../components/referrals/WhyRefer";
import ReferralPartners from "../components/referrals/ReferralPartners";
import ReferralProcess from "../components/referrals/ReferralProcess";

import CTA from "../components/home/CTA";


export default function Referrals() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        <ReferralsHero />

        <WhyRefer />

        <ReferralPartners />

        <ReferralProcess />

        <CTA />

      </main>

      <Footer />
    </>
  );
}