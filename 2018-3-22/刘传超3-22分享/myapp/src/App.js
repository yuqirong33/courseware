import React,{Component} from 'react';
import {Map, Marker,NavigationControl,InfoWindow,MapTypeControl,ScaleControl,Boundary} from 'react-bmap';



    // "react-bmap": "^1.0.69",
    
    //百度地图教程
    // https://github.com/huiyan-fe/react-bmap/blob/master/package.json   
    // 
    // 
    // 


class Mapindex extends Component {
    componentDidMount() {
        
    }
  render() {
    
    return (
         
                <div className="mapcss" style = {{width:"500px"}}>
                <Map 
                    style={{height: '420px'}} 
                    center={{lng: 100.402544, lat: 35.928216}}
                    zoom="4">
                    <NavigationControl /> 
                    <MapTypeControl />
                    <ScaleControl />
                </Map>
            </div>
      
      )
  }
}

export default Mapindex;



