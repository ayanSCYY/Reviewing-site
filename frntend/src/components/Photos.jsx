import { useRef, useState,useEffect } from 'react';
import { ImgUrlData } from '../config/MovieData';
import { NextButton, PrevButton } from './buttons';

export const Photos = () => {
    const scrollContainerRef = useRef(null);
    const [show,setShow]=useState(false);

    const disableHorizontalScroll = (event) => {
        if (event.deltaY === 0) {
            event.preventDefault();
        }
    };

    useEffect(() => {
        const currentRef = scrollContainerRef.current;
        if (currentRef) {
            currentRef.addEventListener('wheel', disableHorizontalScroll, { passive: false });
            currentRef.addEventListener('touchmove', disableHorizontalScroll, { passive: false });
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('wheel', disableHorizontalScroll);
                currentRef.removeEventListener('touchmove', disableHorizontalScroll);
            }
        };
    }, [scrollContainerRef]);


    return (
        <div className="flex mt-4 w-[77%] md:w-[80%] lg:w-[90%]">

            {show&&
            <PrevButton setShow={setShow} scrollContainerRef={scrollContainerRef} scrollbythe={-222} height={130}/>}
            
            <div className="grid grid-flow-col gap-3 overflow-x-auto no-scrollbar" ref={scrollContainerRef}>
               {ImgUrlData.map((item, index) => (
                    <div key={index} style={{backgroundImage:`url(${item.url})`}} className="w-[210px] h-[130px] bg-cover" />
                ))}
            </div>
            
            <NextButton setShow={setShow} scrollContainerRef={scrollContainerRef} scrollbythe={222} height={130}/>
        </div>
    );
};

export default Photos;
