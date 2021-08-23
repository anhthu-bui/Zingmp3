// components
import TitleComponent from "../../components/TitleComponent";
import ItemVideo from "../../organs/ItemVideoHot";
// mocks
import dataVideoHot from "../../mock/VideoHot";
// others
import "./style.scss";

const VideoHot = () => (
  <div className="video-hot-wrapper">
    <TitleComponent titleName="Video Hot" fontSize="26px" />
    <ul className="list-video">
      {dataVideoHot.map((item) => (
        <li key={item.id}>
          <ItemVideo name={item.name} singer={item.singer} img={item.img} />
        </li>
      ))}
    </ul>
  </div>
);

export default VideoHot;
