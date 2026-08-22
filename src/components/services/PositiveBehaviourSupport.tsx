import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import behaviourSupportImage from "../../assets/positive-behaviour-support-card.png";


export default function PositiveBehaviourSupport() {
  return (
    <>

   

<section
  id="positive-behaviour-support"
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
              lg:grid-cols-2
            "
          >

            <Reveal>

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.45em]
                text-[#B86F7D]
              "
            >
                POSITIVE BEHAVIOUR SUPPORT
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
                Supporting people through
                <br />
                understanding and connection.
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
                Our team provides Positive Behaviour Support that is
                focused on understanding individual needs, building confidence
                and creating practical strategies that support meaningful
                participation in everyday life.
              </p>


              <div className="mt-10">

                <Button
                  to="/contact"
                >
                  Book an Assessment
                </Button>

              </div>


            </Reveal>



            <Reveal delay={0.2}>

              <div
                className="
                  overflow-hidden
                  rounded-[40px]
                "
              >

                <img
                  src={behaviourSupportImage}
                  alt="Positive Behaviour Support practitioner working alongside a participant in a home environment"
                     className="
      h-full
      w-full
      object-cover
                  "
                />

              </div>

            </Reveal>


          </div>


        </Container>


      </section>

    </>
  );
}

