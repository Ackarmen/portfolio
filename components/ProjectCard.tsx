'use client';

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

type ProjectProps = (typeof projectsData)[number];

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  code,
  url,
}: ProjectProps) {
  return (
    <section>
      <CardContainer>
        <CardBody className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-gray-700/55 dark:border-white/[0.2] border border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mb-5"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 mb-5 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              priority
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl mb-5"
              alt="Project I worked on"
            />
            <div className="mt-4">
              <CardItem>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto mb-14">
                  {tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </CardItem>
            </div>
          </CardItem>

          {code ? (
            <div className="flex justify-between items-center mt-auto">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-sm font-bold dark:text-white"
              >
                <Link
                  href={url}
                  target="_blank"
                  className="flex items-center underline underline-offset-4 decoration-yellow-400"
                >
                  Visit <BsArrowRight className="ml-1" />
                </Link>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-yellow-400 text-black text-sm font-bold"
              >
                <Link href={code} target="_blank">
                  Code
                </Link>
              </CardItem>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-auto">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-sm font-bold dark:text-white"
              >
                <Link
                  href={url}
                  target="_blank"
                  className="flex items-center underline underline-offset-4 decoration-yellow-400"
                >
                  Visit <BsArrowRight className="ml-1" />
                </Link>
              </CardItem>
            </div>
          )}
        </CardBody>
      </CardContainer>
    </section>
  );
}
