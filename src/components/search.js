import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import { requestSearchRecipes } from '../actions'
import { FaSearch } from 'react-icons/fa'

const mapStateToProps = (state) => {
    return {
        recipes: state.search.recipes,
        isPending: state.search.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestSearchRecipes: (userID, search) => requestSearchRecipes(userID, search, dispatch)
    }
}



class allRecipesPage extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();
      }

    handelclick = () => {
        this.props.onRequestSearchRecipes(JSON.parse(sessionStorage.userData).userID, this.myRef.current.value)
    }

    render() {
        const { recipes, isPending, onRequestSearchRecipes } = this.props;

        return (
            <form  class="input-group">
                <FormControl id="searchInput" type="search" ref={this.myRef} name="search" placeholder="Search in all recipes" className="mr-sm-2 submit_on_enter" />
                <FaSearch onClick={this.handelclick} />
                {/* <button class="btn btn-default" type="submit" onSubmit={onRequestSearchRecipes} >FaSearch</button> */}
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

