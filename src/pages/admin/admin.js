import React, { Fragment } from "react"
import { Layout,PageHeader ,Carousel,Menu} from 'antd';
import Sliders from "../slider/slider"
import Style from "./admin.module.less"
import Modal from "../../components/modal/modal"


const { Header, Content, Footer, Sider } = Layout;


class Admin extends React.Component{
    render(){
        return (
            <Fragment>
            <Header className="header"  style={{ lineHeight: '64px' ,position:"fixed",zIndex:"9",left:0,right:0,}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' ,position:"fixed"}}
                >
                    <Menu.Item key="1" style={{fontSize:"22px",color:"#fff"}}>电商一体化后台管理系统</Menu.Item>
                    
                </Menu>
            </Header>
            <Layout>
                <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top:64
                }}>
                
                    <Sliders></Sliders>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0,position:"relative",top:64 }} >
                <Carousel autoplay>
                    <div className={Style.carous}>
                         <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3622168883,2039075439&fm=26&gp=0.jpg" className={Style.img}/>
                    </div>
                    <div className={Style.carous}>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2946981926,894037869&fm=26&gp=0.jpg" className={Style.img}/>
                    </div>
                    
                </Carousel>
                
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial',position:"relative",top:60,marginBottom:"100px"}}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' ,position:"relative",bottom:0}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
                 <Modal></Modal>
            </Layout>
            </Fragment>
        );
    }
}

export default Admin