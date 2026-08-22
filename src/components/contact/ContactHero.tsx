import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import contactHero from "../../assets/contact-hero.png";

export default function ContactHero() {
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
              CONTACT
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
              Let's start a
              <br />
              conversation.
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
              Whether you are looking for Occupational Therapy,
              Physiotherapy support or want to discuss a referral,
              our team is here to help you take the next step.
            </p>


            <div
              className="
                mt-10
              "
            >

 <Button
  to="/contact#enquiry"
>
  Send an Enquiry
</Button>

            </div>


          </motion.div>





          {/* IMAGE */}

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
    src={contactHero}
    alt="Contact Aurora Ebony Allied Health"
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