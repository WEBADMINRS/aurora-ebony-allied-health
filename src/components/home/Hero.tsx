import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/hero-allied-health-session.png";
import {
  UsersRound,
} from "lucide-react";


export default function Hero() {
  return (
    <section
      className="
        bg-[#FAF7F4]
        pt-28
        pb-20
        md:pt-36
        md:pb-32
      "
    >

      <Container>

<div
className="
  grid
  items-center
  gap-12
  lg:grid-cols-[0.9fr_1.1fr]
  lg:gap-16
"
>


          {/* LEFT CONTENT */}

          <motion.div
  className="lg:order-1"
            initial={{
              opacity:0,
              y:30,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
            transition={{
              duration:0.8,
              ease:[0.22,1,0.36,1],
            }}
          >




            <h1
              className="
                max-w-xl
                font-serif
                text-5xl
                leading-[1]
                tracking-[-0.03em]
                text-[#253238]
                md:text-6xl
                lg:text-7xl
              "
            >
              Helping people build
              <br />
              independence,
              <br />
              confidence and
              <br />
              quality of life.
            </h1>



            <p
              className="
                mt-8
                translate-y-6
                max-w-xl
                text-base
                leading-8
                text-[#547C78]
                md:text-lg
              "
            >
              Aurora Ebony Allied Health provides personalised
              Occupational Therapy and Physiotherapy services
              designed around each person's goals, abilities
              and everyday life.
            </p>
            <div className="mt-10 translate-y-6 flex flex-col gap-4 sm:flex-row">

              <Button
                to="/contact"
              >
                Book an Appointment 
              </Button>


              <Button
                variant="secondary"
                to="/referrals"
              >
                Make a Referral
              </Button>


            </div>




            <div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >

<div
  className="
    flex
    translate-y-6
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-[#B86F7D]
  "
>
  <UsersRound
    size={18}
    strokeWidth={1.5}
    className="text-[#B86F7D]"
  />
</div>


              <p
                className="
                  max-w-m
                  translate-y-6
                  text-m
                  leading-6
                  text-[#547C78]
                "
              >
                Supporting NDIS participants, families and
                communities across Victoria.
              </p>


            </div>


          </motion.div>





{/* HERO IMAGE */}

<motion.div
  className="
    order-2
    lg:order-2
    flex
    justify-center
  "
>
  
  <div
    className="
      aspect-[4/5]
      max-h-[520px]
      w-full
      max-w-lg
      overflow-hidden
      rounded-[32px]
    "
  >

    <img
      src={heroImage}
      alt="Aurora Ebony Allied Health occupational therapy session"
      className="
        h-full
        w-full
        object-cover
        object-top
        md:object-center
      "
    />

  </div>

</motion.div>

        </div>


      </Container>


    </section>
  );
}