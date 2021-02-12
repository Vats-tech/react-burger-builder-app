import React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
const checkoutSummary = (props) =>  {
        return (
            <div className="CheckoutSummary">
                <h1 style ={{fontFamily:"monospace" ,color:"rgb(100,55,42)",fontSize:"20px"}}>We Hope It Taste Well</h1>
                <div>
                    <Burger ingredients={props.ingredients}/>
                </div>
                <Button 
                    btnType = "Danger"
                    clicked={props.checkoutCanclled}>Cancle</Button>
                <Button 
                    btnType = "Success"
                    disabled={props.continued}
                    clicked={props.checkoutContinued}>Continue</Button>
            </div>
        )
}
export default checkoutSummary;
