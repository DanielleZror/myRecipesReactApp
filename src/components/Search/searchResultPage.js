import React from 'react';
import { connect } from 'react-redux';
import CardsList from '../CardsList/CardsList.js'
import UsersList from '../CardsList/user/usersList'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/notFound'
import { requestSearchRecipes, requestLikeRecipe, requestUnlikeRecipe, requestSearchUsers } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        recipes: state.searchAll.recipes,
        isPending: state.searchAll.isPending,
        users: state.searchUsers.users,
        usersIsPending: state.searchUsers.isPending,
        search: ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestSearchRecipes: (userID, search) => requestSearchRecipes(userID, search, dispatch),
        onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
        onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch),
        onRequestSearchUsers: (search) => requestSearchUsers(search, dispatch)
    }
}

class resultSearchPage extends React.Component {
    componentDidMount() {
        this.props.onRequestSearchRecipes(JSON.parse(sessionStorage.userData).userID, this.props.match.params.search)
        this.props.onRequestSearchUsers(this.props.match.params.search)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.search !== prevProps.search.match.params.search) {
            this.props.onRequestSearchRecipes(JSON.parse(sessionStorage.userData).userID, this.props.match.params.search)
            this.props.onRequestSearchUsers(this.props.match.params.search)
        }
    }

    render() {
        const { recipes, isPending, onRequestLikeRecipe, onRequestUnlikeRecipe, users, usersIsPending } = this.props;

        return (
            <div >
                {isPending ? <Loading /> : recipes.length === 0 ? <NotFound from="search"/> :
                    <CardsList recipes={recipes} nameClass="list-all-page" onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe} />
                }
                {usersIsPending ? <Loading/> : users.length === 0 ? <NotFound from="search"/> :
                    <UsersList users={users}/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(resultSearchPage)

