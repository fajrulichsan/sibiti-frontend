import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {RouterProvider} from 'react-router-dom'
import root from './main/root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={root} />
)