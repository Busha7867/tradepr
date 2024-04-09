import Maincontents from "@/Components/Maincontents";
import Navbar from "@/Components/navbar/Navbar";
import VideoSlider from "@/Components/navbar/VideoSlider";


export default function Home() {

  return (
    <div>
      <Navbar/>
      <div className="video">
      <VideoSlider/>
      </div>
      <Maincontents/>
    </div>
  );
}
