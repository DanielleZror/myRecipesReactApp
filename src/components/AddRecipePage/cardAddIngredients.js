import React from 'react';
import './addRecipePage.css'
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';

class AddIngredients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: 1,
            ingredients: [{ id: 0, amount: null, unit: null, item: null }]
        }
    }

    onChange = (event) => {
        let ingredients = this.state.ingredients
        let index = parseInt(event.target.id.split('-')[1])
        switch (event.target.name) {
            case ("amount"):
                ingredients.find(row => row.id === index).amount = event.target.value
                break;
            case ("item"):
                ingredients.find(row => row.id === index).item = event.target.value
                break;
            case ("unit"):
                ingredients.find(row => row.id === index).unit = event.target.value
                break;
            default:
                break;
        }
        this.setState({ ingredients: ingredients })
        this.props.saveData(this.state.ingredients)
    }

    addRow = () => {
        let ingredients = this.state.ingredients
        ingredients.push({ id: this.state.rows, amount: null, unit: null, item: null })
        let numberOfRows = this.state.rows
        numberOfRows++
        this.setState({ rows: numberOfRows })
        this.setState({ ingredients: ingredients })
    }

    removeRow = (event) => {
        let ingredients = this.state.ingredients
        const idToRemove = parseInt(event.currentTarget.id.split('-')[1])
        const index = ingredients.findIndex(x => x.id === idToRemove)
        ingredients.splice(index, 1)
        this.setState({ ingredients: ingredients })
    }

    render() {
        return (
            <div>
                <div className="add-ingredients">
                    <table className="table-ingredients">
                        <tbody>
                            {this.state.ingredients.map((row) => (
                                <tr key={row.id}>
                                    <td>
                                        <input type="number" id={`amount-${row.id}`} className="form-control add-input" name="amount"
                                            onChange={this.onChange} placeholder={row.amount || "Amount"} autoComplete="off" step="0.25"
                                            min="0" max="1000" value={row.amount} required />
                                    </td>
                                    <td>
                                        <input type="text" id={`unit-${row.id}`} className="form-control add-input"
                                            placeholder={row.unit || "Unit"} name="unit" onChange={this.onChange} autoComplete="off" value={row.unit} required />
                                    </td>
                                    <td>
                                        <input type="text" id={`item-${row.id}`} className="form-control add-input"
                                            placeholder={row.item || "Item"} name="item" onChange={this.onChange} autoComplete="off" value={row.item} required />
                                    </td>
                                    <td>
                                        {this.state.ingredients.length > 1 ? <button className="remove-btn btn-danger remove" type="button" id={`remove-${row.id}`} onClick={this.removeRow}>
                                            <RiDeleteBinLine /></button> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="add-div">
                    <button id="addBtn" type="button" className="add-btn btn" onClick={this.addRow}><IoMdAdd /></button>
                </div>
            </div>

        );
    }
};

export default AddIngredients;
