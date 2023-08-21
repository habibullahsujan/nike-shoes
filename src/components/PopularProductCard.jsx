import { star } from "../assets/icons/index";
import{motion} from 'framer-motion'
const PopularProductCard = ({ product }) => {
  const { imgURL, name, price } = product;
  return (
    <motion.div
    
    initial={{x: -100, y: 0,opacity:0}}
    animate={{x:0, y:0,opacity:1}}
    transition={{type:'spring',duration:0.8}}

    className="p-2 shadow-xl rounded-xl hover:cursor-pointer hover:-translate-y-3 transition">
      <img src={imgURL} alt="" className="h-[282px] w-[282px] mx-auto"/>
      <div className="my-5 flex flex-col gap-y-3">
        <img src={star} alt="" width={20} height={20}/>
        <h2>{name}</h2>
        <h3 className="text-coral-red font-bold text-xl">{price}</h3>
      </div>
    </motion.div>
  );
};

export default PopularProductCard;
