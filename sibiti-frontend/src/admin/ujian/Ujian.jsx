import React, { Fragment } from 'react'
import NavbarCms from '../../components/NavbarCms'
import Sidebar from '../../components/Sidebar'
import ListUjian from './ListUjian'

const Ujian = () => {
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
          <div>
            <ListUjian/>
          </div>
          </div>
        </div>
      
    </Fragment>
    
  )
}

export default Ujian