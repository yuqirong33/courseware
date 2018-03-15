import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';
import App from '../component/App';
import Song from '../component/Song';

const arr = [
    {
        path:'/',
        component:((props)=><App url={props}/>)
    },
    {
        path:'/song/:id',
        component:((props)=><Song url={props}/>)
    }
];


const routes = arr.map((e,i)=>{
    return <Route key={i} exact path={e.path} render={(props)=>{
        return e.component(props);
    }} />
});

export default routes;