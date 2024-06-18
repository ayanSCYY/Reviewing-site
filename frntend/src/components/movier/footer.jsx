import { FooterBottomData, FooterData, Socials } from "../../config/MovieData"
import { Container, CopyrightContent, FooterAfterSocial, FooterAfterSocialContainer, FooterBottomData1, FooterDataBodyContainer, FooterDataBodyTitle1, FooterDataBodyTitle2, FooterDataBodyTitle3, FooterDataBodyTitle4, FooterDataContainer, FooterDataHead, FooterDataHeadContainer, FooterSocial, FooterSocialContainer, FooterSocialSubContainer } from "../style/Footer.style"

export const Footer=()=>{
  return (
    <Container>
        <FooterDataContainer>
          {FooterData.map((item,index) => (
            <FooterDataHeadContainer key={index}>
                <FooterDataHead>{item.Head}</FooterDataHead>
                <FooterDataBodyContainer>
                    <FooterDataBodyTitle1>{item.BodyTitle1}</FooterDataBodyTitle1>
                    <FooterDataBodyTitle2>{item.BodyTitle2}</FooterDataBodyTitle2>
                    <FooterDataBodyTitle3>{item.BodyTitle3}</FooterDataBodyTitle3>
                    <FooterDataBodyTitle4>{item.BodyTitle4}</FooterDataBodyTitle4>  
                </FooterDataBodyContainer>
            </FooterDataHeadContainer>
          ))}

        </FooterDataContainer>
        <FooterBottomData1>
              <FooterSocialContainer>
                <FooterSocialSubContainer>
                  {Socials.map((item) => (
                    <FooterSocial key={item.key} style={{backgroundImage:`url(${item.img})`}} />
                  ))}
                </FooterSocialSubContainer>
                <FooterAfterSocialContainer>
                 {FooterBottomData.map((item,index)=>(
                  <FooterAfterSocial key={index}>{item.data}</FooterAfterSocial>
                 ))}
                </FooterAfterSocialContainer>
              </FooterSocialContainer>
              <CopyrightContent>Copyright 2024, All Right Reserved by Postcraft</CopyrightContent>
        </FooterBottomData1>
    </Container>
  )
}