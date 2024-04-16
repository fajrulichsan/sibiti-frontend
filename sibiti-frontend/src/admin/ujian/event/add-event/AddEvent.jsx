import React, { useState } from "react";
import { Form, Input, DatePicker, InputNumber, Button, Modal } from "antd";
import axios from "axios";
import config from "../../../../config/config";
import Loading from "../../../../components/Loading";
import ModalPopup from "../../../../components/ModalPopup";

const EventForm = () => {
    const { baseUrl } = config();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const postData = (data, status) => {
        let dataFinal = { ...data };
        dataFinal.status = status;
        axios
            .post(`${baseUrl}/event`, dataFinal)
            .then((response) => {
                console.log(response.data);
                setIsLoading(false);
                ModalPopup({
                    title: "Success",
                    content: "Data berhasil disimpan",
                    onOk : window.location.href ="/cms/ujian/event"
                }).success();
            })
            .catch((error) => {
                console.error("Error:", error);
                ModalPopup({
                    title: "Error",
                    content: error.message,
                }).error();
                setIsLoading(false);
            });
    };

    const submit = (status) => {
        form.validateFields()
            .then((values) => {
                ModalPopup({
                    title: "Apakah ingin simpan data ?",
                    onOk: () => {
                        setIsLoading(true);
                        postData(values, status);
                    },
                    content: "Klik OK untuk menyimpan data ini",
                }).showConfirm();
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };

    const cancel = () => {
        ModalPopup({
            title: "Apakah ingin cancel ?",
            content: "Klik OK untuk keluar",
            onOk : window.location.href = "/cms/ujian/event"
        }).showConfirm()
    }

    return (
        <>
            <Form
                form={form}
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
                    style={{ marginBottom: 20 }}
                    name="name"
                    rules={[{ required: true, message: "Nama wajib diisi!" }]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Publish"
                    labelAlign="left"
                    style={{ marginBottom: 20 }}
                    name="publish"
                    rules={[
                        {
                            required: true,
                            message: "Tanggal publish wajib diisi!",
                        },
                    ]}
                >
                    <DatePicker
                        showTime
                        format="DD/MM/YYYY HH:mm"
                        style={{ width: 400 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Due Date"
                    labelAlign="left"
                    style={{ marginBottom: 20 }}
                    name="dueDate"
                    rules={[
                        {
                            required: true,
                            message: "Tanggal due date wajib diisi!",
                        },
                    ]}
                >
                    <DatePicker
                        showTime
                        format="DD/MM/YYYY HH:mm"
                        style={{ width: 400 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Harga"
                    labelAlign="left"
                    style={{ marginBottom: 20 }}
                    name="harga"
                    rules={[{ required: true, message: "Harga wajib diisi!" }]}
                >
                    <InputNumber style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Sub Test"
                    labelAlign="left"
                    style={{ marginBottom: 20 }}
                    name="subtest"
                    rules={[
                        { required: true, message: "Sub test wajib diisi!" },
                    ]}
                >
                    <InputNumber style={{ width: 400 }} />
                </Form.Item>
                <Form.Item>
                    <div className="space-x-3 mt-10 flex justify-end w-full">
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={() => submit(2)}
                        >
                            Save
                        </Button>
                        <Button 
                            ghost 
                            type="primary" 
                            htmlType="submit"
                            onClick={() => submit(0)}>
                            Draft
                        </Button>
                        <Button 
                            danger 
                            type="default"
                            onClick={() => cancel()}>
                            Cancel
                        </Button>
                    </div>
                </Form.Item>
            </Form>

            {isLoading && <Loading />}
        </>
    );
};

export default EventForm;
