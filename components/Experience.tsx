"use client";

import { useTheme } from "@/context/ThemeContextProvider";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((exp) => {
          return (
            <React.Fragment key={exp.id}>
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={exp.date}
                icon={exp.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">
                  {exp.title} -{" "}
                  {exp.verifyUrl ? (
                    <Link
                      className="underline underline-offset-2"
                      target="_blank"
                      href={exp.verifyUrl}
                    >
                      View my certification
                    </Link>
                  ) : null}
                </h3>
                <p className="font-normal !mt-0">{exp.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {exp.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
