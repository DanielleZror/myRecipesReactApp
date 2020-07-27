import React from 'react';
import { connect } from 'react-redux';
import cardAddPage from './cardAddPage.js';
import './addRecipePage.css'
import { requestAddRecipe, requestResetAddState } from '../../actions'
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    recipe: state.add.recipe,
    isSucess: state.add.isSucess,
    newID: state.add.newID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestAddRecipe: (recipe) => requestAddRecipe(recipe, dispatch),
    onResetAddState: () => requestResetAddState(dispatch)
  }
}

class AddRecipePage extends React.Component {
  render() {
    if(this.props.isSucess) {
      let newID = this.props.newID
      this.props.onResetAddState()
      return <Redirect from="/add" to={`/recipe/${newID}`}></Redirect>
    }
    return (
      <div>
        <cardAddPage onSave={this.props.onRequestAddRecipe} ></cardAddPage>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);

