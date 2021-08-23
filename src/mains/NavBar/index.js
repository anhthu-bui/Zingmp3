// libs
import { HomeFilled, BellOutlined, UploadOutlined } from "@ant-design/icons";
// contexts
import { useLocale } from "../../contexts/LocaleContexts";
// dataSources
import { menuTop } from "../../dataSources/Menu";
// others
import "./style.scss";

const NavBar = () => {
  const { locale, setLocale, localeDataSource } = useLocale();
  return (
    <div className="navbar-wrapper">
      <div className="navbar-wrapper-inner">
        <div className="menu-navbar">
          <ul>
            <li>
              <a href="#" className="icon-home">
                <HomeFilled />
              </a>
            </li>
            {menuTop.map((item) => (
              <li key={item.id}>
                <a href="/">{localeDataSource[item.name]}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="locale-change">
          <select
            className="select-change-locale"
            defaultValue={locale}
            onChange={(e) => setLocale(e.target.value)}
          >
            <option value="vi">{localeDataSource.vi}</option>
            <option value="en">{localeDataSource.en}</option>
          </select>
        </div>
        <div className="navbar-right">
          <a href="#" className="turn-off-ads">
            <BellOutlined />
            Tắt quảng cáo
          </a>
          <a href="#" className="upload">
            <UploadOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
