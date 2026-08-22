import { motion } from "framer-motion";
import Container from "../layout/Container";


const values = [
  {
    number: "01",
    title: "Respect",
    text:
      "We value every person's experiences, choices and goals, ensuring support is delivered with dignity and understanding.",
  },
  {
    number: "02",
    title: "Understanding",
    text:
      "We take the time to listen, understand individual circumstances and create support that genuinely fits.",
  },
  {
    number: "03",
    title: "Empowerment",
    text:
      "We support individuals to build confidence, independence and greater participation in everyday life.",
  },
  {
    number: "04",
    title: "Collaboration",
    text:
      "We work together with participants, families and support networks to achieve meaningful outcomes.",
  },
];


export default function Values() {
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
              max-w-3xl
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
              OUR VALUES
            </p>


            <h2
              className="
                mt-8
                font-serif
                text-4xl
                leading-[1]
                tracking-[-0.04em]
                text-[#253238]
                md:text-5xl
              "
            >
              What guides
              <br />
              our approach.
            </h2>


          </div>





          {/* VALUES */}

          <div
            className="
              mt-16
              grid
              gap-10
              md:grid-cols-2
            "
          >

            {values.map((item) => (

              <motion.div
                key={item.number}
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
                  border-t
                  border-[#253238]/10
                  pt-8
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-6
                  "
                >

                  <span
                    className="
                      font-serif
                      text-4xl
                      text-[#B86F7D]
                    "
                  >
                    {item.number}
                  </span>


                  <div>

                    <h3
                      className="
                        font-serif
                        text-3xl
                        text-[#253238]
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-4
                        translate-y-4
                        max-w-md
                        text-sm
                        leading-7
                        text-[#547C78]
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>


        </motion.div>


      </Container>

    </section>
  );
}