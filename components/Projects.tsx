"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import React from "react";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-36">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <h4 className="text-lg text-center mt-16">
        More projects on my{" "}
        <Link
          className="underline underline-offset-2 decoration-[#d6d0ff]"
          href="https://github.com/Ackarmen?tab=repositories"
          target="_blank"
        >
          GitHub
        </Link>{" "}
        acount.
      </h4>
    </section>
  );
}
