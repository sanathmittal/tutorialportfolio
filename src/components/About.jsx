import React from "react";
import {Tilt }from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard=({index,title,icon})=>{
  return (
<Tilt className="xs:w-[250px] w-full">
<motion.div variants={fadeIn("right","spring",0.5*index,0.74)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
  <div options={{
    max:45,
    scale:1,
    speed:450
  }}
  className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  >
<img src={icon} alt={title} className="w-16 h-16 object-contain"></img>
<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
  </div>
</motion.div>
</Tilt>

  )
}

const About = () => {
  return (
    <div>
      <motion.div varaints={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available. It is also used to
        temporarily replace text in a process called greeking, which allows
        designers
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service,index)=>(
      <ServiceCard  key={service.title} index={index} {...service}/>
    ))}
      </div>
    </div>
  );
};

export default  SectionWrapper(About,"about");
