import React from 'react'
import { Table, Tag, Space } from 'antd'

export default class Tablehigh extends React.Component {
	render() {
		const columns = [
			{
				title: '姓名',
				dataIndex: 'name',
				key: 'name',
				render: (text) => <a>{text}</a>,
			},
			{
				title: '年龄',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: '地址',
				dataIndex: 'address',
                key: 'address',
                align: 'center'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render: (sex)=> sex==1 ? '男' : '女',
            },
			{
				title: '标签',
				key: 'tags',
				dataIndex: 'tags',
				render: (tags) => (
					<>
						{tags.map((item) => {
							let color = item.length > 5 ? 'geekblue' : 'green'
							if (item === 'loser') {
								color = '#a3e'
							}
							return (
								<Tag color={color} key={item}>
									{item.toUpperCase()}
								</Tag>
							)
						})}
					</>
				),
			},
			{
				title: '安康信',
				key: 'action',
				render: (text, record) => (
					<Space size="middle">
						<a>Invite {record.name}</a>
						<a>Delete</a>
					</Space>
				),
			},
		]
		const data = [
			{
				key: '1',
				name: '333',
				age: 32,
                address: 'New York No. 1 Lake Park',
                sex: 1,
				tags: ['nice', 'developer'],
			},
			{
				key: '2',
				name: '999',
				age: 42,
				address: 'London No. 1 Lake Park',
                sex: 0,
				tags: ['loser'],
			},
			{
				key: '3',
				name: '109',
				age: 32,
				address: 'Sidney No. 1 Lake Park',
                sex: 1,
				tags: ['cool', 'teacher','student'],
			},
		]

		return (
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
}
