import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
// import * as actions from '../../store/actions/index';

class Checkout extends React.Component{
    
    state={
        continued:false
    }
    // constructor(props){
    //     super(props);
        
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients={};
    //     let price =0;
    //     for(let params of query.entries()){
    //         if(params[0] === 'price'){
    //             price = params[1];
    //         }else{
    //             ingredients[params[0]]= + params[1];
    //         }
    //     }
    //     this.state={
    //         ingredients:ingredients,
    //         totalPrice:price
    //     }
    // }

    /* If you want to remove componetWillMout as it has been removed by react then use above constructer method */

    // state={
    //     ingredients:null,
    //     totalPrice:0
    // }
    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients={};
    //     let price =0;
    //     for(let params of query.entries()){
    //         if(params[0] === 'price'){
    //             price = params[1];
    //         }else{
    //             ingredients[params[0]]= + params[1];
    //         }
    //     }
    //     this.setState({ingredients:ingredients, totalPrice:price});
    // }

   
    checkoutCanclledHandler=()=>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler=()=>{
        this.props.history.replace('./checkout/contact-data');
        this.setState({continued:true});
    }
    render(){
        let summary = <Redirect to="/"/>;
        let purchasedRedirect=null;
        if(this.props.ings){
            purchasedRedirect =this.props.purchased ? <Redirect to="/" /> : null;
        }
        if(this.props.ings){
            summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                    checkoutCanclled={this.checkoutCanclledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    continued={this.state.continued}
                    ingredients={this.props.ings} />
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}/>
            </div>
            );
        };
        return summary;
    }
}
const mapStateToProps = state =>{
    return{
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        purchased: state.orders.purchased
    };
};

export default connect(mapStateToProps)(Checkout);