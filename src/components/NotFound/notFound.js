import React from 'react';
import './notFound.css'
 
const notFound = (props) => {
    let data = props.from === "search" ? "Sorry, no search result" : "No Data To Show"
    

    return (
        <div className="not-found">
            <h1>{data}</h1>
        </div>
    )
}

export default notFound;