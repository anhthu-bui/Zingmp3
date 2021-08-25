// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import SingerComponent from "../../components/SingerComponent";
import TitleComponent from "../../components/TitleComponent";
// actions
import { saveSinger } from "../../actions/saveData";
// images
import singerCover from "../../images/singer_cover.jpeg";
// others
import "./style.scss";

const ItemHotSinger = () => {
  const dispatch = useDispatch();
  const stateSinger = useSelector((state) => state.saveReducer.dataSinger);
  const action = saveSinger(stateSinger);
  useEffect(() => {
    dispatch(action);
  }, []);
  return (
    <div className="hot-singer-wrapper">
      <div className="hot-singer-wrapper-inner">
        <TitleComponent titleName="Nghệ Sĩ Hot" fontSize="26px" />
        <div className="hot-singer-list">
          <div className="first-name">
            <SingerComponent
              name="Mr.Siro"
              image={singerCover}
              width="200px"
              height="210px"
            />
          </div>
          <ul>
            {stateSinger.map((item) => (
              <li key={item.id}>
                <SingerComponent
                  name={item.name}
                  image={item.img}
                  width="100px"
                  height="100px"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ItemHotSinger;
