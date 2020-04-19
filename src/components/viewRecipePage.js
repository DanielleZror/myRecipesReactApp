import React from 'react';
import { connect } from 'react-redux';
import DetailsCard from './allDetailsCard.js'
import {requestByIdRecipe} from '../actions'
import axios from 'axios';
import img from '../food1.jpg'

const mapStateToProps = (state) => {
  return {
    recipe: state.requestByIdRecipe.recipe,
    isPending: state.requestByIdRecipe.isPending,
  }
}

const mapDispatchToProps = (dispatch ,id) => {
  console.log("mapDispatchToProps", dispatch)
  return {  
    onRequestByIdRecipe: () => dispatch(requestByIdRecipe(id))
  }
}

class viewRecipePage extends React.Component  {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       id: props.match.params.id,
    //       recipe: []
    //     }
    //   }

    componentDidMount() {
        // axios.get(`/api/byID`, { params: {
        //     id: this.state.id}
        //   })
        //   .then(res => {
        //     const recipe = res.data;
        //     this.setState({ recipe});
        //   })
        this.props.onRequestByIdRecipe();
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

        const { recipe, isPending  } = this.props;
        console.log('view', recipe)
        return (
          <div >
            {isPending ? <h1>Loading</h1> :
              <DetailsCard oneRecipe={recipe}/>
            }
          </div>
        );
      }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(viewRecipePage)


