import React from 'react'
import './SearchResult.css'

const SearchResult = (props) =>{


    const songs= props.songList;
    const songsList = songs.map(song =>({value:song.id.videoId,text:song.snippet.title}))
    const list = Object.keys(songsList =>{return <button key={songsList.value}>{songsList.text}</button>})

    return(
        <div className='result'>
        {list}

        </div>
    )
    

}

export default SearchResult