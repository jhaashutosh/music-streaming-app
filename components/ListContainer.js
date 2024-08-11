import React from 'react'
import ListCard from './ListCard';

function ListContainer({title, data}) {
  return (
    <div className='w-full mt-8'>
        <div className="recently-played w-full flex justify-between">
            <h3 className="text-white">{title}</h3>
            <span className="text-blue-500 cursor-pointer text-sm">See All</span>
        </div>
        <div className="flex-col flex gap-4 mt-4">
            {data.map((item) => (
                <ListCard key={item.id} data={item} />
            ))}
        </div>
    </div>
  )
}

export default ListContainer