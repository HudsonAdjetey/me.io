"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/navbar/Nav";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Journey from "@/components/Journey";
import ProjectsPage from "@/components/projects";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";
import Approach from "@/components/Approach";

const page = () => {
  return (
    <main className="container py-5">
      <Nav />
      <TracingBeam>
        <Hero />
      </TracingBeam>
      <Journey />
      <ProjectsPage />
      <Testimonials />
      <TracingBeam>
        <WorkExperience />
        <Approach />
      </TracingBeam>
    </main>
  );
};

export default page;
