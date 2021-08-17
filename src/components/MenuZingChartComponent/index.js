// libs
import classNames from "classnames";
// others
import "./style.scss";

const MenuZingChartComponent = () => {
  const menu = ["Việt Nam", "US-UK", "K-Pop"];
  return (
    <ul className="menu-zingchart-wrapper">
      {menu.map((item, index) => (
        <li key={item}>
          <a href="/" className={classNames({ active: index === 0 })}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuZingChartComponent;
