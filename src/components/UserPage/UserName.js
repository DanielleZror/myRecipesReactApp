import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestUserData } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    isPending: state.user.isPending,
    data: state.user.data,
    isSucess: state.user.isSucess,
    userID: ownProps.userID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUserData: (userID) => requestUserData(userID, dispatch)
  }
}

class allRecipesPage extends React.Component {
  componentDidMount() {
    this.props.onRequestUserData(this.props.userID);
  }

  render() {
    return (
      <>
        {this.props.isPending || !this.props.isSucess ? <span> User Name</span> :
          <Link to={`/user/${this.props.userID}`}><span> {this.props.data.Name}</span></Link>
        }
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

