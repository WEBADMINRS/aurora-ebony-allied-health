import { motion } from "framer-motion";
import Container from "../layout/Container";

import commitmentImage from "../../assets/about-commitment.png";


export default function Commitment() {
  return (
    <section
      className="
        bg-[#FAF7F4]
        py-20
        md:py-32
      "
    >

      <Container>

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >


          {/* CONTENT LEFT */}

          <motion.div
            initial={{
              opacity:0,
              y:30,
            }}
            whileInView={{
              opacity:1,
              y:0,
            }}
            viewport={{
              once:true,
              amount:0.2,
            }}
            transition={{
              duration:0.8,
              ease:[0.22,1,0.36,1],
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
              OUR COMMITMENT
            </p>


            <h2
              className="
                mt-8
                max-w-xl
                font-serif
                text-4xl
                leading-[1]
                tracking-[-0.04em]
                text-[#253238]
                md:text-5xl
              "
            >
              Creating meaningful
              <br />
              outcomes beyond
              <br />
              therapy.
            </h2>


            <p
              className="
                mt-8
                translate-y-6
                max-w-xl
                text-base
                leading-8
                text-[#547C78]
              "
            >
              Our commitment extends beyond clinical
              sessions. We focus on practical strategies
              that help people participate more confidently
              in everyday activities.
            </p>


            <p
              className="
                mt-5
                translate-y-6
                max-w-xl
                text-base
                leading-8
                text-[#547C78]
              "
            >
              Through personalised support and
              collaborative care, we aim to help each
              person work towards goals that are
              meaningful to them.
            </p>



            {/* POINTS */}

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
              "
            >

             <div
  className="
    mt-12
    grid
    gap-5
  "
>

  {[
    "Personalised approach",
    "Goal-focused support",
    "Practical everyday strategies",
  ].map((item) => (

    <div
      key={item}
      className="
        group
        flex
        items-center
        gap-5
      "
    >

      <span
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-[#B86F7D]/10
          font-serif
          text-sm
          text-[#B86F7D]
          transition-all
          duration-300
          group-hover:bg-[#B86F7D]
          group-hover:text-white
        "
      >
        →
      </span>


      <span
        className="
          font-serif
          text-xl
          tracking-[-0.02em]
          text-[#253238]
        "
      >
        {item}
      </span>

    </div>

  ))}

</div>

            </div>


          </motion.div>





          {/* IMAGE RIGHT */}

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
              amount:0.2,
            }}
            transition={{
              duration:0.8,
              ease:[0.22,1,0.36,1],
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
                src={commitmentImage}
                alt="Aurora Ebony Allied Health supporting independence"
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