// components
import TitleComponent from "../../components/TitleComponent";
import ItemVideo from "../../organs/ItemVideoHot";
// others
import "./style.scss";

const videoList = new Array(12);
for (let i = 0; i < videoList.length; i += 1) {
  videoList[i] = <ItemVideo />;
}

const VideoHot = () => (
  <div className="video-hot-wrapper">
    <TitleComponent titleName="Video Hot" fontSize="26px" />
    <ul className="list-video">
      {videoList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default VideoHot;
