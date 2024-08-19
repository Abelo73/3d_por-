/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex justify-center items-center flex-wrap flex-row gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name} index={index}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
