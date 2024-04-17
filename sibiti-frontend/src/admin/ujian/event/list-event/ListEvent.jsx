import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";
import axios from "axios";

import { Table, Select, Input, Button, Space, Tag, message } from "antd";
import { Link } from "react-router-dom";
import config from "../../../../config/config";
import ModalPopup from "../../../../components/ModalPopup";

import useTable from "./hooks/useTable";
import useDelete from "./hooks/useDelete";

const { Option } = Select;
const { Search } = Input;

const ListEvent = () => {
    const { baseUrl } = config();
    const refreshTable = () => {
        fetchData();
    };
    const {
        pagination,
        handleTableChange,
        handleChangePageSize,
        statusText,
        statusColor,
    } = useTable();
    const { deleteEvent } = useDelete(refreshTable);
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${baseUrl}` + "/event");
            setEvents(response.data.data);
        } catch (error) {
            message.error(error.message)
            console.error(error);
        }
        setLoading(false);
    };

    const handleSearch = async (value) => {
        if (value) {
            setLoading(true);
            try {
                const response = await axios.get(
                    `${baseUrl}/event/search/${value}`
                );
                setEvents(response.data.data);
            } catch (error) {
                console.error("Error searching data:", error);
            }
            setLoading(false);
        } else {
            // Jika tidak ada teks pencarian, ambil semua event
            fetchData();
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;
        if (!value) {
            fetchData();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const convertToIndonesiaTime = (time) => {
        return moment
            .utc(time)
            .tz("Asia/Jakarta")
            .format("YYYY-MM-DD HH:mm:ss");
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
            render: (time) => <span>{convertToIndonesiaTime(time)}</span>,
        },
        {
            title: "Duedate",
            dataIndex: "dueDate",
            key: "duedate",
            width: "15%",
            render: (time) => <span>{convertToIndonesiaTime(time)}</span>,
        },
        {
            title: "Harga",
            dataIndex: "harga",
            key: "harga",
            width: "10%",
            render: (text, record) => `Rp. ${record.harga}`,
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            width: "8%",
            render: (status) => {
                let color = status == 2 ? "geekblue" : "green";
                if (status === "loser") {
                    color = "volcano";
                }
                return (
                    <Tag color={statusColor[status]} key={status}>
                        {statusText[status]}
                    </Tag>
                );
            },
        },
        {
            title: "Action",
            key: "id",
            render: (text, record) => (
                <Space size="small">
                    <Button
                        key={record.key}
                        ghost
                        type="primary"
                        onClick={() =>
                            (window.location.href =
                                "/cms/ujian/event/subtest/" + record.id)
                        }
                    >
                        Subtest
                    </Button>
                    <Button
                        key={record.key}
                        type="default"
                        onClick={() =>
                            (window.location.href =
                                "/cms/ujian/event/edit/" + record.id)
                        }
                    >
                        Edit
                    </Button>
                    <Button
                        key={record.id}
                        onClick={() =>
                            ModalPopup({
                                title: "Apakah ingin hapus data ?",
                                onOk: () => {
                                    deleteEvent(record.id);
                                },
                                content: "Klik OK untuk menghapus data ini",
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
                        onChange={handleChange}
                        onSearch={(value) => handleSearch(value)}
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
