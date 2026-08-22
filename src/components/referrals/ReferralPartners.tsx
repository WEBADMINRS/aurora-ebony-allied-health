import { motion } from "framer-motion";
import Container from "../layout/Container";

import {
  Users,
  ClipboardCheck,
  HeartPulse,
  Building2,
} from "lucide-react";


const partners = [
  {
    icon: Users,
    title: "Support Coordinators",
    text:
      "We collaborate with support coordinators to understand participant goals and connect them with suitable allied health services.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan Managers",
    text:
      "We work alongside plan managers to support clear communication and a smooth service experience.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Providers",
    text:
      "We partner with healthcare professionals to support coordinated care and continuity between services.",
  },
  {
    icon: Building2,
    title: "Community Organisations",
    text:
      "We build relationships with organisations that share our commitment to improving access and participation.",
  },
];


export default function ReferralPartners() {
  return (
    <section
      className="
        bg-[#FAF7F4]
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
              WHO WE WORK WITH
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
              Building strong
              <br />
              support networks.
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
              Aurora Ebony Allied Health values strong
              partnerships with professionals and
              organisations who support participant outcomes.
            </p>


          </div>





          {/* PARTNERS */}

          <div
            className="
              mt-16
              grid
              gap-10
              md:grid-cols-2
            "
          >

            {partners.map((item)=>{

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
                    flex
                    gap-6
                    border-t
                    border-[#253238]/10
                    pt-8
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B86F7D]
                    "
                  >

                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-[#B86F7D]"
                    />

                  </div>


                  <div>

                    <h3
                      className="
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
                        mt-4
                        text-base
                        leading-8
                        text-[#547C78]
                      "
                    >
                      {item.text}
                    </p>


                  </div>


                </motion.div>

              );

            })}

          </div>


        </motion.div>


      </Container>

    </section>
  );
}