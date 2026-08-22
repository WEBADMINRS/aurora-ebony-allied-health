import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import occupationalTherapyHome from "../../assets/occupational-therapy-home.png";


export default function OccupationalTherapy() {
  return (
    <section className="bg-[#FAF7F4] py-20 md:py-28">

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

            {/* IMAGE LEFT */}

            <div
  className="
    overflow-hidden
    rounded-[32px]
    aspect-[4/3]
  "
>
  <img
    src={occupationalTherapyHome}
    alt="Occupational Therapy support"
    className="
      h-full
      w-full
      object-cover
    "
  />
</div>



            {/* TEXT RIGHT */}

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
                Occupational Therapy
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
                Supporting independence
                <br />
                in everyday life.
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
                Occupational Therapy helps people develop skills,
                confidence and strategies to participate in daily
                activities and work towards their personal goals.
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
                  "Functional assessments",
                  "Daily living skills",
                  "Capacity building",
                  "Assistive technology recommendations",
                ].map((item) => (

<div
  key={item}
  className="
    flex
    items-center
    gap-4
    text-base
    font-medium
    tracking-[-0.01em]
    text-[#253238]
  "
>

<span
  className="
    flex
    h-6
    w-6
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-[#B86F7D]
    text-xs
    text-[#B86F7D]
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
  to="/services#occupational-therapy"
>
  Learn More About OT
</Button>

              </div>


            </div>


          </div>


        </Reveal>


      </Container>


    </section>
  );
}