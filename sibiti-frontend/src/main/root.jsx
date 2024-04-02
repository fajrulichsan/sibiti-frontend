import {createBrowserRouter} from 'react-router-dom'
import Ujian from '../admin/ujian/Ujian';
const router = createBrowserRouter([
    {
      path : "/cms/ujian",
      element : <Ujian/>
    },
  ]);

export default router;