import { useState } from "react";
const useModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const handleAdd = (values) => {
        const newData = {
            key: (dataSource.length + 1).toString(),
            ...values,
        };
        setDataSource([...dataSource, newData]);
        setModalVisible(false);
    };

    return {modalVisible, setModalVisible, showModal, handleCancel, handleAdd}
}

export default useModal