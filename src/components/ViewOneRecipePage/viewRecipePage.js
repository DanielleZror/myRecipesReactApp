import React from 'react';
import { connect } from 'react-redux';
import DetailsCard from './allDetailsCard.js'
import { requestByIdRecipe, requestLikeRecipe } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.byid.recipe,
    isPending: state.byid.isPending,
    id: ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestByIdRecipe: (id, userID) => requestByIdRecipe(id, userID, dispatch),
    onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch)
  }
}

class viewRecipePage extends React.Component {
  componentDidMount() {
    this.props.onRequestByIdRecipe(this.props.match.params.id, JSON.parse(sessionStorage.userData).userID);
  }

  render() {
    const { recipe, isPending } = this.props;
    return (
      <div >
        {isPending ? <h1>Loading</h1> :
          <DetailsCard oneRecipe={recipe} onLike={this.props.onRequestLikeRecipe}/>
        }
      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(viewRecipePage)


