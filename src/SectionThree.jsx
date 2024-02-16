import React from "react";
import ukiran from "./assets/ukiran.png";
import borobudur from "./assets/borobudur.png";
import komang from "./assets/komang.png";

export default function SectionThree() {
  return (
    <div className="container mx-auto max-w-full w-full h-full overflow-x-hidden">
      <div className="flex flex-col w-full">
        <div className="flex w-full items-center gap-[32px]">
          <img src={borobudur} alt="none" className="w-[259px] h-[172px] object-cover" />
          <span class="stroke-text">ARCHITECTURE</span>
          <img src={komang} alt="none" className="w-[259px] h-[152px] object-cover rounded-[16px" />
          <p className="text-white text-[96px] font-bold">CULTURES</p>
        </div>
        <div className="flex w-full items-center gap-[32px]">
          <img src={ukiran} alt="none" className="w-[259px] h-[145px] object-cover rounded-[16px] border-white border" />
          <p className="text-white text-[96px] font-bold">ART</p>
          <img src={borobudur} alt="none" className="w-[259px] h-[172px] object-cover" />
          <p className="stroke-text">ARCHITECTURE</p>
        </div>
      </div>
    </div>
  );
}
