import { services } from "../constants/index";
import ServiceCard from "./ServiceCard";
import {motion} from 'framer-motion'
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Services = () => {
  return (
    <motion.div variants={container}
    initial="hidden"
    animate="visible" className="flex flex-col lg:flex-row items-center justify-center gap-x-10">
      {services.map((service) => (
        <motion.div key={service.label} variants={item}>
          <ServiceCard key={service.label} imgUrl={service.imgURL} label={service.label} subText={service.subtext}/>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;
