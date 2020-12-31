import React from 'react'
import { Card, Space, Button, message } from 'antd'

export default class Messages extends React.Component {
	render() {
		return (
			<div>
				<Card title="加载框">
					<Space>
						<Button
							size="large"
							onClick={() => {
								message.success('This is a success message')
							}}
						>
							Success
						</Button>
						<Button
							onClick={() => {
								message.error('This is an error message')
							}}
						>
							Error
						</Button>
						<Button
                            size="small"
                            type="ghost"
							onClick={() => {
								message.warning('This is a warning message')
							}}
						>
							Warning
						</Button>
					</Space>
				</Card>
			</div>
		)
	}
}
