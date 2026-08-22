import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import referralsHero from "../../assets/referrals-hero.png";

export default function ReferralsHero() {
  return (
    <section
      className="
        bg-[#FAF7F4]
        pt-32
        pb-20
        md:pt-44
        md:pb-32
      "
    >

      <Container>

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
          "
        >


          {/* LEFT */}

          <motion.div
            initial={{
              opacity:0,
              x:-30,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              duration:0.8,
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
              REFERRALS
            </p>


            <h1
              className="
                mt-8
                max-w-xl
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.05em]
                text-[#253238]
                md:text-6xl
              "
            >
              Connecting people
              <br />
              with the right support.
            </h1>


            <p
              className="
                mt-8
                translate-y-6
                max-w-lg
                text-base
                leading-8
                text-[#547C78]
              "
            >
              Aurora Ebony Allied Health works alongside
              support coordinators, plan managers,
              healthcare providers and families to connect
              participants with personalised allied health
              support.
            </p>


            <div
              className="
                mt-10
                translate-y-6
              "
            >

              <Button
                to="/contact"
              >
                Make a Referral
              </Button>

            </div>


          </motion.div>





          {/* IMAGE PLACEHOLDER */}

          <motion.div
            initial={{
              opacity:0,
              x:30,
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            transition={{
              duration:0.8,
            }}
          >

<div
  className="
    aspect-[4/5]
    overflow-hidden
    rounded-[40px]
  "
>
  <img
    src={referralsHero}
    alt="Aurora Ebony Allied Health referral support"
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>

          </motion.div>


        </div>


      </Container>

    </section>
  );
}