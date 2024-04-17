import React, { Fragment, useState, useEffect } from "react";
import { Button, Space, Table, message, Tag, Modal, Form, Input, InputNumber } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import axios from "axios";

import AddSubtest from "./AddSubtest";
import config from "../../../../config/config";
import Loading from "../../../../components/Loading";
import ModalPopup from "../../../../components/ModalPopup";

const Subtest = () => {
    const { id } = useParams();
    const { baseUrl } = config();
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [modalLoading, setModalLoading] = useState(false);
    const [editData, setEditData] = useState(null);
    const statusText = ["Draft", "Publish", "Menunggu Soal"];
    const statusColor = ["red", "blue", "yellow"];

    const [form] = Form.useForm();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get(`${baseUrl}/subtest/event/${id}`)
            .then((response) => {
                setDataSource(response.data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error("Error fetching data:", error);
            });
    };

    const showModal = () => {
        setModalVisible(true);
        form.resetFields()
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const handleAdd = (newSubtest, status) => {
      setModalLoading(true);
      newSubtest.eventId = id;
      newSubtest.status = status;

      // Jika editData ada, lakukan PATCH request
      if (editData) {
        console.log("update");
          axios
              .patch(`${baseUrl}/subtest/${editData.id}`, newSubtest)
              .then((response) => {
                  console.log(response);
                  message.success("Subtest berhasil diubah");
                  setModalVisible(false);
                  setModalLoading(false);
                  fetchData();
              })
              .catch((error) => {
                  setModalLoading(false);
                  ModalPopup({
                      title: "Error",
                      content: error.response.data.message,
                  }).error();
                  console.error(error);
              });
      } else {
          // Jika editData tidak ada, lakukan POST request untuk menambahkan baru
          console.log("add new");
          axios
              .post(`${baseUrl}/subtest`, newSubtest)
              .then((response) => {
                  console.log(response);
                  message.success("Subtest berhasil ditambahkan");
                  setModalVisible(false);
                  setModalLoading(false);
                  fetchData();
              })
              .catch((error) => {
                  setModalLoading(false);
                  ModalPopup({
                      title: "Error",
                      content: error.response.data.message,
                  }).error();
                  console.error(error);
              });
      }
  };

    const handleEdit = (record) => {
        // Mengambil data subtest dari API berdasarkan ID
        axios
            .get(`${baseUrl}/subtest/${record.id}`)
            .then((response) => {
                setEditData(response.data.data);
                setModalVisible(true);
            })
            .catch((error) => {
                message.error("Gagal mengambil data subtest untuk diedit");
                console.error(error);
            });
    };

    const deleteSubtest = (key) => {
        axios
            .delete(`${baseUrl}/subtest/${key}`)
            .then((response) => {
                message.success("Subtest berhasil dihapus");
                setModalLoading(false);
                fetchData();
            })
            .catch((error) => {
                message.error("Gagal menghapus subtest");
                console.error(error);
            });
    };

    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            align: "center",
            width: "3%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Nama",
            dataIndex: "name",
            key: "name",
            width: "20%",
        },
        {
            title: "Deskripsi",
            dataIndex: "deskripsi",
            key: "deskripsi",
            width: "30%",
        },
        {
            title: "Jumlah",
            dataIndex: "jumlahSoal",
            key: "jumlahSoal",
            align: "center",
            width: "10%",
            render: (jumlah) => `${jumlah} Buah`,
        },
        {
            title: "Opsi",
            dataIndex: "opsi",
            key: "opsi",
            align: "center",
            width: "10%",
            render: (opsi) => `${opsi} Opsi`,
        },
        {
            title: "Waktu",
            dataIndex: "waktu",
            key: "waktu",
            align: "center",
            width: "10%",
            render: (waktu) => `${waktu} Menit`,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "center",
            width: "10%",
            render: (status) => {
                return (
                    <Tag color={statusColor[status]} key={status}>
                        {statusText[status]}
                    </Tag>
                );
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            align: "center",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type="default"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>

                    <Button
                        danger
                        onClick={() =>
                            ModalPopup({
                                title: "Apakah ingin hapus data ?",
                                onOk: () => {
                                    setModalLoading(true);
                                    deleteSubtest(record.id);
                                },
                                content: "Klik OK untuk menghapus data ini",
                            }).showConfirm()
                        }
                    >
                        Delete
                    </Button>
                </Space>
            ),
            width: "10%",
        },
    ];

    return (
        <Fragment>
            <div className="flex justify-end">
                <Button
                    onClick={showModal}
                    type="primary"
                    style={{ marginBottom: 16 }}
                >
                    Tambah Sub Tes
                </Button>
            </div>
            <AddSubtest
                visible={modalVisible}
                onCancel={handleCancel}
                onAdd={handleAdd}
                modalLoading={modalLoading}
                editData={editData} // Menambahkan prop editData ke komponen AddSubtest
                form = {form}
            />
            <Table
                bordered
                dataSource={dataSource}
                columns={columns}
                rowClassName="editable-row"
                size="small"
                pagination={false}
                loading={isLoading}
            />
            {modalLoading && <Loading />}
            {/* Custom Loading saat modal sedang loading */}
        </Fragment>
    );
};

export default Subtest;
