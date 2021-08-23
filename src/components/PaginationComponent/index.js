// libs
import { Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
// others
import "./style.scss";

const PaginationComponent = ({ pagination, onPageChange }) => {
  const { page, limit, total } = pagination;
  const totalPage = Math.ceil(total / limit);
  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  console.log(page);

  return (
    <div className="pagination-wrapper">
      <Button
        className="btn-pre"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <LeftOutlined />
      </Button>
      <div className="list-page">
        {page}/{totalPage}
      </div>
      <Button
        className="btn-next"
        disabled={page >= totalPage}
        onClick={() => handlePageChange(page + 1)}
      >
        <RightOutlined />
      </Button>
    </div>
  );
};

PaginationComponent.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

PaginationComponent.defaultProps = {
  onPageChange: null,
};
export default PaginationComponent;
