import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Eye, Pointer } from "lucide-react";
const Hero = () => {
  return (
    <section className="mt-[3rem] overflow-hidden">
      <div className="flex flex-col gap-3 text-center">
        <motion.h1
          initial={{ opacity: 0.5, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl max-md:text-3xl text-center leading-[3.6rem] font-semibold"
        >
          Turning Ideas into <br />
          Smooth <span className="text-[#CBACF9]">User Experience</span>
        </motion.h1>
        <p className="text-base text-neutral-100 select-none">
          Hi, I'm Emmanuel Hudson, a seasoned web developer.
        </p>
        <button className="bg-nav-gradient flex items-center gap-3 w-fit px-3 py-2 self-center my-3 rounded-md">
          <span>Take a tour</span>
          <span>
            <Pointer className="rotate-180" size={16} />
          </span>
        </button>
      </div>
      <div className="px-20 my-20">content</div>
    </section>
  );
};

export default Hero;
