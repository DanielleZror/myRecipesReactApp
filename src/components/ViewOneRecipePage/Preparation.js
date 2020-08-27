import React from 'react';

const Preparation = (props) => {
    return (
        <div className="preparation-div">
            <table>
                <tbody>
                    {props.Preparation.map((oneStep, counter) => (
                        <tr key={counter}>
                            <td>
                                { counter + 1}
                            </td>
                            <td>
                                <span> {oneStep.details}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Preparation;

