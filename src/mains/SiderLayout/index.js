import HotTopic from "../HotTopic";
import ZingChart from "../ZingChart";
import "./style.scss";

function SiderLayout() {
  return (
    <div className="siderLayout">
      <HotTopic />
      <ZingChart backgroundColor="orange" title="Bài hát" height="750px" />
      <ZingChart backgroundColor="#C0C0C0" title="MV" height="550px" />
      <ZingChart backgroundColor="#800000" title="Album" height="650px" />
      <ZingChart backgroundColor="#000080" title="Tin tức" height="550px" />
    </div>
  );
}
export default SiderLayout;
