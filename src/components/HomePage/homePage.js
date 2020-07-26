import React from 'react';
import { connect } from 'react-redux';
import { requestFavoriteRecipes } from '../../actions'
import CardsList from './cardsListHomePage'
import Carousel from './carousel'


const mapStateToProps = (state) => {
    return {
        favoriteRecipes: state.favorite.recipes,
        isPending: state.favorite.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestFavoriteRecipes: (userID) => requestFavoriteRecipes(userID, dispatch)
    }
}


class HomePage extends React.Component {
    componentDidMount() {
        this.props.onRequestFavoriteRecipes(JSON.parse(sessionStorage.userData).userID);
    }

    render() {
        const { favoriteRecipes, isPending } = this.props;
   
        return (
            <div >
                <Carousel />
                {isPending ? <h1>loading</h1> :
                    <CardsList recipes={favoriteRecipes} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

