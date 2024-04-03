import {createBrowserRouter} from 'react-router-dom'
import Event from '../admin/ujian/Event';
const router = createBrowserRouter([
    {
      path : "/",
      element : <Event/>
    },
  ]);

export default router;