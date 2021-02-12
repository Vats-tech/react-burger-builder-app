import React from 'react';
import './Model.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/auxillary';
class Model extends React.Component{
    shouldComponentUpdate(nextProps , nextState){
        return nextProps.show !==  this.props.show || nextProps.children!==this.props.children;
    }
    // componentDidUpdate(){
    //     console.log('[Model will Update');
    // }
    render(){
        return(
        <Aux>
        <Backdrop show={this.props.show}
        clicked={this.props.modelClosed}></Backdrop>
        <div 
            className="Modal"
            style={{
                transform : this.props.show ? 'translateY(0)':'translateY(-100vh)',
                opacity : this.props.show ? '1':'0'
            }}
                >
            {this.props.children}
        </div>
    </Aux>
        );
    };
};
export default Model;