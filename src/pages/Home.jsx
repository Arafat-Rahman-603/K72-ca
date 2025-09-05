import HomeTopText from '../components/home/HomeTopText'
import HomeBottomText from '../components/home/HomeBottomText'
import Video from '../components/home/Video'

export default function Home() {
  return (
    <>
    <div className="h-screen w-screen fixed">
      <Video />
    </div>
     <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeTopText />
        <HomeBottomText />
    </div>
    </>
  )
}
