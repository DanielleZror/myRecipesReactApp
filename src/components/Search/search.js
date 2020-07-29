import React from 'react';
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';


class allRecipesPage extends React.Component {
    constructor() {
        super();
        this.state = { searchField: "" }
    }

    onChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        return (
            <form class="input-group">
                <FormControl id="searchInput" type="search" ref={this.myRef} placeholder="Search in all recipes"
                    onChange={this.onChange} />
                <Link to={`/search/${this.state.searchField}`}> <FaSearch className="search-icon"/></Link>
            </form>
        );
    }
}

export default allRecipesPage

