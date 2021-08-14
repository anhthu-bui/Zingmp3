// libs
import PropTypes from "prop-types";
// others
import "./style.scss";

// eslint-disable-next-line react/prop-types
const DropDownComponent = ({ arrayMenu }) => <div>{arrayMenu}</div>;

// const AlbumVideoHot = ({ backgroundColor, title }) => {
//   const style = {
//     backgroundColor,
//   };
//   return (
//     <div className="album-video-hot" style={style}>
//       AlbumVideoHot_{title}
//     </div>
//   );
// };

// {/* {arrayMenu.map(
//       (arrayMenu,
//       (index) => (
//         <ul>
//           <li key={index}>{arrayMenu}</li>
//         </ul>
//       ))
//     )}
//     ; */}

DropDownComponent.propTypes = {
  arrayMenu: PropTypes.array,
};
export default DropDownComponent;
