import React from 'react'
import SearchField from "react-search-field";
import classes from './Main.css'


const Main = (props) =>{
    return(
        <div>
            <div className={classes.searchbar}>
                <SearchField
                onSearchClick={props.search}
                />
                
            </div>
        </div>)
    
}
export default Main