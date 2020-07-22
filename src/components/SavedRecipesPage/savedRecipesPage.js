import React from 'react';
import { connect } from 'react-redux';
import CardsList from '../CardsList/CardsList'
import { requestSavedRecipes, requestLikeRecipe, requestUnlikeRecipe } from '../../actions'


const mapStateToProps = (state) => {
  return {
    recipes: state.saved.recipes,
    isPending: state.saved.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRrequestSavedRecipes: (userID) => requestSavedRecipes(userID, dispatch),
    onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
    onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
  }
}
class savedRecipesPage extends React.Component {
  componentDidMount() {
    this.props.onRrequestSavedRecipes(JSON.parse(sessionStorage.userData).userID);
  }
  render() {
    const { recipes, isPending, onRequestLikeRecipe, onRequestUnlikeRecipe } = this.props;
    return (
      <div >
        {isPending ? <h1>loading</h1> :
          <CardsList recipes={recipes} nameClass="list-all-page" onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(savedRecipesPage)

