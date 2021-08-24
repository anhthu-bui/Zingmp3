// components
import TitleComponent from "../../components/TitleComponent";
import ItemPlayList from "../../organs/ItemPlayLitst";
import PaginationComponent from "../../components/PaginationComponent";
// mocks
import dataPlayList from "../../mocks/PlayList";
// hooks
import useHover from "../../hooks/useHover";
import usePaginationKey from "../../hooks/usePaginationKey";
// others
import "./style.scss";

const PlaylistHot = () => {
  const [hoverRef, isHovered] = useHover();
  const { start, end, pagination, handlePageChange } = usePaginationKey({
    page: 1,
    limit: 8,
    total: dataPlayList.length,
    isHover: isHovered,
  });
  return (
    <div className="playlist-wrapper" ref={hoverRef}>
      <TitleComponent titleName="Khám phá âm nhạc Genz" fontSize="26px" />
      <ul className="list-playlist">
        {dataPlayList.slice(start, end).map((item) => (
          <li key={item.id}>
            <ItemPlayList name={item.name} img={item.img} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <PaginationComponent
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PlaylistHot;
