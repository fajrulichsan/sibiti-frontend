import React, { Fragment } from 'react'
import NavbarCms from '../../components/NavbarCms'
import Sidebar from '../../components/Sidebar.tsx'
import ListEvent from './event/ListEvent'

const Event = () => {
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
              <h1 className='text-2xl my-5'>Event</h1>
              <ListEvent/>
            </div>
          </div>
        </div>
      
    </Fragment>
    
  )
}

export default Event;