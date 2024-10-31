"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { SvgIcons } from "./constants";
import { ArrowRight } from "lucide-react";

const Approach = () => {
  return (
    <section id="contact" className="flex flex-col my-20 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Ready to take your{" "}
              <span className="text-[#CBACF9]">Imagination</span> <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                to Reality?
              </span>
            </h1>
          </>
        }
      >
        <div className="flex items-center w-full h-full">
          <Image
            src={SvgIcons.LinearSvg}
            alt="hero"
            height={720}
            width={1420}
            className="mx-auto rounded-2xl object-cover w-full h-full object-left-top"
            draggable={false}
          />
        </div>
      </ContainerScroll>
      <div className="flex flex-col items-center">
        <p className="text-base btn-shine">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <a
          href="mailto:adjetey545@gmail.com"
          className="btn-shine bg-nav-gradient flex  items-center gap-3 w-fit border text-white/70 hover:text-white transition duration-200 border-neutral-600 backdrop-blur-md shadow-md px-3 py-4 self-center my-3 rounded-md"
        >
          <span>Contact Me Now</span>
          <span>
            <ArrowRight className="-rotate-45" size={16} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Approach;
