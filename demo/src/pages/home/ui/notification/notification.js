import React from 'react'
import { Card, Space, notification, Button } from 'antd'
import {
	RadiusUpleftOutlined,
	RadiusUprightOutlined,
	RadiusBottomleftOutlined,
	RadiusBottomrightOutlined,
} from '@ant-design/icons'

export default class Notifications extends React.Component {
	render() {
		return (
			<div>
				<Card title="加载框">
					<Space>
						<Button
							onClick={() => {
								this.openNotification('success', 'topLeft')
							}}
						>
							<RadiusUpleftOutlined />
							左上角
						</Button>
						<Button
							type="dashed"
							onClick={() =>
								this.openNotification('info', 'topRight')
							}
						>
							<RadiusUprightOutlined />
							右上
						</Button>
					</Space>
					<Space>
						<Button
							type="danger"
							onClick={() =>
								this.openNotification('error', 'bottomLeft')
							}
						>
							<RadiusBottomleftOutlined />
							左下
						</Button>
						<Button
							type="primary"
							shape="round"
							onClick={() =>
								this.openNotification('warning', 'bottomRight')
							}
						>
							<RadiusBottomrightOutlined />
							右下
						</Button>
					</Space>
				</Card>
			</div>
		)
	}
	openNotification = (type, placement) => {
		notification[type]({
			message: `Notification ${placement}`,
			description: '11月份考勤22天，请假18天，实发工资200元，请笑纳',
			placement,
		})
	}
}
