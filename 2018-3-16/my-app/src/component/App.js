import React, { Component } from 'react';
import List from  './List';
import {connect} from 'react-redux';
import * as createtors from '../createtors';
class App extends Component {
  up = (ev) => {
    //一会回车触发ADD
    if(ev.keyCode == 13){
      let {dispatch,createtors:{add}} = this.props;
      dispatch(add(ev.target.value));
      ev.target.value = '';
    }
  }
  render() {
    let {arr}  = this.props;
    let list = arr.map((e,i)=>{
      return <List {...{id:e.id,key:i,txt:e.txt,checked:e.checked}} />
    }) 
    return (
      <div className="App">
        <div>这个是第一个组件</div>
        <input 
          onKeyUp={this.up}
        />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default connect(state=>state,(dispatch)=>{
  let obj = {createtors}
  obj.dispatch = dispatch;
  return obj;
})(App);
