import React from "react"
import { Layout, Menu, Icon ,Carousel} from 'antd';
import Sliders from "../slider/slider"
import Style from "./admin.module.less"
import Modal from "../../components/modal/modal"


const { Header, Content, Footer, Sider } = Layout;


class Admin extends React.Component{
    render(){
        return (
            <Layout>
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
                
                    <Sliders></Sliders>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                <Carousel autoplay>
                    <div className={Style.carous}>
                         <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3622168883,2039075439&fm=26&gp=0.jpg" className={Style.img}/>
                    </div>
                    <div className={Style.carous}>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2946981926,894037869&fm=26&gp=0.jpg" className={Style.img}/>
                    </div>
                    
                </Carousel>
                
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
                 <Modal></Modal>
            </Layout>
        );
    }
}

export default Admin