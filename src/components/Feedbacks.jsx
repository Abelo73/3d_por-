import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motions";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name,
  designation,
  company,
  image,
  testimonial,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.2, 0.75)}
      className="mt-2 bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full "
    >
      {/* <p className="text-white font-black text-[48px]">"</p> */}
      <div className="mt-1">
        <p className="text-white tracking-wider text-[14px]">{testimonial}</p>

        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>

            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img src={image} alt="test" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className=" bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[280px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>

        <div className={`flex flex-wrap gap-2`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
