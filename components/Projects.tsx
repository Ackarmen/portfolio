'use client';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';
import React from 'react';
import { ProjectCard } from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-36">
      <SectionHeading>01. My projects</SectionHeading>
      <div className="flex flex-wrap justify-center gap-5 max-w-7xl">
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>

      <h4 className="text-lg text-center mt-16">
        More projects on my{' '}
        <Link
          className="underline underline-offset-4 decoration-yellow-400"
          href="https://github.com/Ackarmen?tab=repositories"
          target="_blank"
        >
          GitHub
        </Link>{' '}
        acount.
      </h4>
    </section>
  );
}
