import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import physiotherapyHome from "../../assets/physiotherapy-home.png";


export default function Physiotherapy() {
  return (
    <section className="bg-white py-20 md:py-28">

      <Container>

        <Reveal>

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-20
            "
          >


            {/* TEXT LEFT */}

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
                Physiotherapy
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
                Helping you move
                <br />
                with confidence.
              </h2>



              <p
                className="
                  mt-6
                  translate-y-4
                  max-w-xl
                  text-base
                  leading-8
                  text-[#547C78]
                "
              >
                Our Physiotherapy services support individuals to improve
                mobility, strength, physical function and participation
                in everyday activities.
              </p>



              <div
                className="
                  mt-8
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >

                {[
                  "Mobility improvement",
                  "Strength programs",
                  "Exercise support",
                  "Functional movement goals",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-[#253238]
                    "
                  >

                    <span
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B86F7D]
                        text-[10px]
                        text-white
                      "
                    >
                      ✓
                    </span>

                    {item}

                  </div>

                ))}

              </div>



              <div className="mt-10">

<Button
  to="/services#physiotherapy"
>
  Learn More About Physiotherapy
</Button>

              </div>


            </div>




            {/* IMAGE RIGHT */}

 <div
  className="
    overflow-hidden
    rounded-[32px]
    aspect-[4/3]
  "
>
  <img
    src={physiotherapyHome}
    alt="Physiotherapy support"
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>


          </div>


        </Reveal>


      </Container>


    </section>
  );
}