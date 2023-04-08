import React from 'react'
import {TiStarFullOutline, TiStarHalfOutline, TiStarOutline} from 'react-icons/ti'

const SingleProductDesc = ({name, reviews, price, description, inStock, sid, company, stars}) => {

    const rating = Array.from({length: 5}, (_, index)=>{
        const number = index + 0.5
        return (
            <span key={index}>
                {stars >= index + 1 ? (<TiStarFullOutline className='text-yellow-500'/>) : stars >= number ? (<TiStarHalfOutline className='text-yellow-500'/>) : (<TiStarOutline className='text-yellow-500'/>)}
            </span>
        )
    })

  return (
    <div>
        <h3 className="section-head">{name}</h3>
        <div className='flex'>{rating}</div>
          <p className="text-gray-400">({reviews} customer reviews)</p>
          <h5 className="font-bold text-yellow-700 text-2xl">$ {price}</h5>
          <p className="leading-8 mt-5 text-gray-500">{description}</p>
          <div className="flex gap-5 mt-5">
            <div className="font-bold leading-8">
              <p>Available:</p>
              <p>SKU:</p>
              <p>Brand:</p>
            </div>
            <div className="leading-8">
              <p>{inStock}</p>
              <p>{sid}</p>
              <p>{company}</p>
            </div>
          </div>
    </div>
  )
}

export default SingleProductDesc