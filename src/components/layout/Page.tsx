import type { ReactNode } from "react";
import Container from "./Container";
import SiteLayout from "./SiteLayout";
import Reveal from "../ui/Reveal";

interface PageProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function Page({
  eyebrow,
  title,
  description,
  children,
}: PageProps) {
  return (
    <SiteLayout>

      <main className="bg-[#FCFCFA] text-[#08142E]">


        <section className="pt-40 pb-24">

          <Container>

            <Reveal>
            <div>


              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.35em]
md:tracking-[0.65em]
                  text-[#2E5FA7]
                "
              >
                {eyebrow}
              </p>



              <h1
  className="
    translate-y-4
    mt-12
    max-w-[1000px]
     text-5xl
    font-black
    leading-[0.95]
    tracking-[-0.06em]
    md:text-6xl
    lg:text-[7rem]
  "
>
  {title}
</h1>



<p
  className="
    translate-y-10
    mt-16
    max-w-[650px]
    text-xl
    leading-10
    text-slate-600
  "
>
  {description}
</p>

            </div>
            </Reveal>


          </Container>


        </section>



        {children}


      </main>


    </SiteLayout>
  );
}