import React from 'react';
import { connect } from 'react-redux';
import DetailsCard from './allDetailsCard.js'
import Loading from '../Loading'
import { requestByIdRecipe, requestLikeRecipe, requestUnlikeRecipe } from '../../actions'

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
    onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
    onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
  }
}

class viewRecipePage extends React.Component {
  componentDidMount() {
    this.props.onRequestByIdRecipe(this.props.match.params.id, JSON.parse(sessionStorage.userData).userID);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.onRequestByIdRecipe(this.props.match.params.id, JSON.parse(sessionStorage.userData).userID);
    }
  }

  render() {
    const { recipe, isPending } = this.props;
    return (
      <div >
        {isPending ? <Loading /> : recipe === "" ? <h1> Not found</h1> :
          <DetailsCard oneRecipe={recipe} onLike={this.props.onRequestLikeRecipe} onUnlike={this.props.onRequestUnlikeRecipe} />
        }
      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(viewRecipePage)


