import Link from "next/link";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed top-0 inset-0 h-12 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2 ">
        <Link href="/" className="flex gap-2 item center"> <p> CompanyName </p></Link>
        <div className="flex gap-8">
        <Link href="application-areas">Application areas</Link>
        <Link href="our-products">Our Products</Link>
        <Link href="about-us">About Emcomp</Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
