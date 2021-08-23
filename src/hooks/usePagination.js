// libs
import { useState } from "react";
import PropTypes from "prop-types";

import PaginationComponent from "../../components/PaginationComponent";

const usePagination = ({ data }) => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: data.length,
  });

  const handlePageChange = (newpage) => {
    setPagination({ ...pagination, page: (pagination.page = newpage) });
  };

  const start = pagination.page * pagination.limit - pagination.limit;
  const end = start + pagination.limit;

  <PaginationComponent
    pagination={pagination}
    onPageChange={handlePageChange}
  />;

  return { start, end };
};
usePagination.propTypes = {
  data: PropTypes.object.isRequired,
};
export default usePagination;
