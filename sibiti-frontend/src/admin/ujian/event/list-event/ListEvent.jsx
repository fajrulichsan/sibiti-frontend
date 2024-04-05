import React from "react";
import { Table, Select, Input, Button, Space, Tag, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useTable from "./hooks/useTable";
import useDelete from "./hooks/useDelete";
import useEdit from "./hooks/useEdit";
import { Link } from "react-router-dom";
const { Option } = Select;
const { Search } = Input;

const data = [
    {
        key: "1",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "2",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "3",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "4",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "5",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "6",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "7",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "8",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "9",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
    {
        key: "10",
        name: "Ujian Tryout SBM 1",
        publish: "10:10 20 Desember 2023 ",
        duedate: "10:10 21 Desember 2023 ",
        harga: 25000,
        subtes: "2",
        status: ["Publish"], //status : publish , waiting, draft
    },
];

const ListEvent = () => {
    const { pagination, handleTableChange, handleChangePageSize } = useTable();
    const { showDeleteConfirm } = useDelete();
    const { handleEdit } = useEdit();

    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            width: "3%",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "key",
            width: "30%",
        },
        {
            title: "Publish",
            dataIndex: "publish",
            key: "key",
            width: "15%",
        },
        {
            title: "Duedate",
            dataIndex: "duedate",
            key: "key",
            width: "15%",
        },
        {
            title: "Harga",
            dataIndex: "harga",
            key: "key",
            width: "10%",
            render: (text, record) => `Rp. ${record.harga}`,
        },
        {
            title: "Sub Tes",
            dataIndex: "subtes",
            key: "key",
            width: "7%",
        },
        {
            title: "status",
            key: "status",
            dataIndex: "status",
            render: (_, { status }) => (
                <>
                    {status.map((tag) => {
                        let color = tag.length > 5 ? "geekblue" : "red";
                        if (tag === "loser") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
            width: "8%",
        },
        {
            title: "Action",
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
                    <Button onClick={showDeleteConfirm} danger>
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
                dataSource={data}
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
