import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../js/lib-flexible'
import '../css/mobile_reset.css'
import './app.css'
import Window from '../components/window/window';

/* 
    
    容器类组件
    使用同一个容器的效果，容器里的内容不一样。
    步骤
        在容器器组件内部写{this.props.children}。this.props.children是获取标签组件内所有子节点(标签内可以套组件)
        关于隐藏滚动条的思路
            1.用两个div嵌套。
	        2.外面的盒子overflow: hidden; 
            3.上下拖动两个盒子的高要相同。里面的盒子宽要比外面的盒子大。
            样式里加overflow-y: auto; overflow-x: hidden;

    本地和网络的图片都可以统一使用以下格式。**本地音频也要require包一下**
    
*/


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            img:'http://img03.sogoucdn.com/app/a/07/e023d74b837f1504e450a9148bc9e62d',

            imgarr:require(`../img/${imgarr}`),
            imgurl:'http://img03.sogoucdn.com/app/a/07/e023d74b837f1504e450a9148bc9e62d'
         };
    }
    render() {
        let {imgarr,img} = this.state;
        return (
            <div>
                <Window window={{ width:'2rem',height:'2rem',backgroundColor: 'red' }} >
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                </Window>
                <Window window={{ width:'10rem',height:'5rem',backgroundColor: 'skyblue' }} >
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                </Window>

                {/* 不推荐这种方式 */}
                {/* <img src={require(`../img/${imgarr}`)} />   */}

                {/* 推荐这种方式 */}
                <img src={img} />  
                
            </div>
        )
    }
}
export default App