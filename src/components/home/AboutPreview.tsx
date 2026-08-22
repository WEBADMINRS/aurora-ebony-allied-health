import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";


export default function AboutPreview() {
  return (
    <section className="bg-[#FAF7F4]">

      <Container>

        <Reveal>

          <div
            className="
              grid
              items-center
              gap-12
              py-20
              md:py-28
              lg:grid-cols-2
              lg:gap-20
            "
          >

            {/* IMAGE */}

            <div
              className="
                aspect-[4/3]
                overflow-hidden
                bg-[#E8D8CC]
              "
            >

              <div
                className="
                  flex
                  h-full
                  items-center
                  justify-center
                "
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.4em]
                    text-[#547C78]
                  "
                >
                  Aurora Ebony Image
                </p>

              </div>

            </div>



            {/* CONTENT */}

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#B86F7D]
                "
              >
                ABOUT AURORA EBONY
              </p>



              <h2
                className="
                  mt-8
                  max-w-xl
                  font-serif
                  text-4xl
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#253238]
                  md:text-5xl
                "
              >
                Part of the
                <br />
                Aurora Ebony family.
              </h2>



              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-[#547C78]
                "
              >
                Aurora Ebony Allied Health is built around the belief that
                quality care begins with understanding the individual behind
                the support needs.
              </p>



              <p
                className="
                  mt-4
                  max-w-xl
                  text-base
                  leading-8
                  text-[#547C78]
                "
              >
                We work alongside participants, families and support networks
                to provide personalised Occupational Therapy and Physiotherapy
                services that encourage independence, confidence and meaningful
                progress.
              </p>



              <div className="mt-8">

                <Button
                  to="/about"
                >
                  Learn More About Us
                </Button>

              </div>


            </div>


          </div>


        </Reveal>


      </Container>

    </section>
  );
}