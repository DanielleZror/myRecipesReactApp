import React from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/notFound'
import DetailsCard from './DetailsUserCard'
import CardsList from '../CardsList/CardsList'
import { requestUserData, requestAllRecipesByUser, requestLikeRecipe, requestUnlikeRecipe } from '../../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        // isPending: state.user.isPending,
        user: state.user.users[ownProps.match.params.id],
        // isSucess: state.user.isSucess,
        isRecipesPending: state.allByUser.isPending,
        recipes: state.allByUser.recipes,
        isRecipesSucess: state.allByUser.isSucess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestUserDataById: (userID) => requestUserData(userID, dispatch),
        onRequestAllRecipesByUser: (userID) => requestAllRecipesByUser(userID, dispatch),
        onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
        onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
    }
}

class userDataPage extends React.Component {
    componentDidMount() {
        this.props.onRequestUserDataById(this.props.match.params.id);
        this.props.onRequestAllRecipesByUser(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.onRequestUserDataById(this.props.match.params.id);
            this.props.onRequestAllRecipesByUser(this.props.match.params.id);
        }
    }

    render() {
        const { user, isRecipesPending, recipes, isRecipesSucess, onRequestLikeRecipe, onRequestUnlikeRecipe } = this.props;
        return (
            <div >
                {!user || user.isPending ? <Loading /> : !user.isSucess ? <NotFound /> :
                    <DetailsCard user={user.data} />}
                {isRecipesPending ? <Loading /> : !isRecipesSucess ? <NotFound /> :
                    <CardsList recipes={recipes} nameClass="list-all-page" onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe} />}

            </div>
        );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(userDataPage)


