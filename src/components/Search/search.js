import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Search = () => {

    const [searchField, setSearchField] = useState("");

    const onChange = (event) => {
        setSearchField(event.target.value)
    }

    return (
        <form className="input-group">
            <FormControl id="searchInput" type="search" placeholder="Search in all recipes"
                onChange={onChange} />
            <Link to={`/search/${searchField}`}> <FaSearch className="search-icon" /></Link>
        </form>
    );
}

export default Search

