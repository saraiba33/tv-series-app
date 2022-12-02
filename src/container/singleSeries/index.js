import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function SingleSeries() {
    const { id } = useParams();
    const [show, setShow] = useState("");

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed-episodes`)
        .then(response => response.json())
        .then(json => setShow(json))
        
    })

    
    
  return (
    <>
        <h1>Title: {show.name}</h1>
         {/* <div>Rating: {show.rating.average}</div>  */}
         
        {/* <img src={show.image.medium}/> */}
        <div>Summary: {show.summary}</div>
    </>


  )
}

export default SingleSeries