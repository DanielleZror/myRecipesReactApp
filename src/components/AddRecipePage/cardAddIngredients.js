import React from 'react';
import './addRecipePage.css'



class AddIngredients extends React.Component {
    constructor(){
        super()
        this.state = {rows: ['row1']}
    }
    
    addRow = ()=> {
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})
    }

    removeRow = ()=> {
        var rows = this.state.rows
        rows.pop()
        this.setState({rows: rows})
    }

    render() {
        return (
            <div >
                <table>
                    <tbody>
                    {this.state.rows.map((r) => (
                      <tr key={Math.random()}>
                          <td>
                            <div id="inputFormRow">
                                <div className="input-group mb-3 group " id="group-0">
                                    <input type="number" id="amount-0" className="form-control m-input" placeholder="Amount"
                                        autoComplete="off" step="0.25" min="0" max="1000" />
                                    <input type="text" id="unit-0" className="form-control m-input" placeholder="Unit"
                                        autoComplete="off" />
                                    <input type="text" id="item-0" className="form-control m-input" placeholder="Item"
                                        autoComplete="off" />
                                </div>
                            </div>
                          </td>
                      </tr>
                    ))}
                    </tbody>
                </table>  
                <button id="addBtn" className="btn" onClick={this.addRow}>ADD</button>
                <button id="removeRow" type="button" onClick={this.removeRow} className="btn btn-danger remove">Remove</button> 
            </div>
        );
    }
};

export default AddIngredients;
 