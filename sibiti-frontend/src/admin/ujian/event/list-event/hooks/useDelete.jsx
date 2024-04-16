import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import config from "../../../../../config/config";
const { confirm } = Modal;

const useDelete = (refreshTable) => {
    const { baseUrl } = config();
    const deleteEvent = (id) => {
        axios
            .delete(`${baseUrl}/event/${id}`)
            .then((response) => {
                console.log("Deleted data with ID:", id);
                console.log("API response:", response.data);
                refreshTable();
            })
            .catch((error) => {
                console.error("Error deleting data:", error.message);
            });
    };

    return { deleteEvent };
};

export default useDelete;
