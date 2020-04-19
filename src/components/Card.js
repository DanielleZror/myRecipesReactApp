import React from 'react';
import '../styles/Card.css';
import {Route, Link} from 'react-router-dom';


const Card = (props) => {    
    return (
        <Route>
            <div className='cardStyle '>
                <aside>
                <div className="card-img" style={{backgroundImage:`url(${props.oneRecipe.Img})`}}>
                    <div className="overlay">
                        <div className="overlay-content">
                            <Link className="hover" to ={`/recipe/${props.oneRecipe._id}`}> View</Link>
                        </div>
                    </div>
                </div>
                </aside>
                <article>
                    <div className="text-part">
                        <h3>{props.oneRecipe.Name}</h3>
                        <h5>{props.oneRecipe.Description}</h5>
                </div>
                </article>
                
            </div>
        </Route>
    )
}

export default Card;

