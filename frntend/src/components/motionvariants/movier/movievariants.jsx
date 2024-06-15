import { easeInOut } from "framer-motion";

export const variant1 = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
              transition: {
            duration: 1.5,
            ease: easeInOut,
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { 
            duration: 0.5,
            ease: easeInOut,
        }
    }
};

export const Variant2 = {
    hidden: { opacity:1,y:-932 },
    visible: {
      y:[-932,90,0],
      opacity:1,
      transition: {
        delay:0.5,
        duration: 1.6,
        type:"tween",
        easeInOut,
      }
    }
  }

  export const Variant3 = {
    hidden: { opacity:0},
    visible: {
      x:[90,0],
      opacity:1,
      transition: {
        delay:1.6,
        duration: 1,
        type:"tween",
        ease: easeInOut,
      }
    }
  }
   
 export const Variant4={
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition: {
        delay:1.6,
        duration:2,
        type:"tween",
        yoyo:Infinity,
        ease: easeInOut,
      }
    }
 }