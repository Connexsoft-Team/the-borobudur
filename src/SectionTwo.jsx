import React from "react";
import sectiontwoimg from "./assets/sectiontwoimg.png";

export default function SectionTwo() {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="flex gap-[32px] w-full">
        <div className="flex w-full items-center justify-center">
        <img
          src={sectiontwoimg}
          alt="none"
          className="w-[515px] h-[692px] object-cover rounded-[16px]"
        />
        </div>
        <div className="flex flex-col justify-center w-full">
          <span className="text-white text-[96px] font-bold">
            World Heritage
          </span>
          <span className="text-white text-[16px]">
            Between 780-840 AD, during the reign of the Sailendra dynasty, the
            grandest Buddhist relic ever known to mankind was erected. Serving
            both as a sanctuary for Buddhist devotion and a sacred pilgrimage
            site, this monumental structure held within its walls teachings
            guiding individuals to transcend worldly desires and embrace the
            path to enlightenment and wisdom as elucidated by the Buddha. In
            1814, under the command of Sir Thomas Stanford Raffles, British
            troops stumbled upon this marvel, lost to time until then. It wasn't
            until 1835 that efforts were made to meticulously cleanse and
            restore the temple grounds to their former glory.
          </span>
        </div>
      </div>
    </div>
  );
}
