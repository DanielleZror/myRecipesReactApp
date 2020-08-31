import React from 'react';
import './addRecipePage.css'
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { Autocomplete } from '@material-ui/lab';
import { TextField, withStyles } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#CB8EB2',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#CB8EB2',
        },
        // '&:hover': {
        //   color: '#CB8EB2',
        //   borderBottomColor: '#CB8EB2',
        // },

    },
})(TextField);

class AddIngredients extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: 1,
            ingredients: [{ id: 0, amount: null, unit: null, item: null }]
        }
    }

    onChange = (event, value, what) => {
        if (event) {
            let ingredients = this.state.ingredients
            let index = parseInt(event.target.id.split('-')[1])
            let name = event.target.id.split('-')[0]
            switch (name) {
                case ("amount"):
                    ingredients.find(row => row.id === index).amount = event.target.value
                    break;
                case ("item"):
                    ingredients.find(row => row.id === index).item = event.target.value || value
                    break;
                case ("unit"):
                    ingredients.find(row => row.id === index).unit = event.target.value || value
                    break;
                default:
                    break;
            }
            this.setState({ ingredients: ingredients })
            this.props.saveData(this.state.ingredients)
        }
    }

    addRow = () => {
        let ingredients = this.state.ingredients
        ingredients.push({ id: this.state.rows, amount: null, unit: null, item: null })
        let numberOfRows = this.state.rows
        numberOfRows++
        this.setState({ rows: numberOfRows }, (() => { document.getElementById(`amount-${this.state.rows - 1}`).focus() }))
        this.setState({ ingredients: ingredients })
    }

    removeRow = (event) => {
        let ingredients = this.state.ingredients
        const idToRemove = parseInt(event.currentTarget.id.split('-')[1])
        const index = ingredients.findIndex(x => x.id === idToRemove)
        ingredients.splice(index, 1)
        this.setState({ ingredients: ingredients }, (() => { this.props.saveData(this.state.ingredients) }))
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState({ ingredients: this.props.value })
            this.setState({ rows: this.props.value.length })
        }
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.value) !== JSON.stringify(prevProps.value)) {
            if (this.props.value) {
                this.setState({ ingredients: this.props.value })
                this.setState({ rows: this.props.value.length })
            } else {
                this.setState({ ingredients: [{ id: 0, amount: null, unit: null, item: null }] })
                this.setState({ rows: 1 })
            }
        }
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
                                        <Autocomplete
                                            className="add-input"
                                            id={`amount-${row.id}`}
                                            freeSolo={true}
                                            onInputChange={this.onChange}
                                            inputValue={row.amount || ""}
                                            renderInput={(params) =>
                                                <CssTextField {...params} type="number" step="0.25" min="0" max="1000"
                                                    label="Amount" required />}
                                        />
                                    </td>
                                    <td>
                                        {this.props.params.Units ?
                                            <Autocomplete 
                                                className="add-input"
                                                id={`unit-${row.id}`}
                                                options={this.props.params.Units}
                                                getOptionLabel={(option) => option}
                                                freeSolo={true}
                                                autoSelect={true}
                                                onInputChange={this.onChange}
                                                inputValue={row.unit || ""}
                                                renderInput={(params) =>
                                                    <CssTextField {...params} label="Units" name="unit" required />}
                                            />
                                            : null}
                                    </td>
                                    <td>
                                        {this.props.params.Items ?
                                            <Autocomplete className="add-input"
                                                id={`item-${row.id}`}
                                                options={this.props.params.Items}
                                                getOptionLabel={(option) => option}
                                                freeSolo={true}
                                                autoSelect={true}
                                                onInputChange={this.onChange}
                                                inputValue={row.item || ""}
                                                renderInput={(params) =>
                                                    <CssTextField {...params} label="Items" required />}
                                            />
                                            : null}
                                    </td>
                                    <td>
                                        {this.state.ingredients.length > 1 ? <button className="remove-btn btn-danger remove" type="button"
                                            id={`remove-${row.id}`} onClick={this.removeRow}>
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
