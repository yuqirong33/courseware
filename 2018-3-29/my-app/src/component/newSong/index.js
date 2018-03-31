import React, { Component } from 'react';
import MyCarousel from '../zouma';
import MyList from '../List';
import './index.css';
class MyNewSong extends Component {
    render() { 
        let {data,banner} = this.props;
        // console.log(data)
        let list = data.map((e,i)=>{
          return <MyList {...{dataList:e,key:i}} />
        });
        return (
           <div id="newSong">
               <MyCarousel  banner={banner}/>
               {list}
           </div>
        )
    }
}
 
export default MyNewSong;