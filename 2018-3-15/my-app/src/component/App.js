import React, { Component } from 'react';
import {Route,Redirect,Switch,Link} from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[{
              id:543988222,
              img:'http://p1.music.126.net/MARSmQSCtfpq-hjBQQ7pjA==/109951163179240586.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'super love'
            },
            {
              id:543988244,
              img:'http://p1.music.126.net/d_-1dgT7X2tzSJHw1Fg3_Q==/109951163180783114.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'那就'
            },
            {
              id:543986505,
              img:'http://p1.music.126.net/Ch_h6xxScxHoJwk2IO7eDQ==/109951163179260115.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'帅锅'
            },
            {
                id:543965029,
                img:'http://p1.music.126.net/lNj_fQ9WS-_wYnl0PTDUpQ==/109951163177737326.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
                name:'say'
            }
        ]
    } 
  }
  render() {
    console.log(this.props);

    let {data} = this.state; 
    return (
      <div className="App">
        <h1>歌曲列表</h1>
        <ul>
          {
            data.map((e,i)=>{
              return <li  key={i}><Link to={`/song/${e.id}`}>{e.name}</Link></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
