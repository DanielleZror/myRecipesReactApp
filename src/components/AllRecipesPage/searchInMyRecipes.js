import React from 'react';
import './SearchBox.css'

const Search = (props) => {
  
    return (
       
        <div className="center mr-sm-2">
            <input 
                type="search"
                placeholder="search your recipes"
                onChange={props.onChange}/> 
        </div>
    )
}


export default Search;