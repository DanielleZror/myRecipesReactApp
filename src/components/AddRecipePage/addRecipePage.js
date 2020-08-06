import React from 'react';
import { connect } from 'react-redux';
import AddCard from './cardEditRecipe';
import Loading from '../Loading/Loading'
import './addRecipePage.css'
import { requestAddRecipe, requestResetAddState, requestUpdateRecipe, resetResetUpdateState } from '../../actions'
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.add.recipe,
    addIsSucess: state.add.isSucess,
    newID: state.add.newID,
    isPending: state.add.isPending,
    mode: ownProps.match.path.split("/")[1].toLowerCase(),
    updateIsSucedd: state.update.isSucess,
    recipeID: state.update.recipeID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUpdateRecipe: (updateData) => requestUpdateRecipe(updateData, dispatch),
    onRequestAddRecipe: (recipe) => requestAddRecipe(recipe, dispatch),
    onResetAddState: () => requestResetAddState(dispatch),
    onResetUpdateState: () => resetResetUpdateState(dispatch)
  }
}

class AddRecipePage extends React.Component {

  render() {
    if (this.props.addIsSucess) {
      let newID = this.props.newID
      this.props.onResetAddState()
      return <Redirect from="/add" to={`/recipe/${newID}`}></Redirect>
    }
    if (this.props.updateIsSucedd) {
      let recipeID = this.props.recipeID
      this.props.onResetUpdateState()
      return <Redirect from={`/edit/${recipeID}`} to={`/recipe/${recipeID}`}></Redirect>
    }
    return (
      <div>
        {this.props.isPending ? <Loading /> :
          <AddCard mode={this.props.mode} recipeID={this.props.match.params.id}
            onSave={this.props.mode === "add" ? this.props.onRequestAddRecipe : this.props.onRequestUpdateRecipe} ></AddCard>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);

