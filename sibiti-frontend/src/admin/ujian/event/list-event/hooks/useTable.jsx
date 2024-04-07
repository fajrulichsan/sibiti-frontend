import { useState } from "react";

const useTable = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const statusText = ['Draft', 'Publish', 'Menunggu Soal'];
  const statusColor = ['red', 'blue', 'yellow']

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  const handleChangePageSize = (value) => {
    setPagination({
        ...pagination,
        pageSize: value,
    });

};

  return { pagination, handleTableChange, handleChangePageSize, statusText, statusColor};
};

export default useTable;
