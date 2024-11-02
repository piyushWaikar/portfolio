import { useState } from "react";
import { delay, motion } from "framer-motion";
import Links from "./Links/Links";
import "./Sidebar.scss";
import ToggleButton from "./ToggleButton/ToggleButton";
const Sidebar = () => {
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)", //By using this property we are modifying the shape of the component its cirlce of 30px at postion 50px
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 50,
      },
    },
  };
  const [open, setOpen] = useState(false);

  //Defining motion variatent :=
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/* by using variants={variants} we ensure that the animation of parent is used to the child */}
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
