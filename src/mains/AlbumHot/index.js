// libs
import React, { useState } from "react";
// components
import TitleComponent from "../../components/TitleComponent";
import ItemAlbum from "../../organs/ItemAlbumHot";
import PaginationComponent from "../../components/PaginationComponent";
// mocks
import dataAlbumHot from "../../mocks/AlbumHot";
// others
import "./style.scss";

const AlbumHot = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: dataAlbumHot.length,
  });

  const handlePageChange = (newpage) => {
    setPagination({ ...pagination, page: (pagination.page = newpage) });
  };

  const start = pagination.page * pagination.limit - pagination.limit;
  const end = start + pagination.limit;

  return (
    <div className="album-hot-wrapper">
      <TitleComponent titleName="Album Hot" fontSize="26px" />
      <ul className="list-album">
        {dataAlbumHot.slice(start, end).map((item) => (
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
