// export default ListEvent;
import React, { useEffect, useState } from "react";
import { Table, Select, Input, Button, Space, Tag, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useTable from "./hooks/useTable";
import useDelete from "./hooks/useDelete";
import useEdit from "./hooks/useEdit";
import { Link } from "react-router-dom";
import axios from "axios";

const { Option } = Select;
const { Search } = Input;

const ListEvent = () => {
    const API_BASE_URL = "http://localhost:3000"
    const refreshTable = () => {
        fetchData();
      };
    const { pagination, handleTableChange, handleChangePageSize } = useTable();
    const { showDeleteConfirm } = useDelete(refreshTable);
    const { handleEdit } = useEdit();
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}` + "/event");
            setEvents(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };


    const columns = [
        {
            title: "No",
            dataIndex: "id",
            key: "id",
            width: "3%",
            render: (text, record, index) => index + 1, // Render index as No
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: "30%",
        },
        {
            title: "Publish",
            dataIndex: "publish",
            key: "publish",
            width: "15%",
        },
        {
            title: "Duedate",
            dataIndex: "dueDate",
            key: "duedate",
            width: "15%",
        },
        {
            title: "Harga",
            dataIndex: "harga",
            key: "harga",
            width: "10%",
            render: (text, record) => `Rp. ${record.harga}`,
        },
        {
            title: "Sub Tes",
            dataIndex: "subtest",
            key: "subtes",
            width: "7%",
        },
        {
            title: "status",
            key: "status",
            dataIndex: "status",
            width: "8%",
        },
        {
            title: "Action",
            key: "id",
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        key={record.key}
                        type="default"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record.id)}
                    >
                        Edit
                    </Button>
                    <Button
                      key={record.key}
                     onClick={() => showDeleteConfirm(record.id)} danger>
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
                <Select
                    defaultValue="10"
                    style={{ width: 80 }}
                    onChange={handleChangePageSize}
                >
                    <Option value="10">10</Option>
                    <Option value="25">25</Option>
                    <Option value="50">50</Option>
                </Select>

                <div className="space-x-2">
                    <Link to="/cms/ujian/event/add">
                        <Button type="primary">Tambah</Button>
                    </Link>
                    <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={(value) => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
            </div>

            <Table
                columns={columns}
                dataSource={events}
                loading={loading}
                pagination={{
                    ...pagination,
                    showSizeChanger: false,
                    position: ["bottomCenter"],
                }}
                size="small"
                onChange={handleTableChange}
            />
        </div>
    );
};

export default ListEvent;

