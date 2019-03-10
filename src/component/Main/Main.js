import React from 'react'
import SearchField from "react-search-field";
import './Main.css'//import classes from './Main.css'
import SearchResult from './SearchResult/SearchResult'


const Main = (props) =>{
    return(
        <div className='data'>
            
                <SearchField
                onSearchClick={props.search}
                />
                <SearchResult className='searchResult'
                songList={props.song}
                />
                
            
        </div>)
    
}
export default Main