// libs
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemAlbum from "../../organs/ItemAlbumHot";
import PaginationComponent from "../../components/PaginationComponent";
// hooks
import useHover from "../../hooks/useHover";
import usePaginationKey from "../../hooks/usePaginationKey";
// actions
import { saveAlbumHot } from "../../actions/saveData";
// others
import "./style.scss";

const AlbumHot = () => {
  const dispatch = useDispatch();
  const stateAlbumHot = useSelector((state) => state.saveReducer.dataAlbumHot);
  const action = saveAlbumHot(stateAlbumHot);
  useEffect(() => {
    dispatch(action);
  });
  // Pagination
  const [hoverRef, isHovered] = useHover();
  const { start, end, pagination, handlePageChange } = usePaginationKey({
    page: 1,
    limit: 12,
    total: stateAlbumHot.length,
    isHover: isHovered,
  });
  return (
    <div className="album-hot-wrapper" ref={hoverRef}>
      <TitleComponent titleName="Album Hot" fontSize="26px" />
      <ul className="list-album">
        {stateAlbumHot.slice(start, end).map((item) => (
          <li key={item.id}>
            <ItemAlbum
              name={item.name}
              singer={item.singer}
              img={item.img}
              key={item.id}
            />
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
export default AlbumHot;
