import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal} from "antd";
import axios from "axios";
const { confirm } = Modal;

const useDelete = (refreshTable) => {
    
  const showDeleteConfirm = (id) => {
    confirm({
        title: "Are you sure delete this task?",
        icon: <ExclamationCircleFilled />,
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
            axios
            .delete(`http://localhost:3000/event/${id}`)
            .then((response) => {
              console.log("Deleted data with ID:", id);
              console.log("API response:", response.data);
              refreshTable()
            })
            .catch((error) => {
              console.error("Error deleting data:", error.message);
            });
        },
        onCancel() {
            console.log("Cancel");
        },
    });
};


    return {showDeleteConfirm}
};

export default useDelete;


