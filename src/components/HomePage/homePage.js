import React from 'react';
import { connect } from 'react-redux';
import { requestPopularRecipes, requestAllRecipes } from '../../actions'
import CardsList from './cardsListHomePage'
import Carousel from './carousel'


const mapStateToProps = (state) => {
    return {
        popularRecipes: state.popular.recipes,
        popularIsPending: state.popular.isPending,
        allRecipe : state.all.recipes,
        allIsPending: state.all.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPopularRecipes: (userID) => requestPopularRecipes(userID, dispatch),
        onRequestAllRecipes: (userID) => requestAllRecipes(userID, dispatch)
    }
}


class HomePage extends React.Component {
    componentDidMount() {
        this.props.onRequestPopularRecipes(JSON.parse(sessionStorage.userData).userID);
        this.props.onRequestAllRecipes(JSON.parse(sessionStorage.userData).userID);
    }

    render() {
        const { popularRecipes, popularIsPending, allRecipe, allIsPending } = this.props;
   
        return (
            <div >
                {/* <Carousel /> */}
                {popularIsPending ? <h1>loading</h1> :
                    <CardsList recipes={popularRecipes} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

