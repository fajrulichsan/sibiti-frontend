import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal} from "antd";
const { confirm } = Modal;

const useDelete = (dataSource, setDataSource) => {
  const showDeleteConfirm = (key) => {
    confirm({
        title: "Are you sure delete this task?",
        icon: <ExclamationCircleFilled />,
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
            // Hapus data dari dataSource berdasarkan id
            console.log(dataSource);
            const newData = dataSource.filter(item => item.key !== key);
            setDataSource(newData);
        },
        onCancel() {
            console.log("Cancel");
        },
    });
};


    return {showDeleteConfirm}
};

export default useDelete;
