import React from 'react';
import './Order.css';
const order = (props) =>{
    const ingredients=[];
    for(let ingredientName in props.ingredients){
        ingredients.push({
            name:ingredientName,
            amount:props.ingredients[ingredientName]
        });
    }
    const ingredientsOutput = ingredients.map(ig=>{
        return <span
        key = {ig.name}
        style={{textTransform:"capitalize",
        display:"inline-block",
        margin:"0 8px",
        border:'1px solid #ccc',
        borderRadius:'5px',
        padding:'5px',
        // fontFamily:"monospace",
        backgroundColor:'rgb(245, 253, 252)'}}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className="Order">
            <p style={{fontFamily:"monospace" ,fontSize:"15px"}}>Ingredients : {ingredientsOutput}</p>
            <p style={{fontFamily:"monospace" ,fontSize:"15px"}}>Price :<strong> {props.price}</strong></p>
        </div>
    )
};
export default order;