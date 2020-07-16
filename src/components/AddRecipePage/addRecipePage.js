import React from 'react';
import { connect } from 'react-redux';
import CardListAddPage from './cardsListAddPage.js';
import './addRecipePage.css'
import {requestAddRecipe} from '../../actions'
import {Route, Redirect} from 'react-router-dom';


const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return {
      recipe: state.add.recipe,
      isSucess: state.add.isSucess,
      newId: state.add.newId
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {  
      onRequestAddRecipe: (recipe) => dispatch(requestAddRecipe(recipe))
    }
  }


  class AddRecipePage extends React.Component  {


    render(){
        return (
            <Route>
                <CardListAddPage onSave={this.props.onRequestAddRecipe} ></CardListAddPage>
                {this.props.isSucess ?  <Redirect from="/add" to ={`/recipe/${this.props.newId}`}></Redirect> : <h1>try again</h1>}
       
            </Route>
        )}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipePage);

