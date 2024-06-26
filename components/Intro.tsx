'use client';

import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import { useSectionInView } from '@/lib/hooks';
import picture from '@/public/picture.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="px-4 mb-28 scroll-mt-[100rem] md:mb-0 lg:mt-16"
    >
      <div className="flex flex-col items-center justify-center sm:flex-col sm:justify-between">
        <div className="flex flex-col-reverse max-w-full md:max-w-md lg:mb-8 lg:max-w-full lg:flex-row items-center">
          <motion.h1
            className="mb-10 mt-10 text-xl font-medium !leading-[1.5] text-center md:text-2xl md:max-w-lg md:text-justify lg:mr-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, i'm Sofiane, a creative and passionate Frontend{' '}
            <span className="underline underline-offset-4 decoration-yellow-400">
              React(NextJs) / WordPress developer.
            </span>{' '}
            I simply enjoy being in front of my computer, solving problems, and
            giving my best to provide the best user experience.
          </motion.h1>
          <div className="flex items-center justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'tween', duration: 0.2 }}
                whileHover={{ rotateZ: 360 }}
              >
                <Image
                  src={picture}
                  alt="portrait"
                  priority
                  quality={95}
                  width={200}
                  height={200}
                  className="w-60 h-60 rounded-full object-contain border-[0.35rem] border-yellow-400 shadow-xl bg-black"
                />
              </motion.div>
              <motion.span
                className="absolute bottom-0 right-5 text-5xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </div>
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 text-sm lg:text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-yellow-400 text-black px-4 py-3 flex items-center gap-2 rounded-xl borderBlack outline-none focus:scale-110 hover:scale-110 hover:bg-yellow-500 active:scale-105 transition cursor-pointer"
            onClick={() => {
              setActiveSection('Contact');
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{' '}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="group bg-white px-4 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          >
            Download CV{' '}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/lyaforis"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-neutral-200 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin title="linkedin icon" />
          </a>
          <a
            href="https://github.com/Ackarmen"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-neutral-200 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare title="github icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
