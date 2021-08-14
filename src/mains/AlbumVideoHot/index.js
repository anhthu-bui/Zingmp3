// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const AlbumVideoHot = ({ backgroundColor, title }) => {
  const style = {
    backgroundColor,
  };
  return (
    <div className="album-video-hot" style={style}>
      AlbumVideoHot_{title}
    </div>
  );
};

AlbumVideoHot.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};
export default AlbumVideoHot;
