import React from "react";
import ukiran from "./assets/ukiran.png";
import borobudur from "./assets/borobudur.png";
import komang from "./assets/komang.png";

export default function SectionThree() {
  return (
    <div className="container max-w-screen h-full">
      <div className="flex flex-col max-w-screen mt-[10rem] mb-[64px] gap-[32px]">
        <div className="inline-flex flex-nowrap max-w-screen items-center gap-[32px]">
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover"
          />
          <span class="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">CULTURES</p>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">ART</p>
        </div>
        <div className="inline-flex flex-nowrap max-w-screen items-center gap-[32px]">
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">ART</p>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover"
          />
          <p className="stroke-text">ARCHITECTURE</p>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">CULTURES</p>
        </div>
      </div>
    </div>
  );
}
