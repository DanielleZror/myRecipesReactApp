import React from 'react';
import Card from '../../Cards/mainCard/mainCard';
import './mainCardsList.css';
import { render } from '@testing-library/react';

class mainCardsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: this.props.recipes.slice(0, 1)
        }
    }

    recursive = () => {
        setTimeout(() => {
          let hasMore = this.state.recipes.length + 1 < this.props.recipes.length;
          this.setState((prev, props) => ({
            recipes: props.recipes.slice(0, prev.recipes.length + 1)
          }));
          if (hasMore) this.recursive();
        }, 0);
      }

      componentDidMount() {
        this.recursive();
     }

    //const mainCardsList = (props) => {
    render() {
        return (
            <div className={this.props.className} >
                <div className='container'>
                    {this.state.recipes.map((oneRecipe, index) => <Card key={oneRecipe._id} onLike={this.props.onLike}
                        onUnlike={this.props.onUnlike} oneRecipe={oneRecipe} index={index} />)}
                </div>
            </div>
        )
    }
}

export default mainCardsList;