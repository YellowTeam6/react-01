import React,{Fragment} from "react"
import {withRouter} from "react-router-dom"
import Style from "./modal.module.less"
import {Card,Button} from "antd"
import {connect} from "react-redux"
import actionCreator from "../../store/actionCreator"

class Modal extends React.Component{
    
    render(){
        let {tokenModal}=this.props
        return(
            <Fragment>
            {tokenModal ? "" : <div style={{ }} className={Style.modal}>
                <Card title="提示" bordered={false} className={Style.card}>
                <h4>登录失效，请重新登录</h4>
                <Button className={Style.btn} onClick={()=>{
                    this.props.history.push("/admin/user/login")
                    let action =actionCreator.changeTokenModal(true)
                    this.props.dispatch(action)
                }}>去登录</Button>
                </Card>
            </div>}
            </Fragment>
        )
    }
}
export default connect(state=>state)(withRouter(Modal))