import footerLogoVertical from "../../assets/vertical-footer.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="border-t border-[#E8D8CC] bg-[#FAF7F4] text-[#253238]">

      <Container>

        <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="py-14 md:py-16"
>


   <div
  className="
    grid
    gap-16
    lg:grid-cols-[1.1fr_0.9fr_0.7fr_1.3fr]
    lg:items-start
  "
>


           {/* BRAND */}

<div className="flex w-full flex-col items-start">

  <div
  className="
    h-[200px]
    overflow-hidden
    flex
    justify-start
  "
>
  <img
    src={footerLogoVertical}
    alt="Aurora Ebony Allied Health"
  className="
  w-[230px]
  object-contain
"
  />
</div>

  <p
    className="
      mt-2
      max-w-md
      text-left
      text-base
      leading-8
      text-[#547C78]
    "
  >
    Supporting individuals and families through personalised
allied health services that empower independence,
confidence and meaningful participation in everyday life.
  </p>

</div>

{/* CONTACT */}

<div className="flex flex-col items-start">

  <p
    className="
      text-center
      text-xs
      font-semibold
      uppercase
      tracking-[0.4em]
      text-[#E8B7C0]
    "
  >
    Contact
  </p>


  <div
    className="
      mt-8
     w-full
max-w-none
      flex
      flex-col
      gap-5
      text-[#547C78]
    "
  >

    <div className="flex items-center gap-5">
      <MapPin
        size={20}
        className="shrink-0 text-[#E8B7C0]"
      />

      <span>
        Victoria, Australia
      </span>
    </div>


    <div className="flex items-center gap-5">
      <Mail
        size={20}
        className="shrink-0 text-[#E8B7C0]"
      />

      <span>
        info@auroraebonycs.com.au
      </span>
    </div>


    <div className="flex items-center gap-5">
      <Phone
        size={20}
        className="shrink-0 text-[#E8B7C0]"
      />

      <span>
        +61 XXX XXX XXX
      </span>
    </div>

  </div>

  <div
  className="
    mt-8
    flex
    items-center
    gap-4
  "
>

  <a
    href="https://www.instagram.com/rsassurancegroup/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[#E8D8CC]
      text-[#547C78]
      transition-all
      hover:border-[#E8B7C0]
      hover:text-[#E8B7C0]
    "
  >
    <FaInstagram size={18} />
  </a>


  <a
    href="https://www.linkedin.com/in/rriyan-salvator/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[#E8D8CC]
      text-[#547C78]
      transition-all
      hover:border-[#E8B7C0]
      hover:text-[#E8B7C0]
    "
  >
    <FaLinkedinIn size={18} />
  </a>

</div>

</div>



            {/* COMPANY */}

            <div className="flex w-full flex-col items-start">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#E8B7C0]
                "
              >
                Company
              </p>


            <div
  className="
    mt-6
    flex
    flex-col
    items-center
    gap-2
    text-[#547C78]
  "
>
  <Link
    to="/about"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    About
  </Link>

  <Link
    to="/services"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    Our Services
  </Link>

 <Link
to="/referrals"
className="
text-base
transition-colors
hover:text-white
"
>
Referrals
</Link>

  <Link
    to="/contact"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    Contact

</Link>
</div>


            </div>





            {/* ACKNOWLEDGEMENT */}

          <div className="flex flex-col items-start">

<p
  className="
    w-full
    max-w-md
    text-center
    text-xs
    font-semibold
    uppercase
    leading-6
    tracking-[0.4em]
    text-[#E8B7C0]
  "
>
  Acknowledgement Of Country
</p>


              <p
                className="
                translate-y-4
                  mt-12
                  text-sm
leading-7
text-[#547C78]
md:text-base
md:leading-8
                "
              >
               Aurora Ebony Allied Health acknowledges the Traditional Custodians
of Country throughout Australia and recognises their continuing
connection to land, waters and community.

We pay our respects to Elders past and present and extend that
respect to all Aboriginal and Torres Strait Islander peoples today.
              </p>


            </div>


          </div>



          {/* LOWER BAR */}

<div
  className="
    mt-20
    border-t
    border-white/10
    pt-8
    flex
    flex-col
    items-start
    gap-8
    text-center
    md:flex-row
    md:items-start
    md:justify-between
    md:text-left
  "
>


            <p
              className="
                text-sm
                text-slate-400
              "
            >
              © {new Date().getFullYear()} Aurora Ebony Allied Health. All rights reserved.
            </p>



            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Occupational Therapy • Physiotherapy • Allied Health
            </p>



<div
  className="
    flex
    items-start
    justify-center
    gap-4
  "
>

              <img
                src="/flags/australian.svg"
                alt="Australian flag"
                className="h-7 w-auto"
              />

              <img
                src="/flags/aboriginal.svg"
                alt="Aboriginal flag"
                className="h-7 w-auto"
              />

              <img
                src="/flags/torres-strait.svg"
                alt="Torres Strait Islander flag"
                className="h-7 w-auto"
              />

            </div>


          </div>


        </motion.div>


      </Container>


    </footer>
  );
}