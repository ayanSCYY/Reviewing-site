
import { motion,/* useAnimate,easeInOut  */} from "framer-motion";
import {  } from "framer-motion";
import { useState,useEffect } from "react";
/* import { useCallback,useState ,useEffect} from "react"; */
import { Gradientborders } from "../gradientborders";
import { AudienceReaction, CriticReviews } from "../gradientcomponents";

export function Page2img(){
    const [show,setShow]=useState(false);
    const [clickcount,setClickcount]=useState(0);
    const [less,setLess]=useState(false);
    const [more,setMore]=useState(true);


    useEffect(() => {
        if (clickcount === 1) {setShow(true); setLess(true); setMore(false)}
        else if (clickcount > 1) {
            setShow(false);
            setMore(true);
            setLess(false);
            setClickcount(0); // Reset count after handling
        }
    }, [clickcount]); // This effect depends on `clickcount`

    const More = () => {
        setClickcount(prevCount => prevCount + 1);
    };
    
    return(
        <motion.div className="h-[1750px] md:h-[1700px]  lg:h-[1000px] 2xl:h-[1050px]">
            <motion.div id="ani" initial={{y:119 ,opacity:1}} animate={{y:0}}  className="flex items-center justify-center  w-full bg-2ndpage bg-cover sm:bg-2ndpage1 "> 
                <div className="lg:grid  lg:grid-cols-2 w-full h-screen bg-gradient-to-b from-[#204545]/[0.35] from-40% to-[#204545]/[0.96] to-80%">
                  <div className="  h-[30%] mt-[20%] ml-[20%]  mr-[20%] mb-[0%] sm:m-[10%] sm:ml-[20%]  md:ml-[20%] sm:w-[65%] shadow-2xl lg:w-[330px] lg:h-[350px] lg:mt-[20%]  bg-2ndpage2   "></div>
                  <div className="flex flex-col mt-[15%]">
                    <div className="font-bold text-[#F9FFDD]  ml-[20%] lg:ml-[1%] text-[66px]" >Dune</div>
                    <div className="font-normal text-[#F9FFDD]  ml-[21%] lg:ml-[2%]  text-[15px]">21 October 2021</div>
                    <div className="font-semibold text-[#F9FFDD] pt-4 ml-[21%] lg:ml-[2%] text-[18px]">Description:</div>
                    <div className="font-normal text-[#F9FFDD] pt-4 ml-[21%] lg:ml-[2%] text-[15px] mr-[5%]">&quot;Dune: Part One&quot; (2021), directed by Denis Villeneuve, adapts the first half of Frank Herbert&aspos;s 1965 novel &quot;Dune.&quot;Set in a distant future, the film follows Paul Atreides (Timothée Chalamet), a young noble destined for greatness, as his family, House Atreides,{show && <div> is entrusted with governing the desert planet Arrakis. Arrakis, also known as Dune, is the sole source of the univers&aspos;s most valuable substance, &quot;spice&quot; (melange), essential for space travel and extended life.
                                    Paul &aspos;s father, Duke Leto Atreides (Oscar Isaac), seeks to peacefully manage the planet and its spice production. However, their rule is threatened by the devious House Harkonnen, led by Baron Vladimir Harkonnen (Stellan Skarsgård), who previously controlled Arrakis. As Paul grapples with his emerging abilities and the weight of a prophesied destiny, he encounters the planet&aspos;s indigenous people, the Fremen, and forms a connection with Chani (Zendaya), a young Fremen woman.
                                    The film explores themes of power, betrayal, destiny, and survival against the backdrop of Arrakis&aspos;s harsh desert environment, complete with massive sandworms. &quot;Dune: Part One&quot; is lauded for its stunning visuals, strong performances, and faithful adaptation, setting the stage for the story&aspos;s continuation in the anticipated sequel.</div> } {more &&<button onClick={More} className="text-red-300">More</button>}{less && <button onClick={More} className="text-red-300">Less</button>}</div>
                    <div className="flex">
                        <div className="flex align-items ml-[20%] lg:ml-[2%] mt-8 ">
                            <div className="mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-16">
                                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />y
                                </svg>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div className="text-red-300 text-[40px] font-bold">8.5</div>
                                <div className="text-red-300 text-[20px] font-semibold ">IMDB rating</div>
                            </div>
                        </div>
                        <div className="flex align-items ml-[3%] lg:ml-[10%] mt-8">
                            <div className="mt-2">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="size-16">
                                 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex flex-col ml-2">
                                <div className="text-red-300 text-[40px] font-bold">75%</div>
                                <div className="text-red-300 text-[20px] font-semibold ">audience reaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16  flex">
                        <div className="flex justify-center items-center w-[150px] h-[50px] ml-[22%] bg-[#F9FFDD] text-[#204545] text-[16px] font-semibold">Rate the movie</div>
                        <div className="flex justify-center items-center w-[150px] h-[50px] ml-4 text-[#F9FFDD] border-2 border-[#F9FFDD] bg-[#204545] text-[16px] font-semibold">Watch trailer</div>
                    </div>
                  </div>
                  <div className="col-span-2 mt-16">
                     <Gradientborders/>
                     <CriticReviews/>
                     <Gradientborders/>
                     <AudienceReaction/>   
                     <Gradientborders/>  
                  </div>
                </div>
            </motion.div>
        </motion.div>
    )
}