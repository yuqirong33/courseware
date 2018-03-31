import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import App from '../App';
import Ranking from '../component/Ranking';
import MyHead from '../component/head';
import HotList from '../component/hot';

let routers = [
    {
        path:'/newsong',
        component:App
    },
    {
        path:'/rank',
        component:Ranking
    },
    {
        path:'/hot',
        component:HotList
    }
];
class Routers extends Component {
    render(){
        let routerEle = routers.map((e,i)=>{
            return <Route exact key={i} path={e.path} component={e.component}/>
        });
        return (
            <Router>
               <div>
                    <Route path='/' children={(props)=>{
                        return <MyHead url={props}/>
                    }}/>
                    {routerEle}
               </div>
            </Router>
        )
    }
}
export default Routers;
