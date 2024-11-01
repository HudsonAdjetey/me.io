import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 border-2 border-zinc-500 rounded-lg  mx-auto md:w-[400px] max-sm:w-[90%] z-[99999] ">
      <ul className="flex items-center gap-2 justify-between px-5 text-sm  py-4 rounded-lg bg-nav-gradient ">
        <li>
          <Link className="text-white/80 hover:text-white" href={"#home"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white/80 hover:text-white" href={"#journey"}>
            My Journey
          </Link>
        </li>
        <li>
          <Link className="text-white/80 hover:text-white" href={"#projects"}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-white/80 hover:text-white"
            href={"#testimonials"}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="text-white/80 hover:text-white" href={"#contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
