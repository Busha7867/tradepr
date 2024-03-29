
import Navbar from "@/Components/navbar/Navbar";
import VideoSlider from "@/Components/navbar/VideoSlider";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="video">
      <VideoSlider/>
      </div>
    </div>
  );
}
