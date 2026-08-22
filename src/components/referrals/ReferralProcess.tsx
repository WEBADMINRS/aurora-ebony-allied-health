import { motion } from "framer-motion";
import Container from "../layout/Container";


const steps = [
  {
    number: "01",
    title: "Submit a referral",
    text:
      "Send through participant details and referral information so our team can understand their needs.",
  },
  {
    number: "02",
    title: "Initial discussion",
    text:
      "We connect with you and the participant to discuss goals, requirements and the most suitable supports.",
  },
  {
    number: "03",
    title: "Support begins",
    text:
      "Our clinicians work with the participant to develop personalised strategies focused on meaningful outcomes.",
  },
];


export default function ReferralProcess() {
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
              w-full
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
              REFERRAL PROCESS
            </p>


           <h2
              className="
                mt-10
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.05em]
                text-[#253238]
                md:text-6xl
              "
            >
              A simple process
              <br />
              from referral to support.
            </h2>


             <p
              className="
                mx-auto
                mt-8
                translate-y-6
                max-w-5xl
                text-center
                text-lg
                leading-8
                text-[#547C78]
              "
            >
              We aim to make the referral process clear,
              collaborative and focused on the participant's goals.
            </p>


          </div>





          {/* STEPS */}

          <div
            className="
              mt-16
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
                    text-base
                    leading-8
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