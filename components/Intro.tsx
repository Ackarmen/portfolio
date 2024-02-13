"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
import picture from "@/public/picture.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/Bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="px-4 py-8 scroll-mt-[100rem]">
      <div className="flex flex-col-reverse items-center justify-center sm:flex-row sm:justify-between">
        <div className="md:max-w-[500px] max-w-[400px] lg:max-w-3xl">
          <motion.h1
            className=" mb-10 mt-20 text-xl font-medium !leading-[1.5] text-center md:text-2xl md:pr-20 sm:text-justify"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, i'm Sofiane, a creative and passionate Frontend React (NextJs)
            developer. I simply enjoy being in front of my computer, solving
            problems, and giving my best to provide the best possible user
            experience.
          </motion.h1>

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
              className="group bg-gray-900 text-white px-4 py-3 flex items-center gap-2 rounded-2xl outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="group bg-white px-4 py-3 flex items-center gap-2 rounded-2xl outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/sofiane-lyafori95/"
              target="_blank"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Ackarmen"
              target="_blank"
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src={picture}
                alt="portrait"
                priority
                quality={95}
                className="w-60 w- h-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-5 text-5xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
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
    </section>
  );
}
