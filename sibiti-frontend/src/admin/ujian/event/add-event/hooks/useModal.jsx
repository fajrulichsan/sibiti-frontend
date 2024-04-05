import { useState } from "react";
const useModal = (dataSource, setDataSource) => {
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

    return {modalVisible, setModalVisible, showModal, handleCancel, handleAdd, dataSource, setDataSource}
}

export default useModal