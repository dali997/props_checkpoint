import React from 'react'
import hardy from './hardy.jpg'
const Photo = props => {
    return (
        <div>
            {props.Photo}
        <img  style={{width:"300px",float:"left",height:"350px",marginLeft:"80px"}} src={hardy} alt="hardy"/>  
        </div>
    )
}

export default Photo;
