import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";

export default function SectionFour() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center gap-[8px] overflow-x-hidden">
        <span className="text-white text-[96px] font-bold">
          GALLERY
        </span>
        <div className="flex gap-[8px]">
          <img
            src={image7}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
        </div>
        <div className="flex gap-[8px]">
          <img
            src={image5}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image1}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image2}
            alt="image 3"
            className="object-cover w-full h-[453px]"
          />
        </div>
        <div className="flex gap-[8px]">
          <img
            src={image4}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image3}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
        </div>
      </div>
    </div>
  );
}
