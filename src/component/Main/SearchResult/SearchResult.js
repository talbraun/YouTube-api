import React from 'react'
import './SearchResult.css'

const SearchResult = (props) =>{


    const songs= props.songList;
   const songsList = songs.map(song =>({value:song.id.videoId,text:song.snippet.title}))
   const print = songsList.map(item =>{return <button id={item.value} key={item.value} onClick={props.click}>{item.text}</button>})
 

  

  //  const list = Object.keys(songsList =>{return <button key={songsList.value}>{songsList.text}</button>})

    return(
        <div className='result'>
        {print}
  </div>
    )
    

}

export default SearchResult