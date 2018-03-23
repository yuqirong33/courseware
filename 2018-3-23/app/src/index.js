import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from './components/App' //路由
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Router>
    <App/>
</Router>, document.getElementById('root'), function () {
    console.log('挂载完成')
});
registerServiceWorker();