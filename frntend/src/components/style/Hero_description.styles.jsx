import tw from "twin.macro";
import styled from "styled-components";

export const Container= styled.div`
 ${tw`h-[1750px] md:h-[1700px]  lg:h-[1000px] 2xl:h-[1050px]`}
`

export const SubContainer= styled.div`
 ${tw`flex items-center justify-center  w-full bg-2ndpage bg-cover sm:bg-2ndpage1 `}
`

export const ContainerSection= styled.div`
 ${tw`lg:grid  lg:grid-cols-2 w-full h-screen bg-gradient-to-b from-[#204545]/[0.35] from-40% to-[#204545]/[0.96] to-80%`}
`
export const MovieTitleImg= styled.div`
 ${tw` h-[30%] mt-[20%] ml-[20%]  mr-[20%] mb-[0%] sm:m-[10%] sm:ml-[20%]  md:ml-[20%] sm:w-[65%] shadow-2xl lg:w-[330px] lg:h-[350px] lg:mt-[20%]  bg-2ndpage2   `}
`
export const SectionMain= styled.div`
 ${tw`flex flex-col mt-[15%]`}
`
export const MovieTitle=styled.div`
 ${tw`font-bold text-main  ml-[20%] lg:ml-[1%] text-head`}
`
export const MovieReleaseDate=styled.div`
 ${tw`font-normal text-[#F9FFDD]  ml-[21%] lg:ml-[2%]  text-[15px]`}
`
export const MovieDescriptionContainer=styled.div`
 ${tw`font-semibold text-[#F9FFDD] pt-4 ml-[21%] lg:ml-[2%] text-[18px]`}
`
export const MovieDescription=styled.div`
 ${tw`font-normal text-[#F9FFDD] pt-4 ml-[21%] lg:ml-[2%] text-[15px] mr-[5%]`}
`

export const ReactionsContainer=styled.div`
 ${tw`flex`}
`
export const ReactionsImdbContainer=styled.div`
 ${tw`flex ml-[20%] lg:ml-[2%] mt-8 `}
`

export const ReactionsImdbSvgContainer=styled.div`
 ${tw`mt-3 `}
`
export const ReactionsImdbSubContainer=styled.div`
 ${tw`flex flex-col ml-2`}
`
export const ReactionsImdb=styled.div`
 ${tw`text-red-300 text-[40px] font-bold`}
`
export const ReactionsImdbTitle=styled.div`
 ${tw`text-red-300 text-[20px] font-semibold `}
`
export const ReactionsAudReacContainer=styled.div`
 ${tw`flex  ml-[3%] lg:ml-[10%] mt-8 `}
`

export const ReactionsAudReacSvgContainer=styled.div`
 ${tw`mt-3 `}
`
export const ReactionsAudReacSubContainer=styled.div`
 ${tw`flex flex-col ml-2`}
`
export const ReactionsAudreac=styled.div`
 ${tw`text-red-300 text-[40px] font-bold`}
`
export const ReactionsAudReacTitle=styled.div`
 ${tw`text-red-300 text-[20px] font-semibold `}
`
export const ButtonContainer=styled.div`
 ${tw`mt-16  flex `}
`
export const Button1=styled.div`
 ${tw`flex justify-center items-center w-[150px] h-[50px] ml-[22%] bg-[#F9FFDD] text-[#204545] text-[16px] font-semibold hover:cursor-pointer`}
`
export const Button2=styled.div`
 ${tw`flex justify-center items-center w-[150px] h-[50px] ml-4 text-[#F9FFDD] border-2 border-[#F9FFDD] bg-[#204545] text-[16px] font-semibold hover:cursor-pointer`}
`
export const ContentWrapper = styled.div`
  ${tw` sm:h-[500px]  px-5`}
`

export const GradientContainer = styled.div`
  ${tw` col-span-2 mt-16`}
`
