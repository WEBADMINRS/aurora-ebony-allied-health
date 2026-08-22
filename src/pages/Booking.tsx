import { useEffect } from "react";
import SEO from "../components/SEO";
import Page from "../components/layout/Page";
import Container from "../components/layout/Container";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const consultations = [
  {
    number: "01",
    title: "Registration Readiness Call",
    subtitle: "Preparing for the registration journey.",
    text: "Discuss your organisation’s current position, preparation requirements and the key considerations before moving forward.",
  },
  {
    number: "02",
    title: "Compliance Review Session",
    subtitle: "Understanding your current foundations.",
    text: "Review existing systems, documentation and operational practices to identify areas for improvement.",
  },
  {
    number: "03",
    title: "Advisory Strategy Session",
    subtitle: "Planning the next stage.",
    text: "A focused discussion around organisational priorities, growth challenges and strategic improvement opportunities.",
  },
];

export default function Booking() {
  useEffect(() => {
  const script = document.createElement("script");

  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);
useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: "calendly_booking_complete",
        });

      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };

  }, []);
return (
    <>
      <SEO
        title="Book an NDIS Advisory Consultation | RS Assurance Group"
        description="Schedule a consultation with RS Assurance Group to discuss NDIS registration, compliance and operational advisory support."
      />

      <Page
        eyebrow="BOOK A CONSULTATION"
      title={
        <>
          Start with
          <br />
          the right
          <br />
          conversation.
        </>
      }
      description="Connect with RS Assurance Group to discuss your organisation’s current position, priorities and the support pathway best suited to your needs."
    >

      <section className="mt-32">

        <div
          className="
            rounded-[36px]
            bg-[#08142E]
            p-10
            text-white
            md:p-16
          "
        >

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#D6A03A]
            "
          >
            CONSULTATION OPTIONS
          </p>


          <h2
            className="
              mt-8
              max-w-4xl
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              md:text-5xl
            "
          >
            Choose the support
            <br />
            pathway that fits.
          </h2>


          <p
            className="
              mt-8
              translate-y-4
              max-w-2xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Begin with an initial discussion to understand your goals,
            identify priorities and determine the next steps.
          </p>


        </div>

           </section>


      <section className="mt-24 md:mt-32">

        <Container>

          <div className="border-t border-slate-200">

            {consultations.map((item) => (

  <div
    key={item.number}
    className="
      grid
      gap-8
      border-b
      border-slate-200
      py-14
      lg:grid-cols-[100px_1fr_180px]
      lg:items-start
    "
  >

    <span
      className="
        text-sm
        font-black
        tracking-[0.25em]
        text-[#D6A03A]
      "
    >
      {item.number}
    </span>


    <div>

      <h3
        className="
          text-3xl
          font-black
          tracking-[-0.05em]
          text-[#08142E]
          md:text-4xl
        "
      >
        {item.title}
      </h3>


      <p
        className="
          mt-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-400
        "
      >
        {item.subtitle}
      </p>


      <p
        className="
        translate-y-4
          mt-6
          max-w-2xl
          text-base
          leading-8
          text-slate-600
        "
      >
        {item.text}
      </p>


    </div>


    <a
      href="#calendar"
      className="
        mt-4
        inline-flex
        rounded-xl
        bg-[#08142E]
        px-6
        py-3
        text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        text-white
        transition-all
        duration-300
        hover:bg-[#D6A03A]
        hover:text-[#08142E]
        lg:justify-self-end
      "
    >
      Book Now →
    </a>


  </div>

))}

          </div>

        </Container>

      </section>
      <section className="mt-24 md:mt-32">

  <Container>

    <div
      className="
        rounded-[36px]
        border
        border-slate-200
        bg-white
        p-10
        md:p-16
      "
    >

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.4em]
          text-[#2E5FA7]
        "
      >
        AVAILABILITY
      </p>


      <h2
        className="
          mt-8
          max-w-3xl
          text-4xl
          font-black
          leading-[0.95]
          tracking-[-0.06em]
          text-[#08142E]
          md:text-5xl
        "
      >
        Select a time
        <br />
        that works for you.
      </h2>


      <p
        className="
        translate-y-4
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        Our booking calendar will allow organisations to select a suitable
        consultation time and begin their advisory journey.
      </p>


<div
  id="calendar"
  className="
    mt-12
    overflow-hidden
    rounded-2xl
    bg-white
  "
>
  <div
    className="calendly-inline-widget"
    data-url="https://calendly.com/rsassurancegroup-info/30min"
    style={{
      minWidth: "320px",
      height: "700px",
    }}
  />
</div>


    </div>

  </Container>

</section>

<section className="mt-24 md:mt-32">

  <Container>

    <div
      className="
        rounded-[36px]
        bg-[#08142E]
        p-10
        text-white
        md:p-16
      "
    >

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.4em]
          text-[#D6A03A]
        "
      >
        READY TO BEGIN?
      </p>


      <h2
        className="
          mt-8
          max-w-4xl
          text-4xl
          font-black
          leading-[0.95]
          tracking-[-0.06em]
          md:text-5xl
        "
      >
        Build stronger foundations
        <br />
        with the right support.
      </h2>


      <p
        className="
          mt-8
          translate-y-4
          max-w-xl
          text-lg
          leading-8
          text-slate-300
        "
      >
        Select a consultation pathway and begin a conversation about your
        organisation's priorities, challenges and next steps.
      </p>


      <a
        href="#calendar"
        className="
          mt-10
          inline-flex
          rounded-xl
          bg-white
          px-8
          py-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#08142E]
          transition-all
          duration-300
          hover:bg-[#D6A03A]
        "
      >
        Contact Our Team →
      </a>


    </div>

  </Container>

</section>

      </Page>
    </>
  );
}