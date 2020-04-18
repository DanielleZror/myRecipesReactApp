import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Search = ({searchfield, searchChange }) => {
  
    return (
        <Form inline>
            <FormControl id="searchInput" type="text" placeholder="Search" className="mr-sm-2 submit_on_enter" onChange={searchChange} />
        </Form>
    )
}


export default Search;