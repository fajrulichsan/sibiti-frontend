import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal} from "antd";
const { confirm } = Modal;

const useDelete = () => {
    
  const showDeleteConfirm = () => {
    confirm({
        title: "Are you sure delete this task?",
        icon: <ExclamationCircleFilled />,
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
            console.log("OK");
        },
        onCancel() {
            console.log("Cancel");
        },
    });
};


    return {showDeleteConfirm}
};

export default useDelete;
