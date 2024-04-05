import React from 'react';
import { Modal, Form, Input, InputNumber, Radio } from 'antd';

const ModalAddEvent = ({ visible, onCancel, onAdd }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
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
          form={form}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item label="Nama" name="name" rules={[{ required: true, message: 'Please input name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Jumlah" name="jumlah" rules={[{ required: true, message: 'Please input jumlah!' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Opsi" name="opsi" rules={[{ required: true, message: 'Please input opsi!' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Waktu" name="waktu" rules={[{ required: true, message: 'Please input waktu!' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select status!' }]}>
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
