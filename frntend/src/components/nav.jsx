import { Container, MediaNavContainer, MenuContainer, PhotosButton, PhotosButtonContainer, PhotosButtonUnderLine, SearchContainer, SearchInput, SearchInputContainer, SiteTitle, TrailerButton } from "./style/nav.styles"
import { MenuNavSvg, SearchNavSvg } from "./svg"

export const Nav=()=>{
    return(
        <>
            <Container>
                <SiteTitle>
                         R
                </SiteTitle>
                <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput type="text" placeholder="search"/>
                    </SearchInputContainer>
                    <SearchNavSvg/>            
                </SearchContainer>
                <MenuContainer>
                    <MenuNavSvg/>
                </MenuContainer>
            </Container>
        </>
    )
}

export const MediaNav=()=>{
    return(
        <MediaNavContainer>
            <PhotosButtonContainer>
               <PhotosButton>Photos</PhotosButton>
               <PhotosButtonUnderLine/>
            </PhotosButtonContainer>
            <TrailerButton>Trailer</TrailerButton>
        </MediaNavContainer>
    )
}