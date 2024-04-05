import React, { Fragment, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Table,
    Button,
    Space
} from "antd";
import ModalAddEvent from "./ModalAddEvent";
import useDelete from "./hooks/useDelete";
import useModal from "./hooks/useModal";

const AddEvent = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: "1",
            name: "Penalaran",
            jumlah: 15,
            opsi: 5,
            waktu: 60,
            status: "publish",
        },
    ]);

    const { showDeleteConfirm } = useDelete();

    const {modalVisible, showModal, handleCancel, handleAdd} = useModal()

    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
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
            width: "10%"

        },
        {
            title: "Opsi",
            dataIndex: "opsi",
            key: "opsi",
            width: "10%",
        },
        {
            title: "Waktu",
            dataIndex: "waktu",
            key: "waktu",
            width: "10%",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: "10%",
        },
        {
            title: "Action",
            dataIndex: "action",
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
                            onClick={() => showDeleteConfirm()}
                        >
                            Delete
                        </Button>
                </Space>
            ),
            width: "10%",
        },
    ];

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    return (
        <Fragment>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: "default",
                }}
                size={"default"}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    label="Nama"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Publish"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                >
                    <DatePicker style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Duedate"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                >
                    <DatePicker style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Harga"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                >
                    <InputNumber style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Status"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                >
                    <Radio.Group defaultValue="draft">
                        <Radio value="publish" style={{ width: 150 }}>
                            Publish
                        </Radio>
                        <Radio value="draft">Draft</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>

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

export default AddEvent;
