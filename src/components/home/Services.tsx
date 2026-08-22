import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

import occupationalTherapyCard from "../../assets/occupational-therapy-card.png";
import physiotherapyCard from "../../assets/physiotherapy-card.png";
import podiatrySpeechCard from "../../assets/podiatry-speech-card.png";


const services = [
  {
    title: "Occupational Therapy",
    text:
      "Helping people participate more confidently in everyday activities, develop independence and achieve their personal goals.",
    image: occupationalTherapyCard,
    link: "/services#occupational-therapy",
  },
  {
    title: "Physiotherapy",
    text:
      "Supporting movement, strength, mobility and physical confidence through personalised therapy programs.",
    image: physiotherapyCard,
    link: "/services#physiotherapy",
  },
  {
    title: "Podiatry & Speech Pathology",
    text:
      "Expanding our allied health services to support more individuals and families.",
    image: podiatrySpeechCard,
    comingSoon: true,
    link: "/services",
  },
];


export default function Services() {
  return (
    <section className="bg-white py-24 md:py-32">

      <Container>

        <Reveal>

          {/* INTRO */}

          <div
            className="
              grid
              gap-10
              lg:grid-cols-2
              lg:items-start
            "
          >

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
                OUR SERVICES
              </p>


              <h2
                className="
                  mt-10
                  max-w-lg
                  font-serif
                  text-5xl
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#253238]
                  md:text-6xl
                "
              >
                Care that starts
                <br />
                with understanding.
              </h2>

            </div>



            <div>

              <p
                className="
                  max-w-xl
                  text-base
                  leading-8
                  text-[#547C78]
                  md:text-lg
                "
              >
                Not every person needs the same support. Our approach begins
                by understanding your goals, challenges and what matters most
                to you. Through personalised assessment and evidence-informed
                therapy, we work alongside you to create meaningful pathways
                toward greater independence.
              </p>

            </div>


          </div>



          {/* SERVICE CARDS */}


          <div
            className="
              mt-14
              grid
              gap-6
              md:grid-cols-3
            "
          >

            {services.map((service, index) => (

              <Reveal
                key={service.title}
                delay={index * 0.1}
              >

                <div
                  className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#E8D8CC]
                    bg-[#FAF7F4]
                  "
                >


                  {/* IMAGE PLACEHOLDER */}

                 <div
  className="
    aspect-[16/10]
    overflow-hidden
  "
>
  <img
    src={service.image}
    alt={service.title}
    className="
      h-full
      w-full
      object-cover
      transition-transform
      duration-500
      hover:scale-105
    "
  />
</div>


                  <div className="p-6">


                    {service.comingSoon && (

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-[#F4E6E8]
                          px-3
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#B86F7D]
                        "
                      >
                        Coming Soon
                      </span>

                    )}



                    <h3
                      className="
                        mt-4
                        font-serif
                        text-2xl
                        tracking-[-0.04em]
                        text-[#253238]
                      "
                    >
                      {service.title}
                    </h3>



                    <p
                      className="
                        mt-4
                        text-sm
                        leading-7
                        text-[#547C78]
                      "
                    >
                      {service.text}
                    </p>



                    <button
                      className="
                        mt-6
                        text-sm
                        font-semibold
                        text-[#B86F7D]
                      "
                    >
                      Learn More →
                    </button>


                  </div>


                </div>


              </Reveal>

            ))}


          </div>


        </Reveal>


      </Container>


    </section>
  );
} 