import React, { Fragment } from "react";

const AddSubTest = () => {
    const [dataSource, setDataSource] = useState([]);
    const { showDeleteConfirm } = useDelete(dataSource, setDataSource);
    const {modalVisible, showModal, handleCancel, handleAdd} = useModal(dataSource, setDataSource)


    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            align: "center",
            width: "3%",
        },
        {
            title: "Nama",
            dataIndex: "name",
            key: "name",
            width: "30%"
        },
        {
            title: "Jumlah",
            dataIndex: "jumlah",
            key: "jumlah", 
            align: "center",
            width: "10%",
            render: (jumlah) => `${jumlah} Buah`,

        },
        {
            title: "Opsi",
            dataIndex: "opsi",
            key: "opsi",
            align: "center",
            width: "10%",
            render: (opsi) => `${opsi} Opsi`,
        },
        {
            title: "Waktu",
            dataIndex: "waktu",
            key: "waktu",
            align: "center",
            width: "10%",
            render : (waktu) => `${waktu} Menit` 
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "center",
            width: "10%",
        },
        {
            title: "Action",
            dataIndex: "action",
            align: "center",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type="default"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record.key)}
                    >
                        Edit
                    </Button>
                
                        <Button
                            danger
                            onClick={() => showDeleteConfirm(record.key)}
                        >
                            Delete
                        </Button>
                </Space>
            ),
            width: "10%",
        },
    ];
    
    return (
        <Fragment>
            <div className="flex justify-between mt-10">
                <h1 className="text-2xl font-semibold">Sub Tes</h1>
                <Button
                    onClick={showModal}
                    type="primary"
                    style={{ marginBottom: 16 }}
                >
                    Tambah Sub Tes
                </Button>
            </div>

            <ModalAddEvent
                visible={modalVisible}
                onCancel={handleCancel}
                onAdd={handleAdd}
            />

            <Table
                bordered
                dataSource={dataSource}
                columns={columns}
                rowClassName="editable-row"
                size="small"
                pagination={false}
            />
        </Fragment>
    );
};

export default AddSubTest;
