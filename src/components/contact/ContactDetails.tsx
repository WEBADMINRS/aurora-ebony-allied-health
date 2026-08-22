import { motion } from "framer-motion";
import Container from "../layout/Container";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";


const details = [
  {
    icon: MapPin,
    title: "Location",
    text: "Victoria, Australia",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@auroraebonycs.com.au",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+61 XXX XXX XXX",
  },
];


export default function ContactDetails() {
  return (
    <section
      className="
        bg-white
        py-20
        md:py-28
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


          <div
            className="
              grid
              gap-10
              md:grid-cols-3
            "
          >

            {details.map((item)=>{

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-5
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

                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.35em]
                        text-[#B86F7D]
                      "
                    >
                      {item.title}
                    </p>


                    <p
                      className="
                        mt-3
                        text-base
                        leading-7
                        text-[#253238]
                      "
                    >
                      {item.text}
                    </p>


                  </div>


                </div>

              );

            })}

          </div>


        </motion.div>


      </Container>

    </section>
  );
}