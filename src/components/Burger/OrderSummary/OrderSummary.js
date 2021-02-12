import React from 'react';
import Aux from "../../../hoc/Auxillary/auxillary";
import Button from '../../UI/Button/Button';
const orderSummary = (props) =>{
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}> {igKey }</span> : {props.ingredients[igKey]}</li>
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p style={{textAlign:'left',fontFamily:'monospace',fontSize:'15px'}}>A delicious burger with tha following ingredients</p>
            <ul style={{textAlign:'left',fontFamily:'monospace',fontSize:'15px'}}> 
                {ingredientsSummary}
            </ul>
            <br></br>
            <p style={{textAlign:'left',fontFamily:'monospace',fontSize:'15px'}}>
                <strong>Total Price : Rs. {props.price.toFixed(2)} </strong>
                <br></br><br></br>
                Continue to checkout...   
            </p>
            <Button btnType="Danger" clicked={props.purchaseCancled}>Cancle</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    );
    
}
export default orderSummary;
// style={{backgroundColor: '#f44336', fontSize: '25px',borderRadius: '8px'}}