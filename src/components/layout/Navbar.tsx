  import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/horizontal-logo.png";


const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Occupational Therapy",
        href: "/services#occupational-therapy",
      },
      {
        label: "Physiotherapy",
        href: "/services#physiotherapy",
      },
      {
        label: "All Services",
        href: "/services",
      },
    ],
  },
  {
    label: "Referrals",
    href: "/referrals",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

  export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <header
  className={`
    fixed
    left-0
    right-0
    top-0
    z-[999]
    w-full
    will-change-transform
          ${
            scrolled
              ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >

<div
  className="
    mx-auto
    flex
    h-16
    md:h-28
    max-w-[1440px]
    items-center
    justify-between
    px-4
    md:px-12
    xl:px-20
  "
>

<Link
  to="/"
  onClick={() => setOpen(false)}
  className="shrink-0"
>

            <img
              src={logo}
              alt="Aurora Ebony Allied Health"
className="
  h-12
  md:h-24
  w-auto
  object-contain
"
            />

          </Link>


          <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (

            link.dropdown ? (

              <div
  key={link.href}
  className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >

                <Link
                  to={link.href}
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#253238]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-[#B86F7D]
                  "
                >
                  {link.label}
                </Link>


                {servicesOpen && (

<div
  className="
    absolute
    left-0
    top-full
    pt-2
  "
>

  <div
    className="
      w-64
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-4
      shadow-xl
    "
  >

                    {link.dropdown.map((item) => (

                      <Link
                        key={item.href}
                        to={item.href}
                        className="
                          block
                          rounded-xl
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#253238]
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:bg-[#FAF7F4]
                          hover:text-[#B86F7D]
                        "
                      >
                        {item.label}
                      </Link>

                    ))}

                      </div>

                  </div>

                )}

              </div>


            ) : (

              <Link
                key={link.href}
                to={link.href}
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#253238]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#B86F7D]
                "
              >
                {link.label}
              </Link>

            )

          ))}

        </nav>



<Link
  to="/contact?type=assessment"
  className="
    group
    ml-8
    hidden
    lg:flex
    whitespace-nowrap
    rounded-full
    bg-[#B86F7D]
    px-8
    py-4
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-white
    transition-all
    duration-300
    hover:bg-[#253238]
    hover:-translate-y-1
  "
>
  Book an Assessment

  <span
    className="
      ml-2
      inline-block
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    →
  </span>

</Link>



<button
  onClick={() => setOpen(!open)}
  className="
    flex
    flex-col
    gap-2
    lg:hidden
    ml-4
    shrink-0
  "
>

          <span className="h-[2px] w-7 bg-[#253238]" />
          <span className="h-[2px] w-7 bg-[#253238]" />

        </button>



      </div>



      {open && (

        <div
          className="
            max-h-[calc(100vh-64px)]
            overflow-y-auto
            border-t
            border-slate-200
            bg-white
            px-6
            py-10
            md:hidden
          "
        >

          <nav className="flex flex-col gap-8">


            {links.map((link) => (

              link.dropdown ? (

                <div key={link.href}>

                  <Link
  to={link.href}
  onClick={() => setOpen(false)}
  className="
    text-sm
    font-semibold
    uppercase
    tracking-[0.25em]
    text-[#253238]
  "
>
  {link.label}
</Link>


                  <div
                    className="
                      mt-5
                      flex
                      flex-col
                      gap-5
                      pl-5
                    "
                  >

                    {link.dropdown.map((item) => (

                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-[#253238]
                          transition-all
                          duration-300
                          hover:translate-x-1
                          hover:text-[#B86F7D]
                        "
                      >
                        {item.label}
                      </Link>

                    ))}

                  </div>


                </div>


              ) : (


                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#253238]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-[#B86F7D]
                  "
                >
                  {link.label}
                </Link>


              )

            ))}



            <Link
  to="/contact?type=assessment"
  onClick={() => setOpen(false)}
              className="
                rounded-full
                bg-[#B86F7D]
                px-6
                py-4
                text-center
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
                transition-all
                duration-300
                hover:bg-[#253238]
              "
            >
              Book an Assessment →
            </Link>


          </nav>


        </div>

      )}

      </header>
    );
  }