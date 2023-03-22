import React from 'react'
import Sort from './Sort'
import ListViewItem from './ListViewItem'
import { useProductContext } from '../context/Products_Context'

const ListView = () => {
  const {productData} = useProductContext()
  console.log(productData)
  return (
    <div className='col-span-10 md:pr-20 md:h-screen overflow-scroll scrollbar-hide'>
        <Sort/>
        <div>
            {productData.map(product =>{
              return <ListViewItem key={product.id} {...product}/>
            })}
        </div>
    </div>
  )
}

export default ListView