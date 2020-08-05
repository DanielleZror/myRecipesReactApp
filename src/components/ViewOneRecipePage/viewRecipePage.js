import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DetailsCard from './allDetailsCard.js'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/notFound'
import { requestByIdRecipe, requestLikeRecipe, requestUnlikeRecipe, requestDeleteRecipe } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    recipe: state.byid.recipe,
    isPending: state.byid.isPending,
    isDeleteSucess: state.deleteRecipe.isSucess,
    id: ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestByIdRecipe: (id, userID) => requestByIdRecipe(id, userID, dispatch),
    onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
    onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch),
    onRequestDeleteRecipe: (id, images, userID) => requestDeleteRecipe(id, images, userID, dispatch),

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
    const { recipe, isPending, isDeleteSucess } = this.props;
    if(isDeleteSucess) {
      return <Redirect to={`/`}></Redirect>
    }
    return (
      <div >
        {isPending ? <Loading /> : recipe.length === 0 ? <NotFound /> :
          <DetailsCard oneRecipe={recipe} onLike={this.props.onRequestLikeRecipe} onUnlike={this.props.onRequestUnlikeRecipe}
            onDelete={this.props.onRequestDeleteRecipe} />
        }
      </div>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(viewRecipePage)


