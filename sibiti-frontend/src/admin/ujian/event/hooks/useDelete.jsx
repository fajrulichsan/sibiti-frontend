import { useState } from "react";

const useDelete = () => {
    const [deleteKey, setDeleteKey] = useState(null)
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = (key) => {
      setDeleteKey(key)
    };

    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setConfirmLoading(false);
        setDeleteKey(null);
      }, 2000);
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setDeleteKey(null)
    };

    const handleDelete = (key) => {
      console.log("Delete", key);
  };

    return {deleteKey, confirmLoading, showPopconfirm, handleOk, handleCancel, handleDelete}
};

export default useDelete;
