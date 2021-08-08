import { Row, Col } from "antd";
import SongRating from "../SongRating";
import AlbumVideoHot from "../AlbumVideoHot";
import ZingChart from "../ZingChart";
import HotSinger from "../HotSinger";
import "./style.scss";

function BodyLayout() {
  return (
    <div className="bodyLayout">
      <SongRating />
      <AlbumVideoHot backgroundColor="gray" title="Kết Hợp Hoàn Hảo" />
      <AlbumVideoHot backgroundColor="pink" title="Album hot" />
      <AlbumVideoHot backgroundColor="brown" title="Video hot" />
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          <ZingChart backgroundColor="#330066" title="Nhạc Việt Mới" />
        </Col>
      </Row>
      <HotSinger />
    </div>
  );
}
export default BodyLayout;
