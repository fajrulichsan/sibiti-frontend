import React, { Fragment } from 'react'
import NavbarCms from '../components/NavbarCms'
import Sidebar from '../components/Sidebar.jsx'

const CmsTemplate = ({content, title}) => {
  return (
    <Fragment>
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
            <Sidebar/>
          </div>
          <div className='col-span-10'>
            <div>
              <NavbarCms/>
            </div>
            <div className='px-5'>
              <h1 className='text-2xl font-semibold my-5'>{title}</h1>
              {content}
            </div>
          </div>
        </div>
      
    </Fragment>
    
  )
}

export default CmsTemplate;