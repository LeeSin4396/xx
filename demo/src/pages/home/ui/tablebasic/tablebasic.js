import React from 'react'
import { Card, Space, Button } from 'antd'
import {gets} from "../../../../resource/axios"

export default class Tablebasic extends React.Component {
    state={
        arrlist: []
    }
    huoqu=()=>{
        gets("https://www.fastmock.site/mock/ac5929a8162ee61b5d210be140dd2aa1/ale/ale").then((res)=>{
            console.log(res);
            this.setState({
                arrlist: res.data.data
            })
        }).catch((err)=>{
            console.info(err)
        })
    }
    createLi=()=>{
        let newList = [];
        this.state.arrlist.map(function(item,i){
            newList.push(<li key={i}>{item.name}</li>)
        })
        return newList;
    }
	render() {
		return (
			<div>
				<Card title="axios去ajax后台数据">
					<Button type="danger" onClick={this.huoqu}>
						点击获取后台数据
					</Button>
					<Space size="middle">
						<ul>{this.createLi()}</ul>
					</Space>
				</Card>
			</div>
		)
	}
}
