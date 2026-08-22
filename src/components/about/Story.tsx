import { motion } from "framer-motion";
import Container from "../layout/Container";


import storyImage from "../../assets/about-story.png";


export default function Story() {
  return (
    <section
      className="
        bg-white
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
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >


          {/* IMAGE LEFT */}

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
              amount:0.2,
            }}
            transition={{
              duration:0.8,
              ease:[0.22,1,0.36,1],
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
                src={storyImage}
                alt="Aurora Ebony Allied Health providing personalised support"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

            </div>


          </motion.div>





          {/* CONTENT RIGHT */}

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
              delay:0.15,
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
              OUR STORY
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
              Built around
              <br />
              understanding
              <br />
              people first.
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
              At Aurora Ebony Allied Health, we believe
              meaningful support begins with understanding
              each person's unique circumstances, goals
              and aspirations.
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
              Our approach focuses on collaboration,
              respect and practical strategies that support
              greater independence and participation in
              everyday life.
            </p>



            <div
              className="
                mt-10
                h-[2px]
                w-24
                bg-[#B86F7D]
              "
            />


          </motion.div>


        </div>


      </Container>


    </section>
  );
}