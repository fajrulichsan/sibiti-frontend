import { useState } from "react";

const useTable = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  const handleChangePageSize = (value) => {
    setPagination({
        ...pagination,
        pageSize: value,
    });

};

  return { pagination, handleTableChange, handleChangePageSize };
};

export default useTable;
