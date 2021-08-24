// libs
import { useState } from "react";
// hooks
import useEventListener from "./useEventListener";

const usePaginationKey = ({ page, limit, total, isHover }) => {
  const [pagination, setPagination] = useState({
    page,
    limit,
    total,
  });
  const totalPage = Math.ceil(pagination.total / pagination.limit);
  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };
  const keyCode = {
    arrowUp: 38,
    arrowDown: 40,
  };
  const handleKeyChange = (e) => {
    switch (e.keyCode) {
      case keyCode.arrowDown: {
        e.preventDefault();
        if (pagination.page <= 1) {
          return pagination.page;
        }
        handlePageChange(pagination.page - 1);
        break;
      }
      case keyCode.arrowUp: {
        e.preventDefault();
        if (pagination.page >= totalPage) {
          return pagination.page;
        }
        handlePageChange(pagination.page + 1);
        break;
      }
      default:
        return pagination.page;
    }
    return pagination.page;
  };

  const start = pagination.page * pagination.limit - pagination.limit;
  const end = start + pagination.limit;

  useEventListener("keydown", isHover, handleKeyChange);
  return { start, end, pagination, handlePageChange };
};
export default usePaginationKey;
