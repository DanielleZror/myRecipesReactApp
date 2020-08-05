import React from 'react';
import './editDeleteRecipe.css'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';


const EditDeleteRecipe = (props) => {

    const handleDelete = () => {
        props.onDelete(props.oneRecipe._id, props.oneRecipe.Img, JSON.parse(sessionStorage.userData).userID)
    }

    return (
        <div className="edit-delete-div">
            <GrEdit className="icon" />
            <RiDeleteBinLine className="icon delete-icon" onClick={handleDelete}/>
        </div>
    )
}

export default EditDeleteRecipe

