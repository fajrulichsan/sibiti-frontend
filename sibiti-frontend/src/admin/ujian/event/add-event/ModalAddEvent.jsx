import React from "react";
import { Modal, Form, Input, InputNumber, Radio } from "antd";

const ModalAddEvent = ({ visible, onCancel, onAdd }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then((values) => {
            onAdd(values);
            form.resetFields();
        });
    };

    return (
        <Modal
            title="Tambah Data"
            visible={visible}
            onOk={handleOk}
            onCancel={onCancel}
        >
            <Form
                labelAlign="left"
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item
                    label="Nama"
                    name="name"
                    rules={[{ required: true, message: "Please input name!" }]}
                    colon={false}
                >
                    <Input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Jumlah"
                    name="jumlah"
                    rules={[
                        { required: true, message: "Please input jumlah!" },
                    ]}
                    colon={false}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    label="Opsi"
                    name="opsi"
                    rules={[{ required: true, message: "Please input opsi!" }]}
                    colon={false}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    label="Waktu"
                    name="waktu"
                    rules={[{ required: true, message: "Please input waktu!" }]}
                    colon={false}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        { required: true, message: "Please select status!" },
                    ]}
                    colon={false}
                >
                    <Radio.Group>
                        <Radio value="publish">Publish</Radio>
                        <Radio value="draft">Draft</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalAddEvent;

