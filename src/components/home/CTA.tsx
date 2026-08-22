import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

import {
  Heart,
  UserRound,
  Stethoscope,
  Users,
} from "lucide-react";


const benefits = [
  {
    icon: Heart,
    text: "Personalised care",
  },
  {
    icon: UserRound,
    text: "Experienced clinicians",
  },
  {
    icon: Stethoscope,
    text: "NDIS focused",
  },
  {
    icon: Users,
    text: "Meaningful outcomes",
  },
];


export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#D49AA7]
        py-16
        md:py-20
      "
    >

      <Container>

        <Reveal>

<div
  className="
    grid
    items-center
    gap-12
    lg:grid-cols-[1.4fr_0.6fr]
  "
>


            {/* LEFT */}

            <div className="text-center md:text-left">

              <h2
                className="
                  max-w-md
                  font-serif
                  text-xl
                  leading-[1]
                  tracking-[0em]
                  text-white
                  md:text-4xl
                "
              >
                Ready to start your
                <br />
                allied health journey?
              </h2>


              <p
                className="
                  mt-5
                  translate-y-3
                  max-w-lg
                  text-md
                  leading-6
                  text-white/80
                "
              >
                Whether you are looking for Occupational Therapy,
                Physiotherapy support or want to discuss your needs,
                our team is here to help.
              </p>


             <div
  className="
    mt-7
    translate-y-4
    flex
    justify-center
    gap-3
    md:justify-start
  "
>

<Button
  to="/contact"
  variant="cta"
>
  Contact Our Team
</Button>


              </div>


            </div>



            {/* RIGHT */}

<div
  className="
    grid
    grid-cols-2
    items-center
    gap-4
    md:gap-8
  "
>


              <div
                className="
                  flex
                  flex-col
                  gap-4
                "
              >

                {benefits.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.text}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      <Icon
                        size={25}
                        strokeWidth={1.5}
                        className="text-white"
                      />

                      <span
                        className="
                          text-sm
                          text-white
                        "
                      >
                        {item.text}
                      </span>

                    </div>

                  );

                })}

              </div>



<div
className="
text-right
"
>

<p
className="
script-font
text-3xl
text-right
leading-tight
text-white/90
"
>
                  People.
                  <br />
                  Potential.
                  <br />
                  A Brighter
                  <br />
                  Tomorrow.
                </p>


                <div
                  className="
                    ml-auto
                    mt-3
                    h-[1px]
                    w-24
                    rotate-[-8deg]
                    bg-white
                  "
                />

              </div>


            </div>


          </div>


        </Reveal>


      </Container>


    </section>
  );
}