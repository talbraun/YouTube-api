import React from 'react'
import SearchField from "react-search-field";
import './Main.css'//import classes from './Main.css'
import SearchResult from './SearchResult/SearchResult'
import YouTube from '@u-wave/react-youtube';
import StartPoint from './StartPoint/StartPoint'




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
                <StartPoint
                sec={props.sec}
                />
        </div>
        <div className='player'>
        <YouTube
        video={props.songId}
        startSeconds={props.ySec}
        width={640}
        height={360}
        autoplay={1}
        />
        </div>
        </div>
        )
    
}
export default Main