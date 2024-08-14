import { motion } from "framer-motion";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motions";

const SectionWrapper = (Component, idName) => {
  return function HOC(props) {
    return (
      <motion.section
        id={idName} // Optionally use idName if needed
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Optionally add styles if needed
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;
