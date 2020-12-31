import React from 'react'
import './home.scss'
import aa from '../../imgs/微信图片_20201028165736.jpg';
export default class Home extends React.Component{
    render(){
        return (
            <div className="home-wrap">
                
                <img src={aa} style={{width:'1280px', height:'530px'}}/>
            </div>
        )
    }
} 