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
      <AlbumVideoHot
        backgroundColor="gray"
        title="Kết Hợp Hoàn Hảo"
        height="400px"
      />
      <AlbumVideoHot backgroundColor="pink" title="Album hot" height="500px" />
      <AlbumVideoHot backgroundColor="brown" title="Video hot" height="600px" />
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          <ZingChart
            backgroundColor="#330066"
            title="Nhạc Việt Mới"
            height="550px"
          />
        </Col>
      </Row>
      <HotSinger />
    </div>
  );
}
export default BodyLayout;
