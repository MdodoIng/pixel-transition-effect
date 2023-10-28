import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Menu = ({ menuIsActive }) => {
  return (
    <motion.div
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "exit"}
      className="fixed flex flex-col items-center justify-center h-[90vh] w-full z-[3] gap-[5px] text-[5vw]"
    >
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </motion.div>
  );
};

export default Menu;
