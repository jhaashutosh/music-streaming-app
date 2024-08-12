import React, { useState, useEffect, useContext } from 'react'
import ListCard from './ListCard';
import CurrentMusicContext from '../context/currentMusicContext';
import {musicList as data} from '../data/MusicData';

function ListContainer({title}) {

  const {setCurrentMusic, setIsMusicChanged} = useContext(CurrentMusicContext);
  const [visibleCards, setVisibleCards] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const totalCards = data.length;
    (totalCards > 3) ? setVisibleCards(3) : setVisibleCards(totalCards);
  }, []);

  function toggleShowMoreHandler() {
    setShowMore(!showMore);
    if (!showMore) {
      setVisibleCards(data.length);
    } else {
      setVisibleCards(3);
    }
  }

  return (
    <div className='w-full mt-8'>
        <div className="recently-played w-full flex justify-between">
            <h3 className="text-white">{title}</h3>
            <span onClick={toggleShowMoreHandler} className="text-blue-500 cursor-pointer text-sm">{showMore ? 'See Less' : 'See All'}</span>
        </div>
        <div className="flex-col flex gap-4 mt-4">
            {data.slice(0, visibleCards).map((item) => (
                <ListCard key={item.id} data={item} onClick={() => {
                    setIsMusicChanged(true);
                    setCurrentMusic(item)
                  }} />
            ))}
        </div>
    </div>
  )
}

export default ListContainer