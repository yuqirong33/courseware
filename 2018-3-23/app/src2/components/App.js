import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../js/lib-flexible'
import '../css/mobile_reset.css'
import './app.css'

/* 
    
    rem设置
    把设计图px尺寸快速转换成rem尺寸
    步骤
        1.在App.js引用淘宝的lib-flexible(好处：动态设置根字体大小，只要引用不用做其他设置)
        2.下载 px转rem 插件。vscode推荐cssrem插件。设置cssrem-> "cssrem.rootFontSize": (根据设计稿的的宽确定FontSize，一般为根字体的2倍)
        3.如：设计稿640*1136.根字体32px(lib-flexible自动计算)。转换插件设置64px。写css时直接走设计稿尺
        4.不足：目前发现不兼容iphoneX，屏幕尺寸非16:9都不兼容。可以用百分比布局解决。或者弹性盒模型，弹性盒模型暂时没有深入研究
        5.背景图片也要设置rem尺寸
*/

class App extends Component {
    render() {
        return (
            <div>
                {/* <div className="box" ></div>
                <div className="box1" ></div> */}
                <div className="box3" >234</div>
            </div>
        )
    }
}
export default App