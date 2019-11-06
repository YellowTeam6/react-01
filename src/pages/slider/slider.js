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
              <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text" onClick={()=>{
                this.props.history.push("/admin/pie")
              }}>分析图</span>
              </Menu.Item>
              <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">权限信息</span>
              </Menu.Item>
              <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text" onClick={()=>{
                this.props.history.replace("./update")
              }}>上传图片</span>
              </Menu.Item>
              <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">总结</span>
              </Menu.Item>
          </Menu>
          </Sider>
        )
    }
}
export default withRouter(Sliders)