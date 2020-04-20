import React from 'react';

const Ingredient = (props) => {
    console.log("Ingredient", props)
    return (
        < >
            <span className="text">{props.oneIngredient.Amount + " " + props.oneIngredient.Unit + " " + props.oneIngredient.Item}</span>
            <br/>
        </>
    )
}


export default Ingredient;

