import React from 'react'
import SearchField from "react-search-field";
import './Main.css'//import classes from './Main.css'
import SearchResult from './SearchResult/SearchResult'
import YouTube from 'react-youtube';



const Main = (props) =>{
    return(<div>
        <div className='data'>
            
                <SearchField
                onSearchClick={props.search}
                />
                <SearchResult className='searchResult'
                songList={props.song}
                click={props.click}
                />
        </div>
        <div className='player'>
        <YouTube
        videoId={props.songId}
        />
        </div>
        </div>
        )
    
}
export default Main