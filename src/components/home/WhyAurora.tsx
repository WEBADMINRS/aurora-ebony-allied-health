import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import {
  Heart,
  GraduationCap,
  Users,
} from "lucide-react";


const values = [
  {
    icon: Heart,
    title: "Person-Centred Care",
    text: "Your goals guide our approach. We take the time to understand your needs and create support that fits your life.",
  },
  {
    icon: GraduationCap,
    title: "Professional Expertise",
    text: "Our clinicians combine clinical knowledge with practical understanding of everyday challenges.",
  },
  {
    icon: Users,
    title: "Collaborative Support",
    text: "We work alongside participants, families and support networks to achieve meaningful outcomes.",
  },
];


export default function WhyAurora() {
  return (
    <section
      className="
        bg-[#547C78]
        py-24
        text-white
        md:py-32
      "
    >

      <Container>

        <Reveal>


          <div
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >



            <h2
              className="
                mt-8
                font-serif
                text-4xl
                leading-tight
                tracking-[-0.04em]
                text-white
                md:text-5xl
              "
            >
              Why Aurora Ebony Allied Health?
            </h2>


          </div>




          <div
  className="
    mx-auto
    mt-20
    grid
    max-w-9xl
    gap-16
    md:grid-cols-3
    md:gap-50
  "
>

            {values.map((value, index) => {

              const Icon = value.icon;

              return (

                <Reveal
                  key={value.title}
                  delay={index * 0.1}
                >

                  <div
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
                        border-white/30
                      "
                    >

                      <Icon
                        size={28}
                        strokeWidth={1.5}
                      />

                    </div>



                    <h3
                      className="
                        mt-8
                        translate-y-1
                        font-serif
                        text-2xl
                        tracking-[-0.03em]
                      "
                    >
                      {value.title}
                    </h3>



                    <p
                      className="
                        mx-auto
                        translate-y-5
                        mt-6                 
                        max-w-xs
                        text-m
                        leading-7
                        text-white/80
                      "
                    >
                      {value.text}
                    </p>


                  </div>


                </Reveal>

              );

            })}


          </div>


        </Reveal>


      </Container>


    </section>
  );
}