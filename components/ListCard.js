import React from 'react'
import Image from 'next/image'

function ListCard({data, onClick}) {
    const {imagePath, title, singer, time} = data;

  return (
    <div onClick={() => onClick(data)} className='flex gap-4 items-center w-full cursor-pointer'>
        <Image src={imagePath} alt={title} width={50} height={50} />
        <div className='flex justify-between items-center w-full'>
            <div className='flex-col flex gap-1 text-sm'>
                <span>{title}</span>
                <span className='text-gray-400'>{singer}</span>
            </div>
            <span className='text-sm text-gray-400'>{time}</span>
        </div>
    </div>
  )
}

export default ListCard