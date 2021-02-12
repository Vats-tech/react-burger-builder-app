import React from 'react';
import {connect} from 'react-redux';


import './ContactData.css'
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Form/Input/Input';
import WithErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
class ContactData extends React.Component{
    state={
        orderForm :{
            name : {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email : {
                elementType : 'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            street : {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Street Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            ZIP : {
                elementType : 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6,
                    maxLength:6
                },
                valid:false,
                touched:false
            },
            deliveryMethod : {
                elementType : 'select',
                elementConfig:{
                    options:[
                        // {value:'fastest',displayValue:'Fastest'},
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapest',displayValue:'Cheapest'}
                    ]
                },
                value:'fastest',
                validation:{},
                valid:true
            }
        },
        formIsValid:false
    }


    checkValidity=(value,rules)=>{
        let isValid =true;
        if(rules.required){
            isValid = value.trim() !== ' ' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.minLength && isValid;
        }
        return isValid;
    }

    OrderHandler = (event) =>{
        event.preventDefault();
        // this.setState({loading:true});
        const formData ={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order ={
            ingredients:this.props.ings,
            price : this.props.price,
            orderData:formData,
            userId :this.props.userId
        }
        this.props.onOrderBurger(order,this.props.token);
        // axios.post('/orders.json',order)
        // .then(response => {
        //     console.log(response);
        //     this.setState({loading: false});
        //     this.props.history.push('/');
        // })
        // .catch(error => {
        //     this.setState({loading: false});

        // });
    }


    inputChangeHandler =(event,inputIdentifier)=>{
        const updatedOrderForm={
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value=event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched=true;
        updatedOrderForm[inputIdentifier]=updatedFormElement;
        let formIsValid=true;
        for(let InputIdentifiers in updatedOrderForm){
            formIsValid = updatedOrderForm[InputIdentifiers].valid && formIsValid;
        }
        // console.log(updatedFormElement);
        this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid});
    }


    render(){
        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }
        let form=(
            <form onSubmit={this.OrderHandler}>
                {formElementsArray.map(formElement =>(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid ={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event)=>this.inputChangeHandler(event,formElement.id)}/>                                              
                ))}
                <Button btnType ="Success" disabled ={!this.state.formIsValid}>Order</Button>
            </form>
        );

        if(this.props.loading){
            form = <Spinner/>
        }

        return(
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        ings: state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        loading:state.orders.loading,
        token:state.auth.token,
        userId: state.auth.userID
    };
}
const mpaDisparchToProps = dispatch =>{
    return{
        onOrderBurger :(orderData,token) => dispatch(actions.purchaseBurger(orderData,token))
    }
    
}
export default connect(mapStateToProps,mpaDisparchToProps)(WithErrorHandler(ContactData,axios));