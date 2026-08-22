import { motion } from "framer-motion";
import Container from "../layout/Container";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function ContactForm() {

  const [searchParams] = useSearchParams();

  const isAssessment =
    searchParams.get("type") === "assessment";


  const [type, setType] = useState("enquiry");


  return (
<section
  id="enquiry"
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
            gap-14
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >


          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
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
              GET IN TOUCH
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
              {isAssessment ? (
                <>
                  Ready to begin
                  <br />
                  your assessment?
                </>
              ) : (
                <>
                  How can we
                  <br />
                  support you?
                </>
              )}
            </h2>


            <p
              className="
                mt-8
                translate-y-6
                max-w-md
                text-base
                leading-8
                text-[#547C78]
              "
            >
              Complete the form and our team will connect
              you with the right support pathway.
            </p>


          </motion.div>





          {/* FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              rounded-[32px]
              bg-white
              p-8
              shadow-sm
              md:p-10
            "
          >


            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#B86F7D]
              "
            >
              I WOULD LIKE TO
            </p>



            <div
              className="
                mt-5
                grid
                gap-4
                sm:grid-cols-2
              "
            >

              <button
                type="button"
                onClick={() => setType("enquiry")}
                className={`
                  rounded-xl
                  border
                  px-5
                  py-4
                  text-sm
                  font-medium
                  transition-all
                  ${
                    type === "enquiry"
                    ? "border-[#B86F7D] bg-[#B86F7D] text-white"
                    : "border-[#253238]/20 text-[#253238]"
                  }
                `}
              >
                Make an Enquiry
              </button>


              <button
                type="button"
                onClick={() => setType("referral")}
                className={`
                  rounded-xl
                  border
                  px-5
                  py-4
                  text-sm
                  font-medium
                  transition-all
                  ${
                    type === "referral"
                    ? "border-[#B86F7D] bg-[#B86F7D] text-white"
                    : "border-[#253238]/20 text-[#253238]"
                  }
                `}
              >
                Make a Referral
              </button>


            </div>





            <div
              className="
                mt-8
                grid
                gap-5
              "
            >

              <input
                placeholder={
                  type === "referral"
                    ? "Referrer Name"
                    : "Your Name"
                }
                className="input-style"
              />


              <input
                placeholder="Email Address"
                className="input-style"
              />


              <input
                placeholder="Phone Number"
                className="input-style"
              />



              {type === "referral" && (

                <>
                  <input
                    placeholder="Organisation"
                    className="input-style"
                  />


                  <input
                    placeholder="Participant Name"
                    className="input-style"
                  />


                  <input
                    placeholder="Service Required"
                    className="input-style"
                  />

                </>

              )}



              <textarea
                placeholder={
                  type === "referral"
                    ? "Brief referral information"
                    : "How can we help?"
                }
                rows={5}
                className="input-style resize-none"
              />



              <button
                className="
                  mt-3
                  rounded-full
                  bg-[#B86F7D]
                  px-8
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  transition-all
                  hover:bg-[#253238]
                "
              >
                {type === "referral"
                  ? "Submit Referral"
                  : isAssessment
                  ? "Book an Assessment"
                  : "Submit Enquiry"}
              </button>


            </div>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}