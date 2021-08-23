// libs
import { RightOutlined } from "@ant-design/icons";
// images
import topicBackground from "../../images/topic-background.png";
import topicTop from "../../images/hot-topic2.jpeg";
import topicBottom from "../../images/hot-topic1.jpeg";
// others
import "./style.scss";

const HotTopic = () => (
  <div className="hot-topic-wrapper">
    <div className="hot-topic-wrapper-inner">
      <div
        className="hot-topic-top"
        style={{ backgroundImage: `url(${topicBackground}) no-repeat center` }}
      >
        <div className="music-for-you">
          <img src={topicTop} width="90px" height="90px" />
        </div>
        <div className="description">
          <h3 className="title">
            <a href="/">Dành riêng cho bạn</a>
          </h3>
          <div className="detail">
            <a href="/">
              Nghe những ca khúc yêu thích và khám phá âm nhạc dành riêng cho
              bạn.
            </a>
          </div>
        </div>
      </div>
      <div className="title-wrapper">
        <h3>
          <a href="/" className="title-link">
            CHỦ ĐỀ HOT
          </a>
        </h3>
      </div>
      <div className="hot-topic-bottom">
        <img src={topicBottom} width="300px" height="90px" />
      </div>
      <div className="hot-topic-link">
        <a href="/">
          Xem thêm Chủ Đề khác <RightOutlined />
        </a>
      </div>
    </div>
  </div>
);

export default HotTopic;
