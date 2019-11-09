
import React from "react"
import { Form, Icon, Input, Button, Checkbox ,Card, message} from 'antd'
import Style from "./login.module.less"
import webstorage from "../../utils/webstorage"

class Login extends React.Component{
    submit=()=>{
        this.props.form.validateFields((err,userinfo)=>{
            if(err){
                message.error("信息输入有误请重新输入")
            } else{
                this.$axios.post("/hehe/admin/user/login",userinfo).then((data)=>{
                    console.log(data)
                    if(data.err==0){
                       // webstorage.setItem("rootlist",data.rootList)
                       this.props.history.push("/admin/management")
                    }
                })
            } 
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={Style.login}>
            <Card title="用户登录" className={Style.card}>
                <Form.Item>
                {getFieldDecorator('us', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="userName"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('ps', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    
                    />,
                )}
                </Form.Item>
                <Form.Item >
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
                <div className={Style.btn}>
                <Button type="primary" className="login-form-button" onClick={this.submit}>
                    登录
                </Button>
                 <Button onClick={()=>{
                    console.log(this)
                    this.props.history.push("/admin/user/reg")
                }}>注册</Button>
                </div>
                </Form.Item>
            </Card>
            </div>
        )
    }
}
export default Form.create()(Login)

