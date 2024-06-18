import { MediaNav } from "../nav";
import { Photos } from "../Photos";
import { MediaContainer, MediaSubContainer } from "../style/media_Photos.style";

export const Media=()=>{
    return (
        <MediaContainer>
            <MediaSubContainer>MEDIA</MediaSubContainer>
            <MediaNav/>
            <Photos/>
        </MediaContainer>
    )
}