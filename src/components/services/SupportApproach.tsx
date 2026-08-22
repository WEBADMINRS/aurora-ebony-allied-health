import { motion } from "framer-motion";
import Container from "../layout/Container";


const steps = [
  {
    number: "01",
    title: "Understand your goals",
    text:
      "We take the time to understand your needs, priorities and what meaningful progress looks like for you.",
  },
  {
    number: "02",
    title: "Create your plan",
    text:
      "Our clinicians develop personalised strategies designed around your abilities, lifestyle and goals.",
  },
  {
    number: "03",
    title: "Support your progress",
    text:
      "We work alongside you and your support network to build confidence and encourage independence.",
  },
];


export default function SupportApproach() {
  return (
    <section
      className="
        bg-white
        py-20
        md:py-32
      "
    >

      <Container>

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
          }}
        >


          {/* HEADER */}

          <div
            className="
              mx-auto
              max-w-4xl
              text-center
            "
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
              HOW WE SUPPORT YOU
            </p>


            <h2
              className="
                mt-8
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.05em]
                text-[#253238]
                md:text-6xl
              "
            >
              A personalised approach
              <br />
              from start to finish.
            </h2>


            <p
              className="
                mx-auto
                mt-8
                translate-y-6
                max-w-4xl
                text-center
                text-lg
                leading-8
                text-[#547C78]
              "
            >
              Every person's journey is different.
              Our approach focuses on understanding,
              planning and supporting meaningful outcomes.
            </p>


          </div>





          {/* STEPS */}

          <div
            className="
              mt-20
              grid
              gap-10
              md:grid-cols-3
            "
          >

            {steps.map((step) => (

              <motion.div
                key={step.number}
                initial={{
                  opacity:0,
                  y:20,
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
                  duration:0.6,
                }}
                className="
                  group
                  relative
                  border-t
                  border-[#253238]/10
                  pt-8
                "
              >


                <span
                  className="
                    font-serif
                    text-5xl
                    text-[#B86F7D]
                  "
                >
                  {step.number}
                </span>


                <h3
                  className="
                    mt-6
                    max-w-xs
                    font-serif
                    text-3xl
                    leading-tight
                    tracking-[-0.04em]
                    text-[#253238]
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                    mt-5
                    max-w-sm
                    text-base
                    leading-7
                    text-[#547C78]
                  "
                >
                  {step.text}
                </p>


              </motion.div>

            ))}

          </div>


        </motion.div>


      </Container>

    </section>
  );
}