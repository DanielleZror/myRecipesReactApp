import React from 'react';
import './addRecipePage.css'
import { ROOT } from '../../constants'
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoMdAdd } from 'react-icons/io';
import { TextField, withStyles } from '@material-ui/core';

const CssTextField = withStyles({
    root: ROOT
})(TextField);

class AddPreparation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maxID: 1,
            preparation: [{ id: 0, details: null }]
        }
    }

    onChange = (event) => {
        let preparation = this.state.preparation
        let index = parseInt(event.target.id.split('-')[1])
        preparation.find(row => row.id === index).details = event.target.value
        this.setState({ preparation: preparation })
        this.props.saveData(this.state.preparation)
    }

    addRow = () => {
        let preparation = this.state.preparation
        preparation.push({ id: this.state.maxID, details: null })
        let maxIDCounter = this.state.maxID
        maxIDCounter++
        this.setState({ maxID: maxIDCounter }, (() => { document.getElementById(`details-${this.state.maxID - 1}`).focus() }))
        this.setState({ preparation: preparation })
    }

    removeRow = (event) => {
        let preparation = this.state.preparation
        const idToRemove = parseInt(event.currentTarget.id.split('-')[1])
        const index = preparation.findIndex(x => x.id === idToRemove)
        preparation.splice(index, 1)
        this.setState({ preparation: preparation }, (() => { this.props.saveData(this.state.preparation) }))
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState({ preparation: this.props.value })
            this.setState({ maxID: parseInt(this.props.value[this.props.value.length - 1].id) + 1 })
        }
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.value) !== JSON.stringify(prevProps.value)) {
            if (this.props.value) {
                this.setState({ preparation: this.props.value })
                this.setState({ maxID: parseInt(this.props.value[this.props.value.length - 1].id) + 1 })
            } else {
                this.setState({ preparation: [{ id: 0, details: null }] })
                this.setState({ maxID: 1 })
            }
        }
    }
    render() {

        return (
            <div className="border">
                <div className="add-preparation">
                    <table className="table-preparation">
                        <tbody>
                            {this.state.preparation.map((row, i) => (
                                <tr key={row.id}>
                                    <td>
                                        <CssTextField
                                            id={`details-${row.id}`}
                                            label={`Preparation step ${i + 1}`}
                                            value={row.details || ""}
                                            multiline={true}
                                            onChange={this.onChange}
                                            className="add-input"
                                            fullWidth={true}
                                            required />
                                    </td>
                                    <td>
                                        {this.state.preparation.length > 1 ? <button className="remove-btn btn-danger remove" type="button"
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

export default AddPreparation;
