
import React from 'react'
import { Row, Col } from 'antd';
import './Admin.scss'
// import './home/ui/button/node_modules/antd/dist/antd.scss';
import Header from '../components/Header/Header';
// import  Home from '../pages/home/home';
import  NavLeft from '../components/NavLeft/NavLeft'
import Footer  from '../components/Footer/Footer';
// import Tablebasic from "../pages/ui/tablebasic/tablebasic"
export default class Admin extends React.Component {
    state = {}
    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft></NavLeft>
                    

                </Col>

                <Col span="20" className="main">
                    <Header></Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}

