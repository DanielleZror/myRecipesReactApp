import React from 'react';
import { connect } from 'react-redux';
import { requestPopularRecipes } from '../../actions'
import CardsList from './cardsListHomePage'
import Carousel from './carousel'


const mapStateToProps = (state) => {
    return {
        popularRecipes: state.popular.recipes,
        isPending: state.popular.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPopularRecipes: (userID) => requestPopularRecipes(userID, dispatch)
    }
}


class HomePage extends React.Component {
    componentDidMount() {
        this.props.onRequestPopularRecipes(JSON.parse(sessionStorage.userData).userID);
    }

    render() {
        const { popularRecipes, isPending } = this.props;
   
        return (
            <div >
                <Carousel />
                {isPending ? <h1>loading</h1> :
                    <CardsList recipes={popularRecipes} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

