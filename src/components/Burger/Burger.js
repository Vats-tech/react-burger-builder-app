import React from 'react';
// import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger =(props) =>{
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key ={igKey+i} type={igKey} />
            })
    })
    .reduce((arr,ele)=>{
        return arr.concat(ele)
    },[]);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Start adding ingredients</p>;
    }
    // console.log(transformedIngredients);
    return(
    <div className="Burger">
        <BurgerIngredient type ="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type ="bread-bottom"/>
    </div>
    );
}
export default burger;