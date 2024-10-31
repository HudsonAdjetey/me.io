import Image, { StaticImageData } from "next/image";
import React from "react";
import { PortImages } from "./constants";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ArrowRight, ArrowUpFromDot } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";

const Card = ({
  title,
  image,
  linkUrl,
  content,
  stack,
}: {
  stack: {
    designation: string;
    id: number;
    image: StaticImageData | string;
    name: string;
  }[];
  title: string;
  image: StaticImageData | string;
  linkUrl: string;
  content: string;
}) => {
  return (
    <div className="  rounded-lg bg-stroke-bg p-5">
      <div className="bg-[#13162D] rounded-lg pt-10 px-10">
        <Image
          width={449.91}
          height={319.73}
          className="w-fit h-fit"
          src={image}
          alt="image background for cards"
        />
      </div>
      <h2 className="mt-5 mb-3 text-2xl max-md:text-xl font-semibold text-white">
        {title}
      </h2>
      <p className="text-base max-md:text-sm text-neutral-300">{content}</p>
      <div className="items-center justify-between flex mt-5">
        <div className="flex flex-row items-center ">
          <AnimatedTooltip items={stack} />
        </div>
        <a
          href={linkUrl}
          className="flex items-center gap-3 text-[#CBACF9] btn-shine"
        >
          <span>Check Out</span>
          <span>
            <ArrowRight className="-rotate-45" size={18} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card;
