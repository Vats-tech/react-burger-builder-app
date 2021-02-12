import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls =[
    { label:'Salad', type:'salad' },
    { label:'Bacon', type:'bacon' },
    { label:'Cheese', type:'cheese' },
    { label:'Meat', type:'meat' }
];
const buildControls =(props) =>(
    <div className="BuildControls">
        <p style={{fontFamily:"monospace" ,color:"rgb(0,55,42)",fontSize:"16px"}}>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={ () =>props.addedIng(ctrl.type)}
                removed={()=> props.removedIng(ctrl.type)}
                disabled={props.disabledButton[ctrl.type]}/>
        ))}
        <button 
            className="OrderButton"
            onClick={props.ordered}
            disabled={!props.purchasable}>  {props.isAuth ? 'ORDER NOW' : 'SINGUP TO ORDER' }    </button>
    </div>
);
export default buildControls;