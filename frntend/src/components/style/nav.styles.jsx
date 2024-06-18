import tw from "twin.macro"
import styled from "styled-components"

//Nav.jsx
export const Container=styled.div`
 ${tw`flex justify-between items-center h-[80px] w-full lg:h-[50px] bg-[#020B12]`}
`

export const SiteTitle=styled.div`
 ${tw`ml-5 text-[24px] text-center font-bold text-[#E6E9EE]`}
`

export const SearchContainer=styled.div`
 ${tw`flex justify-between items-center`}
`

export const SearchInputContainer=styled.div`
 ${tw`text-[18px] font-light text-[#E6E9EE]`}
`

export const SearchInput=styled.input`
 ${tw`h-[40px]  w-[60px] p-1 bg-[#020B12]/[0.5] border-none text-[#E6E9EE] placeholder:text-[#E6E9EE]/[0.5] focus:outline-none focus:w-[70%] `}
`

export const MenuContainer=styled.div`
 ${tw`mr-3`}
`

//MediaNav.jsx

export const MediaNavContainer=styled.div`
 ${tw`flex items-start gap-7  `}
`

export const PhotosButtonContainer=styled.div`
 ${tw`flex flex-col items-start`}
`

export const PhotosButton=styled.div`
 ${tw`text-base mt-6 text-[#F9FFDD] font-semibold `}
`

export const PhotosButtonUnderLine=styled.div`
 ${tw`h-[6px] w-[53px] mt-3 bg-[#7ed2d2]`}
`

export const TrailerButton=styled.div`
 ${tw`text-base mt-6 text-[#c5cab4] font-extralight`}
`

