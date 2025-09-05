import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/work/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Works = () => {

  const projects = [{
    image1: 'w1.jpg',
    image2: 'w3.jpg'
  }, {
    image1: 'w2.jpg',
    image2: 'w4.jpg'
  }, {
    image1: 'w5.jpg',
    image2: 'w6.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' md:pt-[45vh] pt-[32vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-md:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full md:h-[850px] mb-4 flex md:flex-row flex-col md:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Works