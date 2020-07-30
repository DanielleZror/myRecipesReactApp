import React from 'react';
import { connect } from 'react-redux';
import CardsList from '../CardsList/CardsList.js'
import { requestSearchRecipes, requestLikeRecipe, requestUnlikeRecipe } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        recipes: state.searchAll.recipes,
        isPending: state.searchAll.isPending,
        search: ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestSearchRecipes: (userID, search) => requestSearchRecipes(userID, search, dispatch),
        onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
        onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)

    }
}

class resultSearchPage extends React.Component {
    componentDidMount() {
        this.props.onRequestSearchRecipes(JSON.parse(sessionStorage.userData).userID, this.props.match.params.search)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.search !== prevProps.search.match.params.search) {
            this.props.onRequestSearchRecipes(JSON.parse(sessionStorage.userData).userID, this.props.match.params.search)
        }
    }

    render() {
        const { recipes, isPending, onRequestLikeRecipe, onRequestUnlikeRecipe } = this.props;

        return (
            <div >
                {isPending ? <h1>loading</h1> : recipes.length === 0 ? <h1>not found</h1> :
                    <CardsList recipes={recipes} nameClass="list-all-page" onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe} />
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(resultSearchPage)

