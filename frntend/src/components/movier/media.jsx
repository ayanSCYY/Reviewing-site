import { MediaNav } from "../nav";
import { Photos } from "../Photos";

export const Media=()=>{
    return (
        <div className=" ml-[22%] lg:ml-[12%]">
            <div className="text-lg font-bold text-[#59a2a2]">MEDIA</div>
            <MediaNav/>
            <Photos/>
        </div>
    )
}