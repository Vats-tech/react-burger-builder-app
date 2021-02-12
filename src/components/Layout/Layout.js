import React from 'react';
import  {connect} from 'react-redux';

import Aux from '../../hoc/Auxillary/auxillary';
import './Layout.css';
import ToolBar from '../UI/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';
class Layout extends React.Component{
    state={
        showSideDrawer:false
    }
    sideDrawerHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    showDrawerToggleHandler =() =>{
        this.setState((prevState)=>{
            return {showSideDrawer: ! prevState.showSideDrawer};
        });
    }
    render(){
        return(
        <Aux>
            <ToolBar 
                isAuth ={this.props.isAuthenticated}
                drawerToggleClicked = {this.showDrawerToggleHandler} />
            <SideDrawer 
                isAuth ={this.props.isAuthenticated}
                open={this.state.showSideDrawer}
                closed = {this.sideDrawerHandler}/>
            <main className ="Content">
                {this.props.children}
            </main>  
            </Aux>);
    }
}
const mapStateToProps = state =>{
    return{
        isAuthenticated : state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);