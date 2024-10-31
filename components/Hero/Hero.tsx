"use client";
import React from "react";
import { motion } from "framer-motion";
import {Pointer } from "lucide-react";
import Image from "next/image";
import { PortImages } from "../constants";
const Hero = () => {
  return (
    <section className="mt-[3rem] overflow-hidden">
      <div className="flex flex-col my-20 gap-3 text-center">
        <motion.h1
          initial={{ opacity: 0.5, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl  max-md:text-3xl text-center leading-[3.6rem] font-semibold"
        >
          Turning Ideas into <br />
          Smooth <span className="text-[#CBACF9]">User Experience</span>
        </motion.h1>
        <p className="text-base text-neutral-100 select-none">
          Hi, I'm Emmanuel Hudson, a seasoned web developer.
        </p>
        <button className="btn-shine bg-nav-gradient flex items-center gap-3 w-fit border text-white/70 hover:text-white transition duration-200 border-neutral-600 backdrop-blur-md shadow-md px-3 py-2 self-center my-3 rounded-md">
          <span>Take a tour</span>
          <span>
            <Pointer className="rotate-180" size={16} />
          </span>
        </button>
      </div>
      <div className="w-[86%]  mx-auto   mt-40   max-md:grid-cols-1  grid_home ">
        <div className="relative gr1  max-md:h-[312px] overflow-hidden transition-all duration-75 rounded-md border border-neutral-700 hover:border-neutral-600">
          <Image
            src={PortImages.CodePerson}
            alt="person coding in a blue background"
            className="w-full h-full object-cover "
          />
          <span className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute bottom-4 md:w-[90%] p-5 z-20  ">
            <h2 className="text-xl text-white md:text-2xl">
              I emphasize client collaboration by nurturing transparent
              communication and actively involving clients throughout the
              process.
            </h2>
          </div>
        </div>

        <div className="gr2  relative bg-grid-pattern h-[255.5px] max-lg:h-[200px] max-md:h-[195px] border-neutral-600 overflow-hidden border">
          <span className="absolute h-[60%] bottom-0 bg-globe  inset-x-0" />
          <h3 className="p-5 text-2xl max-md:text-xl text-white">
            I'm open to discussing opportunities at any time, no matter the time
            zone.
          </h3>
        </div>
        <div className="gr3 flex items-center h-[255.5px] border-neutral-600 border overflow-hidden max-lg:h-[200px] relative max-md:h-[195px]">
          <Image
            src={PortImages.TechStack}
            alt="tech stack"
            width={200}
            height={200}
            className="h-full w-1/2 object-cover ml-4 absolute right-0 max-md:w-[60%]"
            placeholder="blur"
            blurDataURL={
              typeof PortImages.TechStack === "string"
                ? PortImages.TechStack
                : undefined
            }
            sizes="(max-md:768px) 40vw"
          />
          <h3 className="p-5 text-2xl max-md:text-xl text-white z-20 relative">
            Always building my Tech Stack
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
