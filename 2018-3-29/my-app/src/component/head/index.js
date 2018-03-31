import React, { Component } from 'react';
import MyNav from '../nav';
import MyTab from '../tab';
import './index.css';
class MyHead extends Component {
    render() { 
       let {url} = this.props;
       return (
        <div id="header">
            <MyNav />
            <MyTab url={url}/>
        </div>
       )
    }
}
 
export default MyHead;