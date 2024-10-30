"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, height]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  ("Building the Future, One Line of Code at a Time");
  const words = [
    {
      text: "A",
    },

    {
      text: "Developer's",
      className: "text-[#CBACF9] dark:text-blue-500",
    },
    {
      text: "Evolution.",
    },
  ];

  return (
    <div
      className="w-full text-white font-sans md:px-10 mt-40 overflow-x-hidden j_container"
      ref={containerRef}
    >
      <div className="max-w-7xl flex flex-col items-center mx-auto  px-4 md:px-8 lg:px-10">
        <TypewriterEffect words={words} className="text-white" />
        <p className=" text-sm md:text-base max-w-screen-md text-justify">
          What started as a personal challenge has turned into a rewarding path
          in web development. Through dedication and countless hours of
          self-study, I've built a foundation in coding and expanded into
          advanced projects. Here's a look at how I've grown, one project at a
          time.
        </p>
      </div>

      <div ref={ref} className="relative  mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-20  md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 absolute left-6 max-sm:left-[1.3rem]  md:left-5 w-6 rounded-full bg-[#CBACF9] dark:bg-black flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold dark ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0   w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] max-sm:via-[100%] md:via-[90%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
