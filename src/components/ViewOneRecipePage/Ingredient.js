import React from 'react';

const Ingredient = (props) => {
    return (
        <div className="ingredients-div">
            <table>
                <tbody>
                    {props.Ingredients.map((oneIngredient, counter) => (
                        <tr key={counter}>
                            <td>
                                <span className="text"> {oneIngredient.amount}</span>
                            </td>
                            <td>
                                <span className="text"> {oneIngredient.unit}</span>
                            </td>
                            <td>
                                <span className="text"> {oneIngredient.item}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Ingredient;

