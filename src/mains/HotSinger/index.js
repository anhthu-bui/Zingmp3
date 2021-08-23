// components
import SingerComponent from "../../components/SingerComponent";
import TitleComponent from "../../components/TitleComponent";
// mocks
import dataSinger from "../../mock/Singer";
// images
import singerCover from "../../images/singer_cover.jpeg";
// others
import "./style.scss";

const ItemHotSinger = () => (
  <div className="hot-singer-wrapper">
    <div className="hot-singer-wrapper-inner">
      <TitleComponent titleName="Singer Hot" fontSize="26px" />
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
          {dataSinger.map((item) => (
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
export default ItemHotSinger;
