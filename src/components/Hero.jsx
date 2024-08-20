import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import abel from "../assets/abel.JPG";
// import { Typed } from "react-typed";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css"; // Import your custom CSS file

import cv from "../assets/Abel_cv.pdf"; // Import the PDF file

const Hero = () => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
    }, 4000); // Adjust timing as needed to match your typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="relative w-full h-screen mx-auto" id="/">
    //   <div
    //     className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
    //   >
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 bg-orange-600 border border-orange-500 rounded-full" />
    //       {/* <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
    //       <div className="w-1 sm:h-80 h-40  line" />{" "}
    //     </div>
    //     <div className=" max-w-[1200px]">
    //       <h1 className={`${styles.heroHeadText}`}>
    //         Hi, I'm{" "}
    //         <span className="text-orange-500">
    //           <Typewriter
    //             words={["Abel Adisu.", "Backend,", "Frontend,", "Developer."]}
    //             loop={true}
    //             cursor
    //             cursorStyle="_"
    //             typeSpeed={70}
    //             deleteSpeed={50}
    //             delaySpeed={1000}
    //           />
    //         </span>
    //       </h1>
    //       <p className={`${styles.heroSubText} font-mono`}>
    //         I create dynamic and engaging experiences with
    //         <br className="sm:block hidden font-mono" />
    //         <span className="text-gradient font-mono">
    //           {" "}
    //           Backend using Java & Spring Boot
    //         </span>
    //         <br className="sm:block hidden font-mono" />
    //         and{" "}
    //         <span className="text-gradient font-mono">
    //           Frontend using JavaScript & React
    //         </span>
    //       </p>
    //     </div>

    //     <div className="w-full max-w-[320px] h-auto overflow-hidden object-cover rounded-lg">
    //       <img src={abel} alt="Abel" className="w-full h-auto object-cover" />
    //     </div>
    //   </div>
    //   {/* <div className="bg-orange-700 w-[100px] h-[100px]"></div> */}
    //   {/* <ComputersCanvas /> */}

    //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    //     <a href="#about">
    //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
    //         <motion.div
    //           animate={{ y: [0, 24, 0] }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //           }}
    //           className="w-3 h-3 rounded-full bg-secondary mb-1"
    //         ></motion.div>
    //       </div>
    //     </a>
    //   </div>
    // </section>

    <section className="relative w-full h-screen mx-auto" id="/">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 hidden lg:block bg-orange-600 border border-orange-500 rounded-full" />
          <div className="w-1 sm:h-80 h-40 hidden lg:flex  line" />
        </div>

        <div className="max-w-[1200px] mx-6 order-2 sm:order-1">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <span className="text-orange-500">
              <Typewriter
                words={["Abel Adisu.", "Backend,", "Frontend,", "Developer."]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          {/* <p className={`${styles.heroSubText} font-mono`}>
            I create dynamic and engaging experiences with
            <br className="sm:block hidden font-mono" />
            <span className="text-gradient font-mono">
              {" "}
              Backend using Java & Spring Boot
            </span>
            <br className="sm:block hidden font-mono" />
            and{" "}
            <span className="text-gradient font-mono">
              Frontend using JavaScript & React
            </span>
          </p> */}

          <p className={`${styles.heroSubText} font-mono`}>
            Specializing in both Backend and Frontend Development
            <br className="sm:block hidden font-mono" />
            with over 1 year of hands-on experience.
            <br className="sm:block hidden font-mono" />
            Transforming ideas into robust,
            <br className="sm:block hidden font-mono" />
            user-friendly applications with a dedication to quality and
            innovation.
          </p>

          {/* <button className="bg-tertiary mt-10 py-3 px-4 rounded-md hover:bg-[#221950]">
            Download CV
          </button> */}

          <div className="mt-10">
            <a
              href={cv} // Replace with the actual path to your CV
              className="bg-tertiary mt-10 py-3 px-4 rounded-md hover:bg-[#221950] text-white"
              download="Abel_Adisu_CV.pdf" // Name of the file when downloaded
            >
              Download CV
            </a>
          </div>
        </div>

        {/* <div className="w-[600px] overflow-hidden hover:cursor-pointer hover:scale-[1.1] transition-all object-cover  order-1 sm:order-2 md:order-2">
          <img
            src={abel}
            alt="Abel"
            className="w-full rounded-e-full rounded-s-full h-[300px] object-cover"
          />
        </div> */}

        <div className="w-full md:flex flex-2 h-max-[300px] hover:cursor-pointer hover:scale-[1.01] transition-all object-cover image-container glowing-border">
          <img
            src={abel}
            alt="Abel"
            className="w-full h-max-[300px] object-cover"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
