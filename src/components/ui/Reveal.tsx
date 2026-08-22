import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {

return (

<motion.div

initial={{
opacity: 0,
y: 20,
}}

whileInView={{
opacity: 1,
y: 0,
}}

viewport={{
once: true,
amount: 0.2,
}}

transition={{
duration: 0.6,
delay,
ease: [0.22, 1, 0.36, 1],
}}

>

{children}

</motion.div>

);

}