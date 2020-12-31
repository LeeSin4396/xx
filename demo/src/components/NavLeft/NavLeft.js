import React from 'react';

import menuList from '../../pages/menuConfig';
import loge from '../../imgs/4f8bf12ce43d65f881b80e2f4d9171d.jpg';
import { Menu } from 'antd';
import './NavLeft.scss'
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link} from 'react-router-dom';

export default class NavLeft extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: 'dark',
            current: '1',
        }
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode,
        })

    }

  
    renderMenu = (menuList) => {
     
        return menuList.map((item) => {

            if (item.children) {
                return (
                    
                    <SubMenu title={item.title} key={item.key} style={{fontSize:"18px" ,fontFamily: "黑体"}}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}  style={{fontSize:"18px",fontFamily: "黑体"}}>
                
                  
                      <Link to={item.key}>{item.title} </Link>
                 
                   
                </Menu.Item>
                
            )
            
            
        })
    }
    changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
    render() {
        return (
        <div className="logo">
         <img src={loge} alt=''/>
            <h1 >🐕🐕🐕 </h1>
            <Menu > {this.state.menuTreeNode}</Menu>
            
            {/* <Link to='/logo'>   登陆一下</Link>|
            
            <Link to='/home'> 首页看看</Link> */}
        </div>
        );
    }
   
}

