import React from 'react';
import { connect } from 'react-redux';
import { requestSavedRecipes } from '../../actions'


const mapStateToProps = (state) => {
  return {
    recipes: state.saved.recipes,
    isPending: state.saved.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onRrequestSavedRecipes: (userID) => requestSavedRecipes(userID, dispatch)
    // onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
    // onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
  }
}
class savedRecipesPage extends React.Component  {
  componentDidMount() {
    this.props.onRrequestSavedRecipes(JSON.parse(sessionStorage.userData).userID);
  }
  render() {
    return (
      <div >
        <h1>saved</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(savedRecipesPage)

