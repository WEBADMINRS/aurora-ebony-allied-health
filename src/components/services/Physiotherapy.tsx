import { motion } from "framer-motion";
import Container from "../layout/Container";
import physiotherapy from "../../assets/physiotherapy.png";


const points = [
  "Mobility improvement",
  "Strength and conditioning",
  "Exercise programs",
  "Injury prevention strategies",
];


export default function Physiotherapy() {
  return (
  <section
  id="physiotherapy"
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
            items-center
            gap-14
            lg:grid-cols-2
          "
        >


          {/* TEXT LEFT */}

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
                text-[#B86F7D]
              "
            >
              PHYSIOTHERAPY
            </p>


            <h2
              className="
                mt-8
                font-serif
                text-5xl
                leading-[0.95]
                tracking-[-0.04em]
                text-[#253238]
              "
            >
              Helping you move
              <br />
              with confidence.
            </h2>


            <p
              className="
                mt-8
                max-w-lg
                text-base
                leading-8
                text-[#547C78]
              "
            >
              Our Physiotherapy services support movement,
              strength and physical confidence through
              personalised treatment programs designed
              around your goals.
            </p>



            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
              "
            >

              {points.map((point)=>(
   <div
      key={point}
      className="
        flex
        items-center
        gap-4
      "
    >

      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#B86F7D]
          text-sm
          font-medium
          text-white
        "
      >
        ✓
      </span>


      <span
        className="
          text-base
          leading-6
          text-[#253238]
        "
      >
        {point}
      </span>

    </div>
  ))}
</div>


          </motion.div>





          {/* IMAGE RIGHT */}

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
          >

<div
  className="
    aspect-[4/5]
    overflow-hidden
    rounded-[40px]
  "
>
  <img
    src={physiotherapy}
    alt="Physiotherapy support"
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>

          </motion.div>


        </div>


      </Container>


    </section>
  );
}