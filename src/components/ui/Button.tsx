import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "cta" | "ctaSecondary";
  to?: string;
}

export default function Button({
  children,
  variant = "primary",
  to,
}: ButtonProps) {

 const styles = `
  group
  inline-flex
  items-center
  justify-center
  gap-3
  rounded-xl
  px-8
  py-4
  text-sm
  font-semibold
  uppercase
  tracking-[0.2em]
  transition-all
  duration-300
  hover:-translate-y-1

  ${
  variant === "primary"
    ? `
      bg-[#B86F7D]
      text-white
      hover:bg-[#253238]
    `
    : variant === "cta"
    ? `
      bg-white
      text-[#B86F7D]
      hover:bg-[#F7E8EB]
    `
    : variant === "ctaSecondary"
    ? `
      border
      border-white
      bg-transparent
      text-white
      hover:bg-white
      hover:text-[#B86F7D]
    `
    : variant === "dark"
    ? `
      border
      border-[#253238]
      bg-[#253238]
      text-white
      hover:bg-[#B86F7D]
    `
    : `
      border
      border-[#B86F7D]
      bg-transparent
      text-[#B86F7D]
      hover:bg-[#B86F7D]
      hover:text-white
    `
}
`;


  const Arrow = () => (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );


  if (to) {
    return (
      <Link
        to={to}
        className={styles}
      >
        {children}
        <Arrow />
      </Link>
    );
  }


  return (
    <button
      className={styles}
    >
      {children}
      <Arrow />
    </button>
  );
}