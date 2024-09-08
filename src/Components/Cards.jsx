import React from 'react'

const Cards = ({item}) => {
  return (
    <div className='w-56 h-60 overflow-hidden rounded-md  bg-blue-300 flex flex-col  items-center'>
        <img className='w-full h-44' src={item.image} />
        <p className='font-semibold text-white text-sm text-center'>{item.description.slice(0,70)}</p>
    </div>
  )
}

export default Cards