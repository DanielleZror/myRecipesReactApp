import React from 'react';
import Card from '../Cards/card/Card';
import './CardsList.css';

class CardsList extends React.Component {
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

    render() {
        return (
            <div className={this.props.nameClass}>
                <div className='container'>
                    {this.props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} onLike={this.props.onLike}
                        onUnlike={this.props.onUnlike} oneRecipe={oneRecipe} />)}
                </div>
            </div>
        )
    }
}

export default CardsList;