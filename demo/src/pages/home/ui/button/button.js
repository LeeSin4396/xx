import React from 'react'
import 'antd/dist/antd.css'
import './button.css'
import { Button, Menu, Card, Dropdown } from 'antd'
import {
	StrikethroughOutlined,
	PoweroffOutlined,
	DownloadOutlined,
} from '@ant-design/icons'

export default class Buttons extends React.Component {
	render() {
		const menu = (
			<Menu>
				<Menu.Item key="1">1st item</Menu.Item>
				<Menu.Item key="2">2nd item</Menu.Item>
				<Menu.Item key="3">3rd item</Menu.Item>
			</Menu>
		)
		return (
			<div>
				<Card title="基础按钮">
					<Button type="primary">主色</Button>
					<Button>默认</Button>
					<Button type="dashed">虚线</Button>
					<Button type="danger">警告</Button>
					<Button disabled>禁用</Button>
				</Card>
				<Card>
					<Button type="primary" icon={<StrikethroughOutlined />}>
						ICON图形
					</Button>
					<Button type="dashed" icon={<PoweroffOutlined />}>
						电源
					</Button>
					<Button type="primary" loading={3 > 6}>
						Loading
					</Button>
					<Button
						type="danger"
						shape="round"
						icon={<DownloadOutlined />}
						size="small"
					>
						下载按钮
					</Button>
				</Card>
				<Card title="下拉菜单">
					<Button type="primary">primary</Button>
					<Button>secondary</Button>
					<Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
				</Card>
			</div>
		)
	}
}
