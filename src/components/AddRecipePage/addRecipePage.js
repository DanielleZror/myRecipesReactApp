import React from 'react';
import { connect } from 'react-redux';
import AddCard from './cardAddPage.js';
import Loading from '../Loading/Loading'
import './addRecipePage.css'
import { requestAddRecipe, requestResetAddState } from '../../actions'
import { Redirect } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    recipe: state.add.recipe,
    isSucess: state.add.isSucess,
    newID: state.add.newID,
    isPending: state.add.isPending
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
        {this.props.isPending ? <Loading/> : <AddCard onSave={this.props.onRequestAddRecipe} ></AddCard>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);

