import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as createtors from '../createtors';

// console.log()
class List extends Component {
    change = () => {
        let {id,dispatch,createtors:{changeChecked}} = this.props;
        dispatch(changeChecked(id));
    }
    render() { 
        let {txt,checked} = this.props;
        // console.log(this.props);
        return (
            <li>
                <span>{txt}</span>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={this.change}
                />
            </li>
        )
    }
}
 

export default connect(function(state){
    //state -> redux中的state
    return state;
},function (dispatch){
    let obj = {createtors}
    obj.dispatch = dispatch;
    return obj;
})(List);