import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestUserData } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.users,
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
    if (!this.props.users[this.props.userID]) {
      this.props.onRequestUserData(this.props.userID);
    }
  }

  render() {
    return (
      <>
        { !this.props.users[this.props.userID] || this.props.users[this.props.userID].isPending || !this.props.users[this.props.userID].isSucess ?
          <span> User Name</span> :
          <Link to={`/user/${this.props.userID}`}><span> {this.props.users[this.props.userID].data.Name}</span></Link> }
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

