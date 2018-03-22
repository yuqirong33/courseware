import React from 'react';
import ReactDOM from 'react-dom';


// 百度地图
// import Mapindex from './App';


//echart图表
import TuopuChart from './echart';


// 百度地图
// ReactDOM.render(<Mapindex />, document.getElementById('root'));

//echart图表
ReactDOM.render(<TuopuChart />, document.getElementById('root'));

if(module.hot){
    module.hot.accept();
  }
