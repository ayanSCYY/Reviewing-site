import { useRef, useState,useEffect } from 'react';
import { ImgUrlData } from '../config/MovieData';
import { NextButton, PrevButton } from './buttons';
import { PhotosContainer,PhotosI } from './style/media_Photos.style';

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
        <PhotosContainer>

            {show&&
            <PrevButton setShow={setShow} scrollContainerRef={scrollContainerRef} scrollbythe={-222} height={130}/>}
            
            <div ref={scrollContainerRef} className='grid grid-flow-col gap-3 overflow-x-auto no-scrollbar'>
               {ImgUrlData.map((item, index) => (
                    <PhotosI key={index} style={{backgroundImage:`url(${item.url})`}} />
                ))}
            </div>
            
            <NextButton setShow={setShow} scrollContainerRef={scrollContainerRef} scrollbythe={222} height={130}/>
        </PhotosContainer>
    );
};

export default Photos;
