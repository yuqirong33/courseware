import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {Provider,connect} from 'react-redux';
import { createStore, combineReducers,applyMiddleware,bindActionCreators} from 'redux';
import reducer from './reducer';
import add from './createtors';
/*
    2.引入
        react-redux
            Provider  根组件
            connect   组件与数据连接
        
        redux
            createStore 操作数据的容器
            combineReducers 如果有多个Reducer合并
                combineReducers({reducer1,reducer2})
            
            applyMiddleware  激活中间件的

            bindActionCreators  合并多个Creators
                {add,rm,xx,yy,zz}  *  as Creators

                bindActionCreators(Creators)

    3.const store = createStore(reducer);

        dispatch:触发器
        subscribe:监听器
        getState:获取数据
    
    4.把Provider放到根组件上并传一个store={store}

*/
const store = createStore(reducer);
// console.log(store.getState());  

// store.dispatch(add('触发了'));

// console.log(store.getState()); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
