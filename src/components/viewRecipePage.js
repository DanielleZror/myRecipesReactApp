import React from 'react';
import DetailsCard from './allDetailsCard.js'
import axios from 'axios';
import img from '../food1.jpg'

export default class viewRecipePage extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
          id: props.match.params.id,
          recipe: []
        }
      }

    componentDidMount() {
        axios.get(`/api/byID`, { params: {
            id: this.state.id}
          })
          .then(res => {
            const recipe = res.data;
            this.setState({ recipe});
          })
      }

      render() {
        // const arr = {Name:'danielle',
        // _id:'121313', 
        // Description:'heloooo',
        // TimeHours: "1",
        // TimeMinutes: "14",
        // Preparation: "soooo yam",
        // Img:img,
        // Ingredients: [
        //   {Amount: '12',
        //   Unit: 'spoons',
        //   Item:'suger'},
        //    {Amount: '12',
        //    Unit: 'spoons',
        //    Item:'suger'}
        // ]}

        const { recipe } = this.state;
        console.log('view', recipe)
        return (
          <div >
              <DetailsCard oneRecipe={recipe}/>
          </div>
        );
      }
    
}


