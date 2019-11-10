import React from "react"
import {withRouter} from "react-router-dom"
import { Layout, Menu} from 'antd';
import webStorage from "../../utils/webstorage"
const { Sider } = Layout;
const { SubMenu } = Menu;

const root=webStorage.getItem("list")||[]
class Sliders extends React.Component{
  jump=(path)=>{
    this.props.history.push(path)
  }
  renderItem=(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu key={index} title={item.title}>
            {this.renderItem(item.children)}
          
          </SubMenu>
        )
      }else{
        return(
          <Menu.Item key={index} onClick={this.jump.bind(this,item.path)}>
          {item.title}
          </Menu.Item>
        )
      }
    })
  }

    render(){
        return(
          
          <Menu
          mode="vertical"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
          >
             {this.renderItem(root)}
          </Menu>
          
        )
    }
}
export default withRouter(Sliders)