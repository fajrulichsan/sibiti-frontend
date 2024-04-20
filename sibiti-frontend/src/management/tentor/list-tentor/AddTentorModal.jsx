import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, message, Select, Spin } from 'antd';
import axios from 'axios';
import config from '../../../config/config';
import debounce from 'lodash/debounce';

const { Option } = Select;

const AddTentorModal = ({ visible, onClose, onRefresh }) => {
    const [loading, setLoading] = useState(false);
    const [emailOptions, setEmailOptions] = useState([]);
    const [searching, setSearching] = useState(false);
    const { baseUrl } = config();
    const [form] = Form.useForm();

    useEffect(() => {
        if (visible) {
            form.resetFields();
            setEmailOptions([]);
        }
    }, [visible, form]);

    const fetchEmail = (value) => {
        if (!value || value.length < 5) {
            setEmailOptions([]);
            return;
        }
        setSearching(true);
        axios.get(`${baseUrl}/users/email/${value}/verified`)
            .then(res => {
                console.log(res);
                const emails = res.data.data.map(user => ({
                    value: user.email,
                    label: user.email,
                    userId: user.id,
                }));
                setEmailOptions(emails);
            })
            .catch(error => {
                message.error(error.message);
            })
            .finally(() => {
                setSearching(false);
            });
    };

    const debounceFetchEmail = debounce(fetchEmail, 800);

    const handleSubmit = (values) => {
        setLoading(true);
        console.log(emailOptions);
        const userIds = emailOptions.filter(option => values.emails.includes(option.value)).map(option => option.userId);
        console.log(userIds);
        axios.post(`${baseUrl}/user-role`, { email: values.emails, userId: userIds, role : "tentor" })
            .then(() => {
                message.success('Tentor berhasil ditambahkan');
                onClose();
                onRefresh();
            })
            .catch(error => {
                message.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleDropdownVisibleChange = (visible) => {
        if (!visible) {
            setSearching(false);
        }
    };

    return (
        <Modal
            title="Tambah Tentor"
            visible={visible}
            onCancel={() => {
                onClose();
                form.resetFields();
                setEmailOptions([]);
            }}
            footer={null}
        >
            <Form form={form} onFinish={handleSubmit}>
                <Form.Item
                    name="emails"
                    rules={[{ required: true, message: 'Silakan masukkan email!' }]}
                >
                    <Select
                        mode="multiple"
                        showSearch
                        placeholder="Email"
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        onSearch={debounceFetchEmail}
                        notFoundContent={searching ? <div className="select-loading"><Spin size="small" /></div> : 'Data tidak ditemukan'}
                        loading={searching}
                        onDropdownVisibleChange={handleDropdownVisibleChange}
                    >
                        {emailOptions.map(option => (
                            <Option key={option.value} value={option.value}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddTentorModal;