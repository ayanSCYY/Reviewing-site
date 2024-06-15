import { MenuNavSvg, SearchNavSvg } from "./svg"

export const Nav=()=>{
    return(
        <div>
            <div className=" flex justify-between items-center h-[80px] w-full lg:h-[50px] bg-[#020B12]">
                <div className="ml-5 text-[24px] text-center font-bold text-[#E6E9EE]">
                         R
                </div>
                <div className="flex justify-between items-center">
                    <div  className="text-[18px] font-light text-[#E6E9EE]">
                        <input className=" h-[40px] md:[30px] w-[60px] p-1 bg-[#020B12]/[0.5] border-none text-[#E6E9EE] placeholder:text-[#E6E9EE]/[0.5] focus:outline-none focus:w-[70%] md:" type="text" placeholder="search"/>
                    </div>
                    <SearchNavSvg/>            
                </div>
                <div className="mr-3">
                    <MenuNavSvg/>
                </div>
            </div>
        </div>
    )
}

export const MediaNav=()=>{
    return(
        <div className="flex flex-start gap-10   ">
            <div className="flex flex-col flex-start">
               <button className="text-base mt-6 text-[#F9FFDD] font-semibold ">Photos</button>
               <div className="h-[6px] w-[53px] mt-3 bg-[#7ed2d2]"/>
            </div>
            <button className="text-base mt-3 text-[#c5cab4] font-extralight">Trailer</button>
        </div>
    )
}