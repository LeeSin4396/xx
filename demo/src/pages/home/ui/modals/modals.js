import React from 'react'
import { Modal, Card, Button, Space } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal

export default class Modals extends React.Component {
	state = { vs: false }
	render() {
		return (
			<div>
				<Card title="模态框">
					<Button type="danger" onClick={this.showConfirm}>
						点击弹出框
					</Button>
				</Card>
				<Card title="图标模态框">
					<Space>
						<Button onClick={this.showConfirm2} type="dashed" >图标按钮</Button>
					</Space>
				</Card>
				<Modal
					title="Basic Modal"
					visible={this.state.vs}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		)
	}
	showConfirm = () => {
		this.setState({
			vs: true,
		})
	}
	handleOk = () => {
		console.log('ok')
		this.setState({
			vs: false,
		})
	}
	handleCancel = () => {
		console.log('cancel')
		this.setState({
			vs: false,
		})
	}
	showConfirm2 = () => {
		confirm({
			title: '确认?',
			icon: <ExclamationCircleOutlined />,
			content: '你确定学会Reactjs了吗？',
			onOk() {
				console.log('OK')
			},
			onCancel() {
				console.log('Cancel')
			},
		})
	}
}
