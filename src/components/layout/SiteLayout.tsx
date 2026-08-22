import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface SiteLayoutProps {
children: ReactNode;
}

export default function SiteLayout({
children,
}: SiteLayoutProps) {
return (
<>
  <Navbar />

  {children}

  <div className="mt-20 border-t border-slate-300">
    <Footer />
  </div>
</>
);
}