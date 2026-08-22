import { motion } from "framer-motion";
import Container from "../layout/Container";
import servicesHero from "../../assets/services-hero.png";


export default function ServicesHero() {
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
              OUR SERVICES
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
              Personalised support
              <br />
              designed around you.
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
              Aurora Ebony Allied Health provides
              personalised Occupational Therapy and
              Physiotherapy services focused on
              independence, confidence and meaningful
              participation in everyday life.
            </p>


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
    src={servicesHero}
    alt="Aurora Ebony Allied Health services"
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