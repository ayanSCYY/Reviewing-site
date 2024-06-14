//More {

import { useEffect } from "react";
import PropTypes from "prop-types";
import { NextSvg, PrevSvg } from "./svg";

export const PrevButton = ({ setShow, scrollContainerRef,scrollbythe,height }) => {
    const handlePrevClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollbythe,
                behavior: 'smooth'
            });
        }
    };

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            if (scrollLeft === 0) {
                setShow(false);
            }
        }
    };

    useEffect(() => {
        const currentRef = scrollContainerRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScrollPosition);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScrollPosition);
            }
        };
    });

    return (
        <div>
            <button
                style={{height:`${height}px`}}
                className=" w-8 flex justify-center items-center    rounded"
                onClick={handlePrevClick}
            >
                <PrevSvg/>
            </button>
        </div>
    );
};
PrevButton.propTypes = {
    setShow: PropTypes.func.isRequired,
    scrollContainerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    scrollbythe: PropTypes.number.isRequired,
    height:PropTypes.number.isRequired
};


export const NextButton = ({ setShow, scrollContainerRef,scrollbythe,height }) => {

    const handleNextClick = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollbythe, 
                behavior: 'smooth'
            });
            setShow(true)
        }
    };

    return(
        <div>
            <button 
                style={{height:`${height}px`}}
                className=" w-8 flex justify-center items-center  rounded" 
                onClick={handleNextClick}
            >
              <NextSvg/>
            </button>
        </div>
    )

};

NextButton.propTypes = {
    setShow: PropTypes.func.isRequired,
    scrollContainerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    scrollbythe: PropTypes.number.isRequired,
    height:PropTypes.number.isRequired
};

// }more