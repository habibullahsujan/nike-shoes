import { products } from "../constants/index";
import PopularProductCard from "./PopularProductCard";
import { motion } from "framer-motion";
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
const PopularProducts = () => {
  return (
    <section className="mt-11">
      <div>
        <h1 className="my-6 text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg font-montserrat text-slate-500 mt-6 mb-14 leading-7 ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 md:gap-4 lg:gap-3 sm:gap-3"
      >
        {products.map((product) => (
          <motion.div variants={item} key={product.name}>
            <PopularProductCard key={product.name} product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
