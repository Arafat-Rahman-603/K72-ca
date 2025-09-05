import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

export default function Agence() {

   const imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg','13.jpg','14.jpg','15.jpg'];



    const imagesRef = useRef();
    const imgDivRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.to(imgDivRef.current, {
            scrollTrigger: {
                trigger: imgDivRef.current,
                markers:false,
                start: "top 26.4%",
                end: "bottom -172%",
                scrub: true,
                pin: true,
                pinSpacing:true,
                pinReparent: true,
                pinType: "transform",
                scrub:1,
                anticipatePin: 1,
                invalidateOnRefresh:true,
                onUpdate: (e) => {
                    const progress = e.progress;
                    const index = Math.floor(progress * (imgArr.length - 1));
                    imagesRef.current.src = imgArr[index];
                }
            }
        });
    
    }, []);
    return (<>
        <div className='section1 py-1 '>
            <div ref={imgDivRef} className='md:h-[20vw] rounded-3xl md:w-[15vw] h-[30vw] w-[25vw] absolute md:top-[12vw] -top-10 left-[30vw] bg-amber-200 -z-1 overflow-hidden'>
                <img ref={imagesRef} className='h-full w-full md:rounded-3xl rounded-sm object-cover' src="1.jpg" alt="SomeOne" />
        </div>
    <div className='relative font-sans font-medium'>
        <div className='md:mt-85 mt-50'>
            <h1 className='text-center text-[19vw] leading-[15vw] uppercase '>
                Soixan7e
                <br />
                Douze
            </h1>
        </div>
        <div className='pl-[40%] mt-20'>
            <p className="md:text-6xl text-xl cursor-pointer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
    </div>
    </div>
    <div className="section2 h-screen">

    </div>
    </>
  )
}
