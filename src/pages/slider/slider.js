import React from "react"
import {withRouter} from "react-router-dom"
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class Sliders extends React.Component{
  
    render(){
        return(
          <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
              console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
          }}
          >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" onClick={()=>{
                this.props.history.push("/admin/pie")
              }}>
              <Icon type="cloud-o" />
              <span className="nav-text" >分析图</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={()=>{
                this.props.history.push("/admin/management")
              }}>
              <Icon type="user" />
              <span className="nav-text">管理员管理</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={()=>{
                this.props.history.replace("./update")
              }}>
              <Icon type="upload" />
              <span className="nav-text">上传图片</span>
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">总结</span>
              </Menu.Item>
          </Menu>
          </Sider>
        )
    }
}
export default withRouter(Sliders)