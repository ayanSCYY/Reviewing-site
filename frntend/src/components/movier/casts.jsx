import { CastData } from "../../config/MovieData";
import { useState, useRef, useEffect } from "react";
import { NextButton, PrevButton } from "../buttons";

export const Casts = () => {
    const scrollContainerRef = useRef(null);
    const [show, setShow] = useState(false);

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
        <div className="ml-[22%] mt-16 lg:ml-[12.4%]">
            <div className="text-2xl font-bold text-[#59a2a2]">Cast</div>
            <div className="flex mt-8 w-[77%] md:w-[80%] lg:w-[90%]">
                {show && (
                    <PrevButton
                        setShow={setShow}
                        scrollContainerRef={scrollContainerRef}
                        scrollbythe={-192}
                        height={280}
                    />
                )}
                <div ref={scrollContainerRef} className="grid grid-flow-col gap-2 md:gap-3 overflow-x-hidden no-scrollbar">
                    {CastData.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center w-[180px] h-[280px] bg-black/[0.5] shadow-lg">
                            <div
                                style={{ backgroundImage: `url(${item.url})` }}
                                className="rounded-full bg-cover w-[130px] h-[130px]"
                            />
                            <div className="text-sm mt-5 font-semibold text-center text-[#F9FFDD]">{item.actors}</div>
                            <div className="text-[10px] font-normal text-center text-[#F9FFDD]">as- {item.role}</div>
                        </div>
                    ))}
                </div>
                <NextButton
                    setShow={setShow}
                    scrollContainerRef={scrollContainerRef}
                    scrollbythe={192}
                    height={280}
                />
            </div>
        </div>
    );
};

export default Casts;
