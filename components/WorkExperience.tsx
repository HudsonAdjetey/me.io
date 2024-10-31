import React from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import { SvgIcons } from "./constants";

const WorkExperience = () => {
  return (
    <section className="w-[80%]  mx-auto ">
      <p className="text-4xl max-md:text-2xl max-sm:text-xl text-center mb-10">
        My Work{" "}
        <span className="text-[#CBACF9] font-semibold ">Experience</span>{" "}
      </p>
      <div className="grid-cols-2 grid gap-5 max-lg:grid-cols-1">
        <HoverBorderGradient
          containerClassName="rounded-md "
          as="div"
          className="bg-nav-gradient h-[130px] text-black dark:text-white flex items-center space-x-2 gap-4"
        >
          {/* image and Content */}
          <div className="p-3 py-4">
            <Image
              src={SvgIcons.LightSvg}
              alt="teaching interns svg icon"
              width={120}
              height={120}
            />
          </div>
          <div>
            <p className="text-white text-xl font-medium mb-2">
              Team Lead Software Developer
            </p>
            <p className="text-base text-[#BEC1DD]">
              Led the web development team of ideation axis in building
              comprehensive websites.
            </p>
          </div>
          {/* image and Content */}
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-md"
          as="div"
          className="bg-nav-gradient h-[130px] text-black dark:text-white flex items-center space-x-2 gap-4"
        >
          {/* image and Content */}
          <div className="p-3 py-4">
            <Image
              src={SvgIcons.DevSvg}
              alt="teaching interns svg icon"
              width={120}
              height={120}
            />
          </div>
          <div>
            <p className="text-white text-xl font-medium mb-2">
              Web Develper - IkobTeks
            </p>
            <p className="text-base text-[#BEC1DD]">
              Designed comprehensive web apps. Worked both on frontend and
              backend.
            </p>
          </div>
          {/* image and Content */}
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-md"
          as="div"
          className="bg-nav-gradient  h-[130px] text-black dark:text-white flex items-center space-x-2 gap-4"
        >
          {/* image and Content */}
          <div className="p-3 py-4">
            <Image
              src={SvgIcons.LearnSvg}
              alt="teaching interns svg icon"
              width={120}
              height={120}
            />
          </div>
          <div>
            <p className="text-white text-xl font-medium mb-2">
              Tutored Frontend Web Dev Interns
            </p>
            <p className="text-base text-[#BEC1DD]">
              Collaborated in bringing intern frontend development to the
              spotlight.
            </p>
          </div>
          {/* image and Content */}
        </HoverBorderGradient>

        <HoverBorderGradient
          containerClassName="rounded-md"
          as="div"
          className="bg-nav-gradient  h-[130px] text-black dark:text-white flex items-center space-x-2 gap-4"
        >
          {/* image and Content */}
          <div className="p-3 py-4">
            <Image
              src={SvgIcons.CodeSvg}
              alt="teaching interns svg icon"
              width={140}
              height={130}
            />
          </div>
          <div>
            <p className="text-white text-xl font-medium mb-2">
              Lead Frontend Developer
            </p>
            <p className="text-base text-[#BEC1DD]">
              Developed and maintained user-facing features using modern
              frontend technologies.
            </p>
          </div>
          {/* image and Content */}
        </HoverBorderGradient>
      </div>
    </section>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default WorkExperience;
