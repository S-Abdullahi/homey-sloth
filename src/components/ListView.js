import React from 'react'
import Sort from './Sort'

const ListView = () => {
  return (
    <div className='col-span-10 md:pr-40 md:h-screen overflow-scroll scrollbar-hide'>
        <Sort/>
        <p>List View</p>
    </div>
  )
}

export default ListView