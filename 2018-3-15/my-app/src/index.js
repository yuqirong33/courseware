import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import routers from './routes/routers';
import {Link,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
          {routers}
        </Switch>
    </Router>
    , document.getElementById('root'));
if(module.hot){
    module.hot.accept();
}