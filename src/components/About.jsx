/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions";

import { SectionWrapper } from "./hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full rounded-2xl overflow-hidden max-w-[370px] ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient  p-[1px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="object-contain  w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        {/* I am a seasoned Full Stack Developer with over a year of hands-on
        experience in both frontend and backend development. My expertise
        includes JavaScript, React, and Next.js for crafting dynamic and
        responsive user interfaces, while my backend skills are centered around
        Java with Spring Boot. This dual proficiency allows me to handle complex
        development projects from concept to completion. I have worked
        extensively with MySQL and PostgreSQL databases, ensuring effective data
        management and seamless application integration. My approach to
        development is supported by a range of testing tools including Postman,
        Thunder Client, cURL, and Swagger, which I use to validate and optimize
        APIs and services. In addition to my core skills, I have practical
        experience in Python, specializing in chatbot development with Rasa for
        banking applications. My tenure at Atlas Computer Technology involved
        developing backend APIs for the Ministry of Revenue project, further
        honing my skills in delivering robust and scalable solutions. I am also
        familiar with TypeScript, Linux, and CSS frameworks like Bootstrap and
        Tailwind CSS. To enhance user experience, I leverage UI libraries such
        as Shadcn and Ant Design. My technical background is underpinned by a
        BSc degree in Electrical and Computer Engineering from Wollega
        University, with a focus on Computer Engineering. This combination of
        experience and education equips me to tackle a wide range of challenges
        and deliver high-quality software solutions. */}
        I’m a Full Stack Developer with over a year of experience in both
        frontend and backend technologies. Proficient in JavaScript, React, and
        Next.js for frontend, and Java with Spring Boot for backend, I build
        dynamic and scalable applications. My skills extend to MySQL and
        PostgreSQL databases, and I utilize Postman, Thunder Client, cURL, and
        Swagger for testing. I also have Python expertise in chatbot development
        with Rasa, particularly for banking. At Atlas Computer Technology, I
        developed APIs for the Ministry of Revenue project. Familiar with
        TypeScript, Linux, Bootstrap, Tailwind CSS, Shadcn, and Ant Design, I
        hold a BSc in Electrical and Computer Engineering from Wollega
        University.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
