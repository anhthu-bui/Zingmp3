// libs
import { useState } from "react";

const usePagination = ({ page, limit, total }) => {
  const [pagination, setPagination] = useState({
    page,
    limit,
    total,
  });

  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  const start = pagination.page * pagination.limit - pagination.limit;
  const end = start + pagination.limit;

  return { start, end, pagination, handlePageChange };
};
export default usePagination;
