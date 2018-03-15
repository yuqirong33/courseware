import React, { Component } from 'react';
// import routers from '../routes/routers';
// import {Route,Redirect,Switch,Link} from 'react-router-dom';
class Song extends Component {
  constructor(){
    super();
    this.state = {
      url:"",
      loading:true
    } 
  }
  componentDidMount(){
    console.log(this.props);
    // return true;
    setTimeout(()=>{
      let {url:{match:{params}}} = this.props;
      let data = {
          "543988222":{
              id:543988222,
              img:'http://p1.music.126.net/MARSmQSCtfpq-hjBQQ7pjA==/109951163179240586.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'super love'
              },
          "543988244":{
              id:543988244,
              img:'http://p1.music.126.net/d_-1dgT7X2tzSJHw1Fg3_Q==/109951163180783114.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'那就'
              },
          "543986505":{
              id:543986505,
              img:'http://p1.music.126.net/Ch_h6xxScxHoJwk2IO7eDQ==/109951163179260115.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'帅锅'
              },
          "543965029":{
              id:543965029,
              img:'http://p1.music.126.net/lNj_fQ9WS-_wYnl0PTDUpQ==/109951163177737326.webp?imageView&thumbnail=721y721&quality=75&tostatic=0&type=webp',
              name:'say'
          },
      }
      // console.log(params)

        this.setState({
          url:data[params.id].img
        },()=>{
          this.setState({
            loading:false
          })
        })
    
      },2000);

  }
  render() {
    // let {url:{match:{params}}} = this.props;
    let {url,loading} = this.state;
    // let obj = data.find(e=>e.id == params.id);
    let dp = loading?'block':'none'
    return (
      <div className="Song">
        <h1>这首歌曲</h1>
        <div style={{display:dp,marginTop:'-20px'}}>loading....</div>
        <img src={url}/>
      </div>
    );
  }
}

export default Song;
