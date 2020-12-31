import React from 'react';
import { Row, Col } from 'antd';
import './Header.scss'
import Util from '../../utils/utils';
export default class Header extends React.Component {
    state = {
        userName: "阿樂"
    }
    
    componentDidMount(){

        this.setState({
            userName:"阿樂"
        })
    setInterval(() => {
        let sysTime = Util.formateDate(new Date())
        this.setState({ sysTime })

    }, 1000)
}

render() {
    return (
        <div className="header">
            <Row className="header-top">
                <Col span="24">
                    <span>欢迎：{this.state.userName}</span>
                    <a href="##">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">

                <Col span="6" className="breadcrumb-title">
                   
                    首页
                </Col>
                <Col span="18" style={{textAlign:"right"}}>
                    <span className="date"> {this.state.sysTime} </span> &nbsp;
                         
                    <span className="weather-detail"> 大晴天☀</span>
                </Col>
            </Row>
        </div>);
}
}

