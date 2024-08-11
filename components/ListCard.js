import React from 'react'
import Image from 'next/image'

function ListCard({data}) {
    const {imagePath, title, singer, musicPath, time = '4s'} = data
  return (
    <div onClick={() => console.log(`Playing ${musicPath}`)} className='flex gap-4 items-center w-full'>
        <Image src={imagePath} alt={title} width={50} height={50} />
        <div className='flex justify-between items-center w-full'>
            <div className='flex-col gap-1'>
                <span>{title}</span>
                <span className='text-sm text-gray-400'>{singer}</span>
            </div>
            <span className='text-sm text-gray-400'>{time}</span>
        </div>
    </div>
  )
}

export default ListCard