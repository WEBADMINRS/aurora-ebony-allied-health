import { motion } from "framer-motion";
import Container from "../layout/Container";

import {
  Heart,
  Stethoscope,
  Users,
} from "lucide-react";


const approaches = [
  {
    icon: Heart,
    title: "Person-Centred Care",
    text:
      "Your goals guide our approach. We take the time to understand what matters most to you and create support that fits your life.",
  },
  {
    icon: Stethoscope,
    title: "Professional Expertise",
    text:
      "Our clinicians combine evidence-informed practice with practical strategies designed around everyday challenges.",
  },
  {
    icon: Users,
    title: "Collaborative Support",
    text:
      "We work alongside participants, families and support networks to create meaningful outcomes together.",
  },
];


export default function Approach() {
  return (
    <section
      className="
        bg-[#315B59]
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
                text-[#E8B7C0]
              "
            >
              OUR APPROACH
            </p>


            <h2
              className="
                mt-8
                font-serif
                text-4xl
                leading-[1]
                tracking-[-0.04em]
                text-white
                md:text-5xl
              "
            >
              Supporting people
              <br />
              beyond therapy.
            </h2>


<p
  className="
    mx-auto
    mt-10
    translate-y-6
    max-w-4xl
    text-lg
    leading-9
    text-white/70
    md:text-xl
  "
>
  We believe effective allied health support comes from
  understanding each person's goals, strengths and
  everyday environment.
</p>

          </div>





          {/* CARDS */}

          <div
            className="
              mt-16
              grid
              gap-8
              md:grid-cols-3
            "
          >

            {approaches.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
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
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E8B7C0]
                    "
                  >

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                      className="text-[#E8B7C0]"
                    />

                  </div>


                  <h3
                    className="
                      mt-8
                      translate-y-4
                      font-serif
                      text-2xl
                      text-white
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-5
                      translate-y-4
                      text-sm
                      leading-7
                      text-white/70
                    "
                  >
                    {item.text}
                  </p>


                </motion.div>

              );

            })}

          </div>


        </motion.div>


      </Container>


    </section>
  );
}