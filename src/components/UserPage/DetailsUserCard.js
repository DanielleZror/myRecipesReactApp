import React from 'react';
import './userDataPage.css'
import { AiOutlineNumber } from "react-icons/ai";
import { GiShadowFollower } from "react-icons/gi";

const DetailsCard = (props) => {

    return (
        <div className="user-card">
            <article>
                <h2>{props.user.Name || "Name"}</h2>
                <h3>{props.user.Email || "Email"}</h3>
                <div className="separator"></div>
                <ul>
                    <li> <AiOutlineNumber /></li>
                    <li> {props.numberOfRecipes} </li>
                    <li></li>
                    <li> <GiShadowFollower /></li>
                    <li> num of followers</li>
                    <li></li>
                    <li></li>
                    <li> <GiShadowFollower /></li>
                    <li> num of following</li>
                </ul>
            </article>
        </div>
    )
}

export default DetailsCard;