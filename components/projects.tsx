import React from "react";
import Card from "./Card";
import { IconsImg, PortImages } from "./constants";
import { motion } from "framer-motion";
const ProjectsPage = () => {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-3xl text-center my-20 max-md:text-2xl max-sm:text-xl">
        A small selection of <span className="text-[#CBACF9] ">recent </span>{" "}
        projects
      </h2>
      <div className="grid grid-cols-2 max-w-7xl w-[80%] mx-auto gap-5 max-md:grid-cols-1">
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            x: -20,
            //
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Card
            title="3D Solar System Planets to Explore"
            content="Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js."
            linkUrl=""
            image={PortImages.Earth}
            stack={earthStack}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Card
            stack={AiStack}
            title="AI Image SaaS - Canva Application"
            content="A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack."
            linkUrl=""
            image={PortImages.AI}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Card
            title="3D Solar System Planets to Explore"
            content="Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js."
            linkUrl=""
            image={PortImages.Earth}
            stack={earthStack}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -50,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Card
            stack={AiStack}
            title="AI Image SaaS - Canva Application"
            content="A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack."
            linkUrl=""
            image={PortImages.AI}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;

const AiStack = [
  {
    id: 1,
    name: "React JS",
    designation: "https://react.dev",
    image: IconsImg.ReactJsIcon,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "https://tailwindcss.com",
    image: IconsImg.TailwindIcon,
  },
  {
    id: 12,
    name: "Typescript",
    designation: "https://www.typescriptlang.org",
    image: IconsImg.TypeScriptIcon,
  },
  {
    id: 4,
    name: "Clerk",
    designation: "https://clerk.com",
    image: IconsImg.ClerkIcon,
  },
];

const earthStack = [
  {
    id: 1,
    name: "React JS",
    designation: "https://react.dev",
    image: IconsImg.ReactJsIcon,
  },
  {
    id: 2,
    name: "Express JS",
    designation: "https://expressjs.com",
    image: IconsImg.ExpressICon,
  },
  {
    id: 3,
    name: "MongoDb",
    designation: "https://www.mongodb.com",
    image: IconsImg.MongoDbIcon,
  },
  {
    id: 4,
    name: "Clerk",
    designation: "https://clerk.com",
    image: IconsImg.ClerkIcon,
  },
  {
    id: 10,
    name: "Framer Motion",
    designation: "https://www.framer.com/motion",
    image: IconsImg.FramerIcon,
  },
  /*   {
    id: 5,
    name: "AWS",
    designation: "https://aws.amazon.com",
    image: IconsImg.AWSIcon,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "https://tailwindcss.com",
    image: IconsImg.TailwindIcon,
  },

  {
    id: 9,
    name: "Redux",
    designation: "https://redux.js.org",
    image: IconsImg.ReduxIcon,
  },
  {
    id: 10,
    name: "Framer Motion",
    designation: "https://www.framer.com/motion",
    image: IconsImg.FramerIcon,
  },
  {
    id: 11,
    name: "Next JS",
    designation: "https://nextjs.org",
    image: IconsImg.NextJsIcon,
  },
  {
    id: 12,
    name: "Typescript",
    designation: "https://www.typescriptlang.org",
    image: IconsImg.TypeScriptIcon,
  },
  {
    id: 13,
    name: "React Query",
    designation: "https://react-query.tanstack.com",
    image: IconsImg.ReactQueryIcon,
  }, */
];
