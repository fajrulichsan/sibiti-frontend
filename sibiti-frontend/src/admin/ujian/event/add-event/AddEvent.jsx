// import React, { useState } from "react";
// import { Form, Input, DatePicker, InputNumber, Radio, Button, Modal } from "antd";
// import axios from "axios";
// import config from "../../../../config/config";

// const EventForm = () => {
//     const {baseUrl} = config()
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const onFinish = (values) => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         setIsModalVisible(false);
//         setIsLoading(true);
//         postData(values);
//       })
//       .catch((info) => {
//         console.log("Validate Failed:", info);
//       });
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const postData = (data) => {
//     console.log(data);
//     let dataFinal = {... data}
//     dataFinal.status = Number(data.status)

//     axios.post(`${baseUrl}/event`, dataFinal)
//       .then((response) => {
//         console.log(response.data);
//         setIsSuccessModalVisible(true);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setIsLoading(false);
//         if (error.response && error.response.status === 400) {
//             Modal.error({
//               title: 'Error',
//               content: error.response.data.message, // Menampilkan pesan dari server
//             });
//           } else {
//             Modal.error({
//               title: 'Error',
//               content: 'Failed to submit data!',
//             });
//           }
//       });
//   };

//   const handleSuccessModalOk = () => {
//     setIsSuccessModalVisible(false);
//   };

//   return (
//     <>
//       <Form
//         form={form}
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         initialValues={{
//           size: "default",
//         }}
//         size={"default"}
//         style={{
//           maxWidth: 600,
//         }}
//         onFinish={onFinish}
//       >
//         <Form.Item label="Nama" labelAlign="left" style={{ marginBottom: 10 }} name="name" rules={[{ required: true, message: 'Nama wajib diisi!' }]}>
//           <Input style={{ width: 400 }} />
//         </Form.Item>
//         <Form.Item label="Publish" labelAlign="left" style={{ marginBottom: 10 }} name="publish" rules={[{ required: true, message: 'Tanggal Publish wajib diisi!' }]}>
//           <DatePicker showTime format="DD/MM/YYYY HH:mm" style={{ width: 400 }} />
//         </Form.Item>
//         <Form.Item label="Duedate" labelAlign="left" style={{ marginBottom: 10 }} name="dueDate" rules={[{ required: true, message: 'Tanggal Duedate wajib diisi!' }]}>
//           <DatePicker showTime format="DD/MM/YYYY HH:mm" style={{ width: 400 }} />
//         </Form.Item>
//         <Form.Item label="Harga" labelAlign="left" style={{ marginBottom: 10 }} name="harga" rules={[{ required: true, message: 'Harga wajib diisi!' }]}>
//           <InputNumber style={{ width: 400 }} />
//         </Form.Item>
//         <Form.Item label="Sub Test" labelAlign="left" style={{ marginBottom: 10 }} name="subtest" rules={[{ required: true, message: 'Sub Test wajib diisi!' }]}>
//           <InputNumber style={{ width: 400 }} />
//         </Form.Item>
//         <Form.Item label="Status" labelAlign="left" style={{ marginBottom: 10 }} name="status" rules={[{ required: true, message: 'Status wajib diisi!' }]}>
//           <Radio.Group>
//             <Radio value="1" style={{ width: 150 }}>
//               Publish
//             </Radio>
//             <Radio value="0">Draft</Radio>
//           </Radio.Group>
//         </Form.Item>
//         <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
//         <Button type="primary" htmlType="submit" loading={isLoading}>
//             {isLoading ? 'Loading' : 'Submit'}
//           </Button>
//         </Form.Item>
//       </Form>

//       {/* Modal Konfirmasi */}
//       <Modal title="Konfirmasi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <p>Apakah Anda yakin ingin menyimpan data ini?</p>
//       </Modal>

//       {/* Modal Sukses */}
//       <Modal title="Sukses" visible={isSuccessModalVisible} onOk={handleSuccessModalOk} onCancel={handleSuccessModalOk}>
//         <p>Data berhasil disimpan!</p>
//       </Modal>
//     </>
//   );
// };

// export default EventForm;

import React, { useState } from "react";
import {
    Form,
    Input,
    DatePicker,
    InputNumber,
    Radio,
    Button,
    Modal,
    ConfigProvider
} from "antd";
import moment from "moment"; // Import library moment
import axios from "axios";
import config from "../../../../config/config";
import dayjs from "dayjs";
import locale from "antd/lib/locale/id_ID"; // Import locale from Ant Design
import 'dayjs/locale/id'; // Import locale from dayjs
dayjs.locale('id');

const EventForm = () => {
    const { baseUrl } = config();
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = (values) => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                setIsModalVisible(false);
                setIsLoading(true);
                postData(values);
            })
            .catch((info) => {
                console.log("Validate Failed:", info);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const postData = (data) => {
        let dataFinal = { ...data };
        dataFinal.status = Number(data.status);

        axios
            .post(`${baseUrl}/event`, dataFinal)
            .then((response) => {
                console.log(response.data);
                setIsSuccessModalVisible(true);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);

                if (error.response && error.response.status === 400) {
                    Modal.error({
                        title: "Error",
                        content: error.response.data.message,
                    });
                } else {
                    Modal.error({
                        title: "Error",
                        content: "Failed to submit data!",
                    });
                }
            });
    };

    const handleSuccessModalOk = () => {
        setIsSuccessModalVisible(false);
    };

    // Fungsi untuk mengubah format tanggal
    const formatDate = (date) => {
        return moment(date).format("DD/MM/YYYY HH:mm");
    };

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
                onFinish={onFinish}
            >
                <Form.Item
                    label="Nama"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                    name="name"
                    rules={[{ required: true, message: "Nama wajib diisi!" }]}
                >
                    <Input style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Publish"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                    name="publish"
                    rules={[
                        {
                            required: true,
                            message: "Tanggal Publish wajib diisi!",
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
                    label="Duedate"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                    name="dueDate"
                    rules={[
                        {
                            required: true,
                            message: "Tanggal Duedate wajib diisi!",
                        },
                    ]}
                >
                    <ConfigProvider>
                        <DatePicker
                            showTime
                            format="DD/MM/YYYY HH:mm"
                        />
                    </ConfigProvider>
                </Form.Item>
                <Form.Item
                    label="Harga"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                    name="harga"
                    rules={[{ required: true, message: "Harga wajib diisi!" }]}
                >
                    <InputNumber style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Sub Test"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                    name="subtest"
                    rules={[
                        { required: true, message: "Sub Test wajib diisi!" },
                    ]}
                >
                    <InputNumber style={{ width: 400 }} />
                </Form.Item>
                <Form.Item
                    label="Status"
                    labelAlign="left"
                    style={{ marginBottom: 10 }}
                    name="status"
                    rules={[{ required: true, message: "Status wajib diisi!" }]}
                >
                    <Radio.Group>
                        <Radio value="1" style={{ width: 150 }}>
                            Publish
                        </Radio>
                        <Radio value="0">Draft</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        {isLoading ? "Loading" : "Submit"}
                    </Button>
                </Form.Item>
            </Form>

            {/* Modal Konfirmasi */}
            <Modal
                title="Konfirmasi"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Apakah Anda yakin ingin menyimpan data ini?</p>
            </Modal>

            {/* Modal Sukses */}
            <Modal
                title="Sukses"
                visible={isSuccessModalVisible}
                onOk={handleSuccessModalOk}
                onCancel={handleSuccessModalOk}
            >
                <p>Data berhasil disimpan!</p>
            </Modal>
        </>
    );
};

export default EventForm;
