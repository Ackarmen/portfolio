"use client";

import React from "react";
import Image from "next/image";
import picture from "@/public/picture.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/Bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5)
	const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
	
	return (
		<section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
							priority={true}
							quality={95}
							className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>
					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
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

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsa corporis, adipisci fugiat vitae totam, incidunt atque sed veritatis harum aut nostrum suscipit doloribus omnis odit reiciendis.
			</motion.h1>

			<motion.div 
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
					onClick={() => {
						setActiveSection("Contact")
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					href="/CV.pdf"
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
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
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
