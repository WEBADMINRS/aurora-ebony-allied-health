import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";

import {
  Users,
  ClipboardCheck,
  Hospital,
  Building2,
} from "lucide-react";


const partners = [
  {
    icon: Users,
    title: "Support Coordinators",
    text: "Collaborative support planning and participant-focused care.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan Managers",
    text: "Working together to support smooth service coordination.",
  },
  {
    icon: Hospital,
    title: "Healthcare Providers",
    text: "Connecting with hospitals and health professionals.",
  },
  {
    icon: Building2,
    title: "Community Organisations",
    text: "Building partnerships that improve access to support.",
  },
];


export default function ReferralPartners() {
  return (
    <section
      className="
        bg-[#315B59]
        py-20
        md:py-32
      "
    >

      <Container>

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
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
                text-[#E8B7C0]
              "
            >
              REFERRAL PARTNERS
            </p>


            <h2
              className="
                mt-8
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                md:text-6xl
              "
            >
              Working together
              <br />
              to support better
              <br />
              outcomes.
            </h2>


            <p
              className="
                mt-8
                max-w-lg
                text-base
                leading-8
                text-white/70
              "
            >
              Aurora Ebony Allied Health works
              collaboratively with support coordinators,
              plan managers, healthcare providers and
              community organisations to provide
              coordinated support.
            </p>


            <div className="mt-10">

              <Button
                to="/referrals"
                variant="secondary"
              >
                Make a Referral
              </Button>

            </div>


          </motion.div>





          {/* RIGHT */}

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
            className="
              grid
              gap-8
              sm:grid-cols-2
            "
          >

            {partners.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    flex
                    gap-5
                    border-b
                    border-white/10
                    pb-8
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
                      border-[#E8B7C0]
                    "
                  >

                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-[#E8B7C0]"
                    />

                  </div>


                  <div>

                    <h3
                      className="
                        font-serif
                        text-xl
                        text-white
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-white/60
                      "
                    >
                      {item.text}
                    </p>


                  </div>


                </div>

              );

            })}

          </motion.div>


        </div>


      </Container>


    </section>
  );
}