import React from 'react';
import './addRecipePage.css'
import { MdRemove } from 'react-icons/md';



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
        }
        this.props.saveData(this.state.ingredients)
    }

    addRow = () => {
        let ingredients = this.state.ingredients
        ingredients.push({ id: this.state.rows, amount: null, unit: null, item: null })
        this.state.rows++
        this.setState({ ingredients: ingredients })
    }

    removeRow = (event) => {
        let ingredients = this.state.ingredients
        const idToRemove = parseInt(event.currentTarget.id.split('-')[1])
        const index = ingredients.findIndex(x=> x.id === idToRemove)
        ingredients.splice(index, 1)
        this.setState({ ingredients: ingredients})
    }

    render() {
        return (
            <div >
                <table>
                    <tbody>
                        {this.state.ingredients.map((row) => (
                            <tr key={Math.random()}>
                                <td>
                                    <div id="inputFormRow">
                                        <div className="input-group mb-3 group " id="group-0">
                                            <input type="number" id={`amount-${row.id}`} className="form-control m-input" name="amount" onChange={this.onChange} placeholder={row.amount || "Amount"}
                                                autoComplete="off" step="0.25" min="0" max="1000" />
                                            <input type="text" id={`unit-${row.id}`} className="form-control m-input" placeholder={row.unit || "Unit"} name="unit" onChange={this.onChange} 
                                                autoComplete="off" />
                                            <input type="text" id={`item-${row.id}`} className="form-control m-input" placeholder={row.item || "Item"} name="item" onChange={this.onChange} 
                                                autoComplete="off" />
                                            <button className="btn btn-danger remove" type="button" id={`remove-${row.id}`} onClick={this.removeRow}><MdRemove/></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button id="addBtn" type="button" className="btn" onClick={this.addRow}>ADD</button>
            </div>
        );
    }
};

export default AddIngredients;
