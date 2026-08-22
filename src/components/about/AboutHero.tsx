import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";

import aboutHeroImage from "../../assets/about-hero.png";


export default function AboutHero() {
  return (
    <section
      className="
        bg-[#FAF7F4]
        pt-28
        pb-20
        md:pt-36
        md:pb-32
      "
    >

      <Container>

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >


          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22,1,0.36,1],
            }}
          >


            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#B86F7D]
              "
            >
              ABOUT AURORA EBONY ALLIED HEALTH
            </p>



            <h1
              className="
                mt-10
                max-w-xl
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.04em]
                text-[#253238]
                md:text-6xl
                lg:text-7xl
              "
            >
              Supporting people
              <br />
              through personalised
              <br />
              allied health care.
            </h1>



            <p
              className="
                mt-8
                translate-y-6
                max-w-xl
                text-base
                leading-8
                text-[#547C78]
                md:text-lg
              "
            >
              Aurora Ebony Allied Health provides personalised
              Occupational Therapy and Physiotherapy services
              designed around each person's goals, abilities
              and everyday life.
            </p>



            <div
              className="
                mt-10
                translate-y-6
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >

              <Button
                to="/contact"
                variant="primary"
              >
                Book an Appointment
              </Button>


              <Button
                to="/referrals"
                variant="secondary"
              >
                Make a Referral
              </Button>


            </div>


          </motion.div>





          {/* RIGHT IMAGE */}

          <motion.div
            initial={{
              opacity:0,
              y:20,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            transition={{
              duration:0.9,
              delay:0.2,
            }}
            className="
              flex
              justify-center
            "
          >

            <div
              className="
                aspect-[4/5]
                w-full
                max-w-xl
                overflow-hidden
                rounded-[40px]
              "
            >

              <img
                src={aboutHeroImage}
                alt="Aurora Ebony Allied Health support"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

            </div>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}