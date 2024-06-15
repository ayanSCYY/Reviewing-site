import { Page2img } from "../../components/movier/Hero_description"


import { motion } from "framer-motion"
import { Variant2 } from "../../components/motionvariants/movier/movievariants"
import { Nav } from "../../components/nav"
import { Media } from "../../components/movier/media"
import { Casts } from "../../components/movier/casts"
import { Footer } from "../../components/movier/footer"
export function Page2(){
  
    return(
    <motion.div className="bg-[#204545]  flex flex-col">
        <Nav/>
        <Page2img variants={Variant2} initial="hidden" animate="visible"/>
        <Media/>
        <Casts/>
        <Footer/>
    </motion.div>
    )
}