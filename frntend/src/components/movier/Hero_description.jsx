
import { /* useAnimate,easeInOut  */} from "framer-motion";
import {  } from "framer-motion";
import { useState,useEffect } from "react";
/* import { useCallback,useState ,useEffect} from "react"; */
import { Gradientborders } from "../gradientborders";
import { AudienceReaction, CriticReviews } from "../gradientcomponents";
import { Button1, Button2, ButtonContainer, Container, ContainerSection, GradientContainer, MovieDescription, MovieDescriptionContainer, MovieReleaseDate, MovieTitle, MovieTitleImg, ReactionsAudReacContainer, ReactionsAudReacSubContainer, ReactionsAudReacSvgContainer, ReactionsAudReacTitle, ReactionsAudreac, ReactionsContainer, ReactionsImdb, ReactionsImdbContainer, ReactionsImdbSubContainer, ReactionsImdbSvgContainer, ReactionsImdbTitle, SectionMain, SubContainer } from "../style/Hero_description.styles";
import { Hero_desciption } from "../../config/MovieData";
import {  HerodescriptionSvgEmoji, HerodescriptionSvgStar } from "../svg";


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
            setClickcount(0); 
        }
    }, [clickcount]); 

    const More = () => {
        setClickcount(prevCount => prevCount + 1);
    };
    
    return(
        <Container>
            <SubContainer>
                <ContainerSection>
                  <MovieTitleImg/>
                  <SectionMain>
                    <MovieTitle>{Hero_desciption[0].MovieName}</MovieTitle>
                    <MovieReleaseDate>{Hero_desciption[0].MovieReleaseDate}</MovieReleaseDate>
                    <MovieDescriptionContainer>Description:</MovieDescriptionContainer>
                    <MovieDescription>{Hero_desciption[0].MovieDescription.pre}{show && Hero_desciption[0].MovieDescription.post} {more &&<button onClick={More} className="text-red-300">More</button>}{less && <button onClick={More} className="text-red-300">Less</button>}</MovieDescription>
                    <ReactionsContainer>
                        <ReactionsImdbContainer>
                            <ReactionsImdbSvgContainer>
                               <HerodescriptionSvgStar/>
                            </ReactionsImdbSvgContainer>
                            <ReactionsImdbSubContainer>
                                <ReactionsImdb>{Hero_desciption[0].MovieImdb}</ReactionsImdb>
                                <ReactionsImdbTitle>IMDB rating</ReactionsImdbTitle>
                            </ReactionsImdbSubContainer>
                        </ReactionsImdbContainer>
                        <ReactionsAudReacContainer>
                            <ReactionsAudReacSvgContainer>
                              <HerodescriptionSvgEmoji/>
                            </ReactionsAudReacSvgContainer>
                            <ReactionsAudReacSubContainer>
                                <ReactionsAudreac>{Hero_desciption[0].AudienceReaction}</ReactionsAudreac>
                                <ReactionsAudReacTitle>audience reaction</ReactionsAudReacTitle>
                            </ReactionsAudReacSubContainer>
                        </ReactionsAudReacContainer>
                    </ReactionsContainer>
                    <ButtonContainer>
                        <Button1>Rate the movie</Button1>
                        <Button2>Watch trailer</Button2>
                    </ButtonContainer>
                  </SectionMain>
                  <GradientContainer>
                     <Gradientborders/>
                     <CriticReviews/>
                     <Gradientborders/>
                     <AudienceReaction/>   
                     <Gradientborders/>  
                  </GradientContainer>
                </ContainerSection>
            </SubContainer>
        </Container>
    )
}