import { Socials } from "../../config/MovieData"

export const Footer=()=>{
  return (
    <div className=" flex flex-col h-[602px] >md,<lg:h-[400px] lg:h-[350px] bg-[#0f2828]/[0.6] mt-[80px] ">
       <div className="ml-[20%] mr-[20%] grid grid-cols-2 >md,<lg:grid-cols-4 gap-5 gap-y-10 mt-[80px] ">
            <div className="flex flex-col justify-center gap-6">
                <div className="text-[#F9FFDD] text-base font-semibold">Postcrafts</div>
                <div className="text-[#F9FFDD]/[0.6] flex flex-col font-light gap-2 text-[12px] ">
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]" >About</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Features</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Works</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Career</div>  
                </div>
            </div>
            <div className="flex flex-col justify-center gap-6 uiui">
                <div className="text-[#F9FFDD] text-base font-semibold">Help</div>
                <div className="text-[#F9FFDD]/[0.6] flex flex-col font-light gap-2 text-[12px] ">
                    <div  className="hover:cursor-pointer hover:text-[#F9FFDD]">Customer support</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Delivery details</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Terms & condition</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Privacy Policy</div>  
                </div>
            </div>
            <div className="flex flex-col justify-center gap-6 uiui">
                <div className="text-[#F9FFDD] text-base font-semibold">Resources</div>
                <div className="text-[#F9FFDD]/[0.6] flex flex-col font-light gap-2 text-[12px] ">
                    <div  className="hover:cursor-pointer hover:text-[#F9FFDD]">Free Ebooks</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Development Tutorial</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">How to -blog</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Youtube Playlist</div>  
                </div>
            </div>
            <div className="flex flex-col justify-center gap-6 uiui">
                <div className="text-[#F9FFDD] text-base font-semibold">Extra Links</div>
                <div className="text-[#F9FFDD]/[0.6] flex flex-col font-light gap-2 text-[12px] ">
                    <div  className="hover:cursor-pointer hover:text-[#F9FFDD]">Customer support</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Delivery details</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Terms & condition</div>
                    <div className="hover:cursor-pointer hover:text-[#F9FFDD]">Privacy Policy</div>  
                </div>
            </div>

        </div>
            <div className="flex flex-col lg:flex-row lg:justify-between max-lg:gap-5 mt-[90px] ml-[20%] mr-[17%]">
              <div className="flex gap-4 flex-col sm:flex-row ">
                <div className="flex gap-4">
                  {Socials.map((item) => (
                    <button key={item.key} style={{backgroundImage:`url(${item.img})`}} className="bg-cover h-5 w-5" />
                  ))}
                </div>
                <div className="flex gap-4">
                  <div className="text-[#F9FFDD]/[0.6] hover:cursor-pointer hover:text-[#F9FFDD] font-light text-[11px]">Privacy policy</div>
                  <div className="text-[#F9FFDD]/[0.6] hover:cursor-pointer hover:text-[#F9FFDD] font-light text-[11px]">Terms & Condition</div>
                  <div className="text-[#F9FFDD]/[0.6] hover:cursor-pointer hover:text-[#F9FFDD] font-light text-[11px]">support</div>
                </div>
              </div>
              <div className="text-[#F9FFDD]/[0.6]  text-[11px]">Copyright 2024, All Right Reserved by Postcraft</div>
            </div>
    </div>
  )
}