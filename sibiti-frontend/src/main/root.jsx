import { createBrowserRouter } from "react-router-dom";
import CmsTemplate from "../admin/CmsTemplate";
import AddEvent from "../admin/ujian/event/form-event/AddEvent";
import ListEvent from "../admin/ujian/event/list-event/ListEvent";
import Subtest from "../admin/ujian/event/subtest/Subtest";
import Home from "../Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
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
]);

export default router;
