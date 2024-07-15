import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion"; // Ensure textVariant is imported
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechEmblem = ({ index, name, icon }) => (
  <Tilt className='w-[150px] h-[200px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col h-full'
      >
        <img
          src={icon}
          alt={name}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center mt-2'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((tech, index) => (
          <TechEmblem key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
