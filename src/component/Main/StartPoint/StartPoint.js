import React from 'react'
import './StartPoint.css'

const StartPoint = (props) => {

    return(
    <div className='startpoint' >
       <h5>Start Point (sec)</h5>
        <input type={Text} onChange={props.sec} ></input>

        
    </div>)

}

export default StartPoint