"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/navbar/Nav";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Journey from "@/components/Journey";
import ProjectsPage from "@/components/projects";
const page = () => {
  return (
    <main className="container py-5">
      <Nav />
      <TracingBeam>
        <Hero />
      </TracingBeam>
      <Journey />
      <ProjectsPage />
    </main>
  );
};

export default page;
