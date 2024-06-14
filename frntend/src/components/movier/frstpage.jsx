import {  motion } from "framer-motion";
import { Variant3, Variant4, variant1 } from "../motionvariants/movier/movievariants";
import { Variant2 } from "../motionvariants/movier/movievariants";
import { useAnimate } from "framer-motion";
import { useState,useEffect,useCallback } from "react";

export function Homebg() {
  const [scope, animate] = useAnimate();
  const [isAnimating] = useState(true);

  const handleAnimation = useCallback(async () => {
    while (isAnimating) {
      await animate('#ani', { y:10 }, { delay: 0, duration: 0.1, type: 'spring',stiffness:300  });
      await animate('#ani', { y:0}, { delay: 0, duration: 0.1, type: 'spring', stiffness:300  });
    }
  }, [animate, isAnimating]);
  
  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  return (
    <motion.div ref={scope}
      variants={variant1}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative flex h-screen w-full sm:bg-2ndpage bg-1stpage bg-cover"
    >
      <motion.div ref={scope} variants={Variant2} initial="hidden" animate="visible" className="absolute bottom-0 w-full flex justify-center items-center h-[90px] shadow-2xl bg-[#c66565]">
        <motion.div  variants={Variant3} initial="hidden" animate="visible" className="text-black text-[24px] font-semibold mr-2">Click to Explore</motion.div>
        <motion.div id="ani" variants={Variant4} initial="hidden" animate="visible">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className=" size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
