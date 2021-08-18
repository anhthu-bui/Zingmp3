// components
import TitleComponent from "../../components/TitleComponent";
import ItemVideo from "../../organs/ItemVideoHot";
// others
import "./style.scss";

const VideoList = [
  <ItemVideo key="01" />,
  <ItemVideo key="02" />,
  <ItemVideo key="03" />,
  <ItemVideo key="04" />,
  <ItemVideo key="05" />,
  <ItemVideo key="06" />,
  <ItemVideo key="07" />,
  <ItemVideo key="08" />,
  <ItemVideo key="09" />,
  <ItemVideo key="10" />,
  <ItemVideo key="11" />,
  <ItemVideo key="12" />,
];
const VideoHot = () => (
  <div className="video-hot-wrapper">
    <TitleComponent titleName="Video Hot" fontSize="26px" />
    <ul className="list-video">
      {VideoList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default VideoHot;
