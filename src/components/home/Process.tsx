import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Initial Conversation",
    text: "We learn about your needs, goals and current situation.",
  },
  {
    number: "02",
    title: "Assessment",
    text: "Our clinicians complete an assessment tailored to your circumstances.",
  },
  {
    number: "03",
    title: "Personalised Support",
    text: "We develop recommendations and strategies designed around you.",
  },
  {
    number: "04",
    title: "Ongoing Progress",
    text: "We continue working with you to support meaningful improvement.",
  },
];


export default function Process() {
  return (
    <section className="bg-white py-24 md:py-32">

      <Container>

        <Reveal>

          <h2
            className="
              text-center
              font-serif
              text-4xl
              leading-tight
              tracking-[-0.04em]
              text-[#253238]
              md:text-5xl
            "
          >
            Supporting you through every step.
          </h2>


          <div
            className="
              mt-20
              grid
              gap-12
              md:grid-cols-4
              md:gap-8
            "
          >

            {steps.map((step, index) => (

              <Reveal
                key={step.number}
                delay={index * 0.1}
              >

                <div
                  className="
                    relative
                    text-center
                    md:text-left
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-6
                      md:justify-start
                    "
                  >

                    <span
                      className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B86F7D]
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {step.number}
                    </span>


                    {index !== steps.length - 5 && (
                      <span
                        className="
                          hidden
                          text-2xl
                          text-[#547C78]
                          md:block
                        "
                      >
                        →
                      </span>
                    )}

                  </div>


                  <h3
                    className="
                      mt-8
                      translate-y-6
                      font-serif
                      text-xl
                      tracking-[-0.03em]
                      text-[#253238]
                    "
                  >
                    {step.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      translate-y-6
                      text-sm
                      leading-7
                      text-[#547C78]
                    "
                  >
                    {step.text}
                  </p>


                </div>

              </Reveal>

            ))}

          </div>

        </Reveal>


      </Container>

    </section>
  );
}