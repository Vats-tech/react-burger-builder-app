// import logo from './logo.svg';
import React from 'react';
import './App.css';

import {Route,Switch,withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
});

class App extends React.Component{
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  render(){
    let routes  =(
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuthenticated){
      routes=(
        <Switch>
              <Route path="/checkout" component={asyncCheckout} />
              <Route path="/orders" component={asyncOrders} />
              <Route path="/logout" component={Logout} />
              <Route path="/auth" component={asyncAuth} />
              <Route path="/" exact component={BurgerBuilder} />
              <Redirect to="/" />
        </Switch>
      )
    }
     return (
    <div className="App">
      <Layout>
       {routes}
      </Layout>
    </div>
  );
  }
 
}

export const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.token !==null
  }
}

export const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignUp:()=> dispatch(actions.authCheckState())
  }
}
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));

