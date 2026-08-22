import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import {
  UsersRound,
  ClipboardCheck,
  HeartPulse,
  Building2,
} from "lucide-react";


const partners = [
  {
    icon: UsersRound,
    title: "Support Coordinators",
  },
  {
    icon: ClipboardCheck,
    title: "Plan Managers",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Professionals",
  },
  {
    icon: Building2,
    title: "Community Organisations",
  },
];


export default function ReferralPartners() {
  return (
    <section
      className="
        bg-[#547C78]
        py-20
        text-white
        md:py-28
      "
    >

      <Container>

        <Reveal>

          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-white/70
                "
              >
                REFERRAL PARTNERS
              </p>


              <h2
                className="
                  mt-8
                  max-w-xl
                  font-serif
                  text-4xl
                  leading-[1]
                  tracking-[-0.04em]
                  md:text-5xl
                "
              >
                For Support Coordinators
                <br />
                & Referral Partners.
              </h2>

            </div>



            {/* RIGHT */}

            <div>

              <h3
                className="
                  max-w-xl
                  text-2xl
                  font-semibold
                  tracking-[-0.03em]
                "
              >
                A trusted allied health partner for your clients.
              </h3>


              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-white/80
                "
              >
                Aurora Ebony Allied Health works collaboratively with
                support coordinators, plan managers, healthcare
                professionals and families to provide personalised
                therapy support focused on meaningful outcomes.
              </p>


              <div className="mt-8">

                <Button
                  to="/referrals"
                >
                  Make a Referral
                </Button>

              </div>


            </div>


          </div>




          {/* PARTNER TYPES */}

          <div
            className="
              mt-16
              grid
              gap-6
              border-t
              border-white/20
              pt-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {partners.map((partner) => {

              const Icon = partner.icon;

              return (

                <div
                  key={partner.title}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                    "
                  >

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                    />

                  </div>


                  <span
                    className="
                      text-sm
                      font-medium
                    "
                  >
                    {partner.title}
                  </span>


                </div>

              );

            })}

          </div>


        </Reveal>


      </Container>


    </section>
  );
}