import React, {useEffect} from "react";
import { Modal, Form, Input, InputNumber, Button, Select } from "antd";
import ModalPopup from "../../../../components/ModalPopup";

const { Option } = Select;

const AddSubtest = ({ visible, onCancel, onAdd, editData, form }) => {
  // const [form] = Form.useForm();

  const handleOk = (status) => {
    form.validateFields().then((values) => {
      ModalPopup({
        title: "Apakah ingin simpan data ?",
        onOk: () => {
          console.log("oke");
          onAdd(values, status);
          form.resetFields();
        },
        content: "Klik OK untuk menyimpan data ini",
      }).showConfirm();
    });
  };

  // Set initial form values from editData if it exists
  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        name: editData.name,
        jumlahSoal: editData.jumlahSoal,
        opsi: editData.opsi,
        waktu: editData.waktu,
        deskripsi: editData.deskripsi,
      });
    }
  }, [editData, form]);
  
  return (
    <Modal
      title="Tambah Subtest"
      visible={visible}
      onOk={() => handleOk(1)}
      onCancel={onCancel}
      footer={[
        <Button danger key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button ghost type="primary" onClick={() => handleOk(0)}>
          Draft
        </Button>,
        <Button key="submit" type="primary" onClick={() => handleOk(1)}>
          Simpan
        </Button>,
      ]}
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
          <Input style={{ width: "100%" }} placeholder="Input nama" />
        </Form.Item>
        <Form.Item
          label="Jumlah Soal"
          name="jumlahSoal"
          rules={[{ required: true, message: "Please input jumlah!" }]}
          colon={false}
        >
          <InputNumber style={{ width: "100%" }} placeholder="Input jumlah soal" />
        </Form.Item>
        <Form.Item
          label="Opsi"
          name="opsi"
          rules={[{ required: true, message: "Please select an option!" }]}
          colon={false}
        >
          <Select placeholder="Pilih opsi" style={{ width: "100%" }}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Waktu"
          name="waktu"
          rules={[{ required: true, message: "Please input waktu!" }]}
          colon={false}
        >
          <InputNumber style={{ width: "100%" }} placeholder="Input waktu" />
        </Form.Item>
        <Form.Item
          label="Deskripsi"
          name="deskripsi"
          rules={[{ required: true, message: "Please input deskripsi!" }]}
        >
          <Input.TextArea rows={4} placeholder="Masukkan Deskripsi" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddSubtest;

