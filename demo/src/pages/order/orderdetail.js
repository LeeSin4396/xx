import React from 'react'
import { Card, Button, Table, Form, Select, Modal } from 'antd'
import { gets } from '../../resource/axios';
import './orderdetail.css'
import "../../utils/utils"

export default class OrderDetail extends React.Component {
    state={}
    componentDidMount(){
        let orderId = this.props.match.params.orderId;
        if(orderId){
            this.getDetailInfo(orderId)
		}
		var map = new window.BMap.Map("orderDetailMap");
		map.centerAndZoom('富平', 15);
    }
    getDetailInfo = (orderId) => {
		gets(
			'/project',
			{
				// orderId: orderId,
			}
		).then((res) => {
			this.setState({
				orderInfo: res.data.result,
			})
			// this.renderMap(res.data.result)

		})
		// renderMap=()=>{
		// 	this.map = new window.BMap.Map("orderDetailMap");
		// 	// 创建地图实例  
		// 	// var point = new window.BMap.Point(116.404, 39.915);
		// 	// 创建点坐标  
		// 	this.map.centerAndZoom('巴黎', 15);
		// 	// 初始化地图，设置中心点坐标和地图级别  
		// 	// 添加地图控件
		// 	this.addMapControl()
		// }

	}
	// addMapControl = () => {
	// 	this.map.addControl(
	// 		new window.BMap.NavigationControl({
	// 			type: window.BMAP_NAVIGATION_CONTROL_SMALL,
	// 			anchor: window.BMAP_ANCHOR_TOP_RIGHT,
	// 		})
	// 	)
	// }
	render() {
		const info = this.state.orderInfo || {}
		return (
			<div>
				<Card>
					<div id="orderDetailMap" className="order-map"></div>
					<div className="detail-items">
						<div className="item-title">基础信息</div>
						<ul className="detail-form">
							<li>
								<div className="detail-form-left">用车模式</div>
								<div className="detail-form-content">
									{info.mode === 1 ? '服务区' : '停车点'}
								</div>
							</li>
							<li>
								<div className="detail-form-left">订单编号</div>
								<div className="detail-form-content">
									{info.order_sn}
								</div>
							</li>
							<li>
								<div className="detail-form-left">车辆编号</div>
								<div className="detail-form-content">
									{info.bike_sn}
								</div>
							</li>
							<li>
								<div className="detail-form-left">用户姓名</div>
								<div className="detail-form-content">
									{info.user_name}
								</div>
							</li>
							<li>
								<div className="detail-form-left">手机号码</div>
								<div className="detail-form-content">
									{info.mobile}
								</div>
							</li>
						</ul>
					</div>
					<div className="detail-items">
						<div className="item-title">行驶轨迹</div>
						<ul className="detail-form">
							<li>
								<div className="detail-form-left">行程起点</div>
								<div className="detail-form-content">
									{info.start_location}
								</div>
							</li>
							<li>
								<div className="detail-form-left">行程终点</div>
								<div className="detail-form-content">
									{info.end_location}
								</div>
							</li>
							<li>
								<div className="detail-form-left">行驶里程</div>
								<div className="detail-form-content">
									{info.distance / 1000}公里
								</div>
							</li>
						</ul>
					</div>
				</Card>
			</div>
		)
	}
}
