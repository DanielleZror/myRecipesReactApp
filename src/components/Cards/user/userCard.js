import React from 'react';
import './userDataPage.css'
import { AiOutlineNumber } from "react-icons/ai";
import { GiShadowFollower } from "react-icons/gi";

const DetailsCard = (props) => {

    return (
        <div className={props.fromList ? "user-card-list user-card" : "user-card"}>
            <article>
                <h2>{props.user.Name || "Name"}</h2>
                <h3>{props.user.Email || "Email"}</h3>
                <div className="separator"></div>
                <ul>
                    <li> <AiOutlineNumber /> {props.numberOfRecipes || props.user.numOfRecipes} </li>
                    <li> <GiShadowFollower /> num of followers </li>
                    <li> <GiShadowFollower /> num of following </li>
                </ul>
            </article>
        </div>
    )
}

export default DetailsCard;