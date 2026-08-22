import { motion } from "framer-motion";
import Container from "../layout/Container";

import {
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";


const reasons = [
  {
    icon: HeartHandshake,
    title: "Participant Focused",
    text:
      "We take the time to understand each person's goals, preferences and circumstances to provide meaningful support.",
  },
  {
    icon: Target,
    title: "Goal Driven Support",
    text:
      "Our clinicians focus on practical outcomes that help participants build confidence and independence.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    text:
      "We work alongside support coordinators, families and other professionals to create coordinated care.",
  },
];


export default function WhyRefer() {
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
              WHY REFER TO AURORA
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
              Supporting better
              <br />
              outcomes together.
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
              We believe the strongest outcomes come from
              genuine collaboration between participants,
              families and their support networks.
            </p>


          </div>





          {/* REASONS */}

          <div
            className="
              mt-16
              grid
              gap-12
              md:grid-cols-3
            "
          >

            {reasons.map((item)=>{

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
                    text-center
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B86F7D]
                    "
                  >

                    <Icon
                      size={24}
                      strokeWidth={1.4}
                      className="text-[#B86F7D]"
                    />

                  </div>


                  <h3
                    className="
                      mt-8
                      font-serif
                      text-2xl
                      tracking-[-0.03em]
                      text-[#253238]
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mx-auto
                      mt-6
                      max-w-sm
                      text-base
                      leading-8
                      text-[#547C78]
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