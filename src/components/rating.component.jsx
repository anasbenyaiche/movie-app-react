import React from 'react'

// ★ ☆

const Rating = ({count, change }) => {
 let stars =[]
for (let i=0;i<5;i++){
    if ( i < count){
        stars.push(<span onClick={() => change(i+1)} >★</span>)
    }
    else {
        stars.push(<span onClick={() => change(i+1)} >☆</span>)
    }
}

    return (
    <div className="movieRating">{stars}</div>
    )
}

export default Rating