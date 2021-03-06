import React from 'react';
import { connect } from 'react-redux';
import { requestPopularRecipes, requestAllRecipes, requestLikeRecipe, requestUnlikeRecipe } from '../../actions'
import PopularCardsList from '../CardsList/popularCardsList/popularCardsList'
import MainCardsList from '../CardsList/mainCardsList/mainCardsList'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/notFound'

const mapStateToProps = (state) => {
    return {
        popularRecipes: state.popular.recipes,
        popularIsPending: state.popular.isPending,
        allRecipe: state.all.recipes,
        allIsPending: state.all.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPopularRecipes: (userID) => requestPopularRecipes(userID, dispatch),
        onRequestAllRecipes: (userID) => requestAllRecipes(userID, dispatch),
        onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
        onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
    }
}


class HomePage extends React.Component {
    componentDidMount() {
        // this.props.onRequestPopularRecipes(JSON.parse(sessionStorage.userData).userID);
        this.props.onRequestAllRecipes(JSON.parse(sessionStorage.userData).userID);
    }

    render() {
        const { popularRecipes, popularIsPending, allRecipe, allIsPending, onRequestLikeRecipe, onRequestUnlikeRecipe } = this.props;

        return (
            <div>
                {/* <div >
                    {popularIsPending ? <h1>loading</h1> :
                        <PopularCardsList recipes={popularRecipes} className={"list-popular-page"}/>}
                </div> */}
                {allIsPending ? <Loading /> : allRecipe.length === 0 ? <NotFound /> :
                    <MainCardsList recipes={allRecipe} className={"list-main-page"} onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

