/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";

import { SectionWrapper } from "./hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  color,
  image,
  source_code_link,
}) => {
  return (
    <motion.dev variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute flex justify-end inset-0 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center cursor-pointer"
            >
              <img
                src={github}
                alt={github}
                className=" object-contain flex justify-center items-center"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.dev>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl text-[17px] leading-[30px]"
        >
          Welcome to the Projects section! Here, you'll find a showcase of my
          work that highlights my skills in both front-end and back-end
          development. Each project demonstrates my ability to create
          functional, user-friendly applications and robust back-end systems.
          Feel free to explore the projects below. For each project, you can
          find detailed descriptions, technologies used, and a link to the
          source code on GitHub. These projects reflect my proficiency in
          various technologies and frameworks, including: Front-End Development:
          Crafting engaging user interfaces using React, CSS, and modern
          JavaScript libraries. Back-End Development: Building scalable
          server-side solutions with Node.js, Express, and database management
          systems like MySQL. Full-Stack Solutions: Combining front-end and
          back-end skills to deliver end-to-end solutions that are efficient,
          reliable, and maintainable. Explore the links to the GitHub
          repositories to dive deeper into the code and see how I bring these
          projects to life.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
