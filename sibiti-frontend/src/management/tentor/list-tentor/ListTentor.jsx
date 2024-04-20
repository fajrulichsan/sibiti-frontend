import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Select, Input, Button, Space, message } from "antd";
import ModalPopup from "../../../components/ModalPopup";
import AddTentorModal from "./AddTentorModal";
import config from "../../../config/config";

const { Option } = Select;
const { Search } = Input;

const ListTentor = () => {
    const { baseUrl } = config();
    const [loading, setLoading] = useState(false);
    const [tentors, setTentors] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searching, setSearching] = useState(false);

    const fetchData = () => {
        setLoading(true);
        axios.get(`${baseUrl}/user-role/by-role/tentor`)
            .then(response => {
                setTentors(response.data);
            })
            .catch(error => {
                message.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSearch = async (value) => {
        if (value) {
            setLoading(true);
            try {
                const response = await axios.get(`${baseUrl}/tentor/search/${value}`);
                setTentors(response.data.data);
            } catch (error) {
                console.error("Error searching data:", error);
            }
            setLoading(false);
        } else {
            fetchData();
        }
    };

    const deleteTentor = (tentorId) => {
        setLoading(true);
        axios.delete(`${baseUrl}/user-role/${tentorId}`)
            .then(() => {
                message.success('Tentor berhasil dihapus');
                fetchData();
            })
            .catch(error => {
                message.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: "No",
            dataIndex: "id",
            key: "id",
            width: "3%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "30%",
        },
        {
            title: "Action",
            key: "id",
            render: (text, record) => (
                <Space size="small">
                    <Button
                        key={record.id}
                        onClick={() =>
                            ModalPopup({
                                title: "Are you sure to delete this data?",
                                onOk: () => {
                                    deleteTentor(record.id);
                                },
                                content: "Click OK to delete this data",
                            }).showConfirm()
                        }
                        danger
                    >
                        Delete
                    </Button>
                </Space>
            ),
            width: "10%",
        },
    ];

    return (
        <div>
            <div className="flex w-full justify-between mb-4">
                <Select defaultValue="10" style={{ width: 80 }} loading={searching}>
                    <Option value="10">10</Option>
                    <Option value="25">25</Option>
                    <Option value="50">50</Option>
                </Select>

                <div className="space-x-2">
                    <Button type="primary" onClick={showModal}>Tambah</Button>
                    <Search
                        placeholder="input search text"
                        allowClear
                        onChange={handleSearch}
                        onSearch={handleSearch}
                        style={{ width: 200 }}
                    />
                </div>
            </div>

            <Table
                columns={columns}
                dataSource={tentors}
                loading={loading}
                pagination={{ showSizeChanger: false, position: ["bottomCenter"] }}
                size="small"
            />

            <AddTentorModal visible={isModalVisible} onClose={closeModal} onRefresh={fetchData} />
        </div>
    );
};

export default ListTentor;
