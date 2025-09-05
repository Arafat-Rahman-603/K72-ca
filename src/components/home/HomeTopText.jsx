import React from "react";
import Video from "./Video";

export default function HomeTopText() {
  return (
    <div className="font-[font1] md:pt-5 pt-15 text-center text-white">
      <div className="flex items-center justify-center md:text-[9.5vw] uppercase md:leading-[8vw] leading-[10vw] text-3xl">L'étincelle</div>
      <div className="flex gap-5 items-center justify-center md:text-[9.5vw]  uppercase leading-[10vw] md:leading-[8vw] text-3xl ">
        qui
        <div className="md:h-20 h-10 md:w-40 w-20 rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="flex text-3xl items-center justify-center md:text-[9.5vw] uppercase md:leading-[8vw] leading-[10vw]">la créativité</div>
    </div>
  );
}
