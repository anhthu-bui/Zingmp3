import HotTopic from "../HotTopic";
import ZingChart from "../ZingChart";
import "./style.scss";

function SiderLayout() {
  return (
    <div className="siderLayout">
      <HotTopic />
      <ZingChart backgroundColor="orange" title="Bài hát" />
      <ZingChart backgroundColor="#C0C0C0" title="MV" />
      <ZingChart backgroundColor="#800000" title="Album" />
      <ZingChart backgroundColor="#000080" title="Tin tức" />
    </div>
  );
}
export default SiderLayout;
