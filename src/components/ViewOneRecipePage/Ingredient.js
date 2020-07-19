import React from 'react';

const Ingredient = (props) => {
    console.log("Ingredient", props)
    return (
        < >
            <span className="text">{props.oneIngredient.amount + " " + props.oneIngredient.unit + " " + props.oneIngredient.item}</span>
            <br/>
        </>
    )
}


export default Ingredient;

