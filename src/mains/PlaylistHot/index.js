// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemPlayList from "../../organs/ItemPlayLitst";
import PaginationComponent from "../../components/PaginationComponent";
// actions
import { savePlaylist } from "../../actions/saveData";
// hooks
import useHover from "../../hooks/useHover";
import usePaginationKey from "../../hooks/usePaginationKey";
// others
import "./style.scss";

const PlaylistHot = () => {
  const statePlaylist = useSelector((state) => state.saveReducer.dataPlaylist);
  const dispatch = useDispatch();
  const action = savePlaylist(statePlaylist);
  useEffect(() => {
    dispatch(action);
  }, []);
  // Pagination
  const [hoverRef, isHovered] = useHover();
  const { start, end, pagination, handlePageChange } = usePaginationKey({
    page: 1,
    limit: 8,
    total: statePlaylist.length,
    isHover: isHovered,
  });
  return (
    <div className="playlist-wrapper" ref={hoverRef}>
      <TitleComponent titleName="Khám phá âm nhạc Genz" fontSize="26px" />
      <ul className="list-playlist">
        {statePlaylist.slice(start, end).map((item) => (
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
