import { color, motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:20,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: "15%", 
  },
  animate: {
    x: "-100%", 
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 40,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
          <motion.h2 variants={textVariants}>PIYUSH WAIKAR</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer and UI Designer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants} style={{backgroundColor:"white", color:"black"}} >Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
        Web Designer , UI Designer , Business Owner
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
