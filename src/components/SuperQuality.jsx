import { Button } from "../components/index";
import { shoe8 } from "../assets/images/index";
import { motion } from "framer-motion";
const SuperQuality = () => {
  return (
    <section className="block lg:flex items-center justify-between gap-x-16 w-full">
      <motion.div
      initial={{x: -100, y: 0,opacity:0}}
      animate={{x:0, y:0,opacity:1}}
      transition={{type:'spring',duration:0.8}}
      
      className="lg:max-w-lg">
        <h1 className="font-palanquin text-4xl capitalize font-bold mb-10">
          We provide your <span className="text-coral-red">super</span> <span className="text-coral-red">quality</span> shoes
        </h1>
        <p className="info-text my-6">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mb-8">Our dedication to detail and excellence ensures your satisfaction</p>
        <div>
          <Button label={"View Details"} />
        </div>
      </motion.div>
      <motion.div
      initial={{x: 100, y:0,opacity:0}}
      animate={{x:0, y:0,opacity:1}}
      transition={{type:'spring',duration:0.8}}
       className="flex-1">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
