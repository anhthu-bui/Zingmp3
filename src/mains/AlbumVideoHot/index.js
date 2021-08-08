/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./style.scss";

function AlbumVideoHot(props) {
  let style = {};
  if (props) {
    // eslint-disable-next-line react/prop-types
    style = { backgroundColor: props.backgroundColor };
  }
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="album-video-hot" style={style}>
      AlbumVideoHot_{props.title}
    </div>
  );
}
export default AlbumVideoHot;
