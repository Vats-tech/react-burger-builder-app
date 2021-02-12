import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary/auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';



export class BurgerBuilder extends React.Component{

    constructor(props){
        super(props);
        this.state={
            purchasable:false,
            purchasing:false,
            // loading:false,
            // error:false
        }
    }
        componentDidMount () {
        this.props.onInitIngredients();

            // axios.get('https://burger-builder-75cf6-default-rtdb.firebaseio.com/ingredients.json')
            // .then(response => {
            //     this.setState({ingredients:response.data});
            // })
            // .catch(error=>{this.setState({error:true})});
        }
    
    updatePurchaseState =(currIng) =>{
        const sum = Object.keys(currIng)
            .map(igKey=>{
                return currIng[igKey];
            })
            .reduce((sum,ele)=>{
                return sum+ele;
            },0);
        // this.setState({purchasable:sum>0});
        return sum>0;

    }

    // addIngredients =(type) =>{
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount+1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type]=updatedCount;
    //     const extraMoney = ingPrice[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice+extraMoney;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // };

    // removeIngredients = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount>=1){
    //     const updatedCount = oldCount-1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type]=updatedCount;
    //     const deductMoney = ingPrice[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice-deductMoney;
    //     this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    //     }
    // };

    updatePurchasing=()=>{
        if(this.props.isAuthenticated){
            this.setState({purchasing:true});
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        
    };

    cancleOrder=()=>{
        this.setState({purchasing:false});
    };

    continuePurchase=()=>{
        // alert("OKK DONE");
        // const queryParams=[];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price='+this.state.totalPrice);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname:'./checkout',
        //     search:'?'+ queryString
        // });
        this.props.onInitPurchase();
        this.props.history.push('/checkout');

    }

    render(){
        const disabledInfo ={
            ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        let orderSummary = null;
        let burger=this.props.error ? <h1>Error :: Ingredients Cant be loaded</h1>:<Spinner/>;
        if(this.props.ings){
            burger = (
            <Aux>
            <Burger 
                ingredients = {this.props.ings}></Burger>
             <BuildControls 
                addedIng={this.props.onIngredientAdded}
                removedIng={this.props.onIngredientRemoved}
                disabledButton={disabledInfo}
                price={this.props.price}
                purchasable={this.updatePurchaseState(this.props.ings)}
                isAuth={this.props.isAuthenticated}
                ordered={this.updatePurchasing}/>

             </Aux>
            );
            orderSummary=<OrderSummary 
                    ingredients = {this.props.ings} 
                    purchaseContinue={this.continuePurchase}
                    purchaseCancled={this.cancleOrder}
                    price={this.props.price}/>
            // if(this.state.loading){
            // orderSummary = <Spinner/>
            // }
        }
        return(
            <Aux>
                <Model show = {this.state.purchasing} modelClosed={this.cancleOrder}>
                    {orderSummary}
                </Model>
                {burger}
            </Aux>
        )
    }
};

const mapStateToProps = state =>{
    return{
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        error :state.burgerBuilder.error.error,
        isAuthenticated :state.auth.token !==null
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        onIngredientAdded : (ingName) => dispatch (actions.addIngredients(ingName)),
        onIngredientRemoved : (ingName) => dispatch (actions.removeIngredients(ingName)),
        onInitIngredients : () => dispatch (actions.initIngredients()),
        onInitPurchase: () => dispatch (actions.purchaseInit()),
        onSetAuthRedirectPath :(path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect (mapStateToProps , mapDispatchToProps )( WithErrorHandler(BurgerBuilder,axios));