import React from 'react';
import { connect } from 'react-redux';
import DetailsCard from './allDetailsCard.js'
import {requestByIdRecipe} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.byid.recipe,
    isPending: state.byid.isPending
    ,id: ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    onRequestByIdRecipe: (id) => {dispatch(requestByIdRecipe(id))}
  }
}

class viewRecipePage extends React.Component  {
 
    componentDidMount() {
        this.props.onRequestByIdRecipe(this.props.match.params.id);
      }

      render() {
        const { recipe, isPending  } = this.props;
        console.log('view', this.props)
        return (
          <div >
            {isPending ? <h1>Loading</h1> : 
              <DetailsCard oneRecipe={recipe}/>
            }
          </div>
        );
      }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(viewRecipePage)


