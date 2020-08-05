import React from 'react';
import './SearchBox.css'

const Search = (props) => {
  
    return (
        <div className="center">
            <input 
                type="search"
                placeholder="search in your recipes"
                onChange={props.onChange}/> 
        </div>
    )
}

export default Search;