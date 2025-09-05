import React from "react";
import { Link } from "react-router-dom";

export default function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center justify-center gap-5">
      <Link to="/works" className="border-2 border-white rounded-full md:px-10 px-5  leading-[14vh] uppercase border-solid text-white text-[6vw] font-bold hover:text-[#D3FD50] hover:border-[#D3FD50]">
        Works
      </Link>
      <Link to="/agence" className="border-2 border-white rounded-full border-solid md:px-10 px-5 leading-[14vh] uppercase text-white text-[6vw] font-bold hover:text-[#D3FD50] hover:border-[#D3FD50]">
        Agence
      </Link>
    </div>
  );
}
