import {createBrowserRouter} from 'react-router-dom'
import CmsTemplate from '../admin/CmsTemplate';
import AddEvent from '../admin/ujian/event/add-event/AddEvent';
import ListEvent from '../admin/ujian/event/list-event/ListEvent';
const router = createBrowserRouter([
    {
      path : "/cms/ujian/event",
      element :  <CmsTemplate title="Event" content={<ListEvent/>}/>
    },
    {
      path : "/cms/ujian/event/add",
      element :  <CmsTemplate title="Tambah Event" content={<AddEvent/>}/>
    },
  ]);

export default router;