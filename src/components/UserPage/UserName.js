import React from 'react';
import { connect } from 'react-redux';
import { requestUserData } from '../../actions'

const mapStateToProps = (state) => {
  return {
    isPending: state.user.isPending,
    data: state.user.data,
    isSucess: state.user.isSucess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUserData: (userID) => requestUserData(userID, dispatch),
  }
}

class allRecipesPage extends React.Component {
  componentDidMount() {
    this.props.onRequestUserData(JSON.parse(sessionStorage.userData).userID);
  }

  render() {
    return (
      <>
        {this.props.isPending || !this.props.isSucess ? <span> User Name</span> :
            <span> {this.props.data.Name}</span>
        }
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

