import { createBrowserRouter } from "react-router-dom";
import CmsTemplate from "../admin/CmsTemplate";
import AddEvent from "../admin/ujian/event/form-event/AddEvent";
import ListEvent from "../admin/ujian/event/list-event/ListEvent";
import Subtest from "../admin/ujian/event/subtest/Subtest";
import Login from "../login/Login";
import ListTentor from "../management/tentor/list-tentor/ListTentor";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/cms/ujian/event",
        element: <CmsTemplate title="Event" content={<ListEvent />} />,
    },
    {
        path: "/cms/ujian/event/add",
        element: <CmsTemplate title="Tambah Event" content={<AddEvent />} />,
    },
    {
        path: "/cms/ujian/event/edit/:id",
        element: <CmsTemplate title="Edit Event" content={<AddEvent />} />,
    },
    {
        path: "/cms/ujian/event/subtest/:id",
        element: <CmsTemplate title="Subtest" content={<Subtest/>} />,
    },
    {
        path: "/cms/management/tentor",
        element: <CmsTemplate title="Tentor" content={<ListTentor/>} />,
    },
]);

export default router;
