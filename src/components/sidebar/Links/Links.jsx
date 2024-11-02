import {motion} from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Itemvariants = {
  open: {
    y:0,
    opacity:1
  },
  closed: {
    y:50,
    opacity:0
  },
};

const Links = () => {
  const links = ["HomePage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants} >
      {links.map((link) => (
        <motion.a key={link} href={`#${link}`} variants={Itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.90}} >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
