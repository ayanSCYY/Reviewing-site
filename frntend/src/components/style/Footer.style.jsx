import tw from "twin.macro";
import styled from "styled-components";

export const Container=styled.div`
 ${tw` flex flex-col h-[602px] 0.6lg:h-[350px] bg-[#0f2828]/[0.6] mt-[80px] `}
`

export const FooterDataContainer=styled.div`
 ${tw`ml-[20%] mr-[20%] grid grid-cols-2 0.6lg:grid-cols-4 gap-5 gap-y-10 mt-[80px] `}
`

export const FooterDataHeadContainer=styled.div`
 ${tw`flex flex-col justify-center gap-6`}
`

export const FooterDataHead=styled.div`
 ${tw`text-[#F9FFDD] text-base font-semibold`}
`

export const FooterDataBodyContainer=styled.div`
 ${tw`text-[#F9FFDD]/[0.6] flex flex-col font-light gap-2 text-[12px] `}
`

export const FooterDataBodyTitle1=styled.div`
 ${tw`hover:cursor-pointer hover:text-[#F9FFDD]`}
`

export const FooterDataBodyTitle2=styled.div`
 ${tw`hover:cursor-pointer hover:text-[#F9FFDD]`}
`
export const FooterDataBodyTitle3=styled.div`
 ${tw`hover:cursor-pointer hover:text-[#F9FFDD]`}
`
export const FooterDataBodyTitle4=styled.div`
 ${tw`hover:cursor-pointer hover:text-[#F9FFDD]`}
`
export const FooterBottomData1=styled.div`
 ${tw`flex flex-col lg:flex-row lg:justify-between max-lg:gap-5 mt-[90px] ml-[20%] mr-[17%]`}
`
export const FooterSocialContainer=styled.div`
 ${tw`flex gap-4 flex-col sm:flex-row `}
`
export const FooterSocialSubContainer=styled.div`
 ${tw`flex gap-4`}
`
export const FooterSocial=styled.button`
 ${tw`bg-cover h-5 w-5`}
`
export const FooterAfterSocialContainer=styled.div`
 ${tw`flex gap-4`}
`
export const FooterAfterSocial=styled.button`
 ${tw`text-[#F9FFDD]/[0.6] hover:cursor-pointer hover:text-[#F9FFDD] font-light text-[11px]`}
`

export const CopyrightContent=styled.div`
 ${tw`text-[#F9FFDD]/[0.6]  text-[11px]`}
`