import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TestimonialsImage } from "./constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative  p-10 my-20">
      <p className="text-4xl max-md:text-2xl max-sm:text-xl text-center mb-20">
        What people <span className="text-[#CBACF9] font-semibold ">Say</span>{" "}
        about my work
      </p>
      <InfiniteMovingCards
        items={listTestimonials}
        direction="left"
        speed="slow"
      />
    </section>
  );
};

export default Testimonials;

const listTestimonials = [
  {
    quote:
      "Collaborating with Hudson was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Hudson's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Hudson is the ideal partner.",
    id: 1,
    name: "Raymond Mensah",
    image: TestimonialsImage.Jay,
    title: "Project Manager, Ideation Axis",
  },
  {
    quote:
      "My experience with Hudson was fantastic from start to finish. His creativity and problem-solving skills were evident in every aspect of our web development project. Hudson's commitment to client satisfaction and his ability to navigate complex challenges make him a standout developer. I highly recommend his services",
    name: "Hannah Arthur",
    id: 2,
    image: TestimonialsImage.Hannah,
    title: "CTO, IkobTek Inco.",
  },
  {
    id: 3,
    name: "Obed Adjei",
    quote:
      "In full-stack development, expertise is key, and that's what we found with Hudson. Attention to detail, clear communication, and dedication to meeting project deadlines made the collaboration seamless. Couldn't be happier with the final product. If looking for a talented and reliable web developer, Hudson is the one to choose.",
    image: TestimonialsImage.Obed,
    title: "CEO of Learniverse, Learniverse",
  },
  {
    id: 4,
    name: "Clinton Hay",
    quote:
      "I had the pleasure of working with Hudson on a complex web application. His technical expertise and professionalism made a significant difference. Hudson's clear communication and ability to adapt to our evolving needs made the project a success. I appreciate his commitment to excellence.",
    title: "Software Developer, IkobTek",
    image: TestimonialsImage.Clinton,
  },
];
