import { CastData } from "../../config/MovieData";
import { useState, useRef, useEffect } from "react";
import { NextButton, PrevButton } from "../buttons";
import { CarouselActorName, CarouselActorrole, CarouselImg, CastCarouselContainer, Container, ScrollContainer, SectionHeading } from "../style/Cast..style";

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
        <Container>
            <SectionHeading>Cast</SectionHeading>
            <CastCarouselContainer>
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
                        <ScrollContainer key={index} >
                            <CarouselImg
                                style={{ backgroundImage: `url(${item.url})` }}                  
                            />
                            <CarouselActorName>{item.actors}</CarouselActorName>
                            <CarouselActorrole>as- {item.role}</CarouselActorrole>
                        </ScrollContainer>
                    ))}
                </div>
                <NextButton
                    setShow={setShow}
                    scrollContainerRef={scrollContainerRef}
                    scrollbythe={192}
                    height={280}
                />
            </CastCarouselContainer>
        </Container>
    );
};

export default Casts;
