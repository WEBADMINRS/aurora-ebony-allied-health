import { motion } from "framer-motion";
import Container from "../layout/Container";
import occupationalTherapy from "../../assets/occupational-therapy.png";


const points = [
  "Functional assessments",
  "Daily living skills",
  "Assistive technology recommendations",
  "Goal-focused strategies",
];


export default function OccupationalTherapy() {
  return (
  <section
  id="occupational-therapy"
  className="
    bg-white
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


          {/* IMAGE */}

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

<div
  className="
    aspect-[4/5]
    overflow-hidden
    rounded-[40px]
  "
>
  <img
    src={occupationalTherapy}
    alt="Occupational Therapy support"
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>

          </motion.div>




          {/* TEXT */}

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

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#B86F7D]
              "
            >
              OCCUPATIONAL THERAPY
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
              Helping people
              <br />
              live more independently.
            </h2>


            <p
              className="
                mt-8
                translate-y-6
                text-base
                leading-8
                text-[#547C78]
              "
            >
              Occupational Therapy helps people develop
              skills, confidence and strategies to
              participate more fully in everyday activities.
            </p>



<div
  className="
    mt-10
    grid
    gap-x-10
    gap-y-5
    sm:grid-cols-2
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


        </div>


      </Container>

    </section>
  );
}