import React from 'react';
import './SortingVs.css';

// function randomIntFromInterval(min , max){
//     //min and max are included
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

const SortingVs = ({array}) => {

    // console.log(array);
    return(
        <div className = "array-container">
            {array.map((arr , idx) =>(
                <div className = "bar" key = {idx} style={{height : `${arr}px`}}>
                    {arr}
                </div>
             ))}
        </div>
    )
}

export default SortingVs
