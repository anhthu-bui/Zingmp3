// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

const AlbumVideoHot = ({ classname, backgroundColor, title }) => {
  const style = {
    backgroundColor,
  };
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={classname} style={style}>
      AlbumVideoHot_{title}
    </div>
  );
};

AlbumVideoHot.propTypes = {
  classname: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
};
export default AlbumVideoHot;
