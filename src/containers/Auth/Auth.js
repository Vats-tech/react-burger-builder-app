import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Auth.css';

import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Form/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';

class Auth extends React.Component{
    state ={
        controls :{
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
            password : {
                elementType : 'input',
                elementConfig:{
                    type:'password',
                    placeholder:'password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength :8
                },
                valid:false,
                touched:false
            }
        },
        isSignUp:true
    }


    componentDidMount(){
        if(!this.props.buildingBurger && this.props.authRedirectPath !== '/'){
            this.props.onSetAuthRedirectPath();
        }
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
    inputChangeHandler=(event,controlName)=>{
        const updatedControls ={
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            }
        };
        this.setState({controls:updatedControls});
    };


    submitHandler=(event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp);
    }

    switchAuthModeHandler=() =>{
        this.setState(prevState =>{
            return {isSignUp:!prevState.isSignUp};
        })
    }
    render(){
        const formElementsArray=[];
        for(let key in this.state.controls){
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]
            });
        }
        let form=formElementsArray.map(formElement =>(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid ={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event)=>this.inputChangeHandler(event,formElement.id)}/>                                              
                ));
                // {/* <Button btnType ="Success" disabled ={!this.state.formIsValid}>Order</Button> */}
                
                if(this.props.loading){
                    form=<Spinner/>
                }
            let errorMessage=null;
            if(this.props.error){
                let errMsg;
                if(this.props.error.message === 'EMAIL_EXISTS'){
                    errMsg='Please Switch To Login';
                } else if(this.props.error.message==='EMAIL_NOT_FOUND'){
                    errMsg='Please Switch To Register'
                }
                errorMessage=<p style={{color:'red',fontFamily:"monospace",fontSize:'18px'}}>
                    {this.props.error.message}<br></br>
                    <p style={{color:'Green'}}>{errMsg}</p>
                </p>
            }

            let authenticatedRedirect  =null;
            if(this.props.isAuthenticated){
                authenticatedRedirect=<Redirect to={this.props.authRedirectPath} />
            }

        return(
            <div className="Auth">
                {authenticatedRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                  {form}
                <Button btnType="Success">SUBMIT</Button>  
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignUp ? 'LOGIN' :'REGISTER'} </Button>
            </div>
        )
    }
}
const mpaStateToProps = state =>{
    return{
        loading:state.auth.loading,
        error:state.auth.error,
        isAuthenticated:state.auth.token !== null,
        buildingBurger :state.burgerBuilder.building,
        authRedirectPath:state.auth.authRedirectPath
    }
}

const mpaDisparchToProps = dispatch =>{
    return{
        onAuth :(email,password,isSignUp) =>dispatch(actions.auth(email,password,isSignUp)),
        onSetAuthRedirectPath: () =>dispatch(actions.setAuthRedirectPath('/'))
    }
}
export default connect(mpaStateToProps,mpaDisparchToProps)(Auth);