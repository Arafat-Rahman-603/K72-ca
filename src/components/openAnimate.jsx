import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export default function OpenAnimate({ children }) {
  const stairCon = useRef(null);
  const path = useLocation().pathname;
  const tl = gsap.timeline();
  const childRef = useRef(null);
  useGSAP(() => {
    tl.to(stairCon.current, { display: "block" });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairCon.current, { display: "none" });
    tl.to(".stair", { y: "0%" });
    gsap.from(childRef.current, {
      opacity: 0,
      duration: 2,
      scale: 1.2,
    });
  }, [path]);
  return (
    <div>
      <div ref={stairCon} className="fixed top-0 z-10 h-screen w-full">
        <div className=" h-full w-full flex ">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={childRef}>{children}</div>
    </div>
  );
}
                                                                           