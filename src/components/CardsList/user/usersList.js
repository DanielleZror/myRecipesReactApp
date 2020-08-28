import React from 'react';
import User from '../../Cards/user/userCard';
import './usersList.css';

class usersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: this.props.users.slice(0, 1)
        }
    }

    recursive = () => {
        setTimeout(() => {
          let hasMore = this.state.users.length + 1 < this.props.users.length;
          this.setState((prev, props) => ({
            users: props.users.slice(0, prev.users.length + 1)
          }));
          if (hasMore) this.recursive();
        }, 0);
      }

      componentDidMount() {
        this.recursive();
     }

    render() {
        return (
            <div className="user-list">
                <div className='container'>
                    {this.state.users.map((oneUser) => <User fromList={true} key={oneUser._id} user={oneUser} />)}
                </div>
            </div>
        )
    }
}

export default usersList;