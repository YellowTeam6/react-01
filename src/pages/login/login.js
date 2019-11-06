import React from "react"
import { Form, Icon, Input, Button, Checkbox ,Card} from 'antd'
import Style from "./login.module.less"
import {withRouter} from "react-router-dom"

class Login extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={Style.login}>
            <Card title="用户登录" className={Style.card}>
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
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
                <Button type="primary" className="login-form-button">
                    登录
                </Button>
                 <Button onClick={()=>{
                    console.log(this)
                    //this.props.history.replace("/reg")
                }}>注册</Button>
                </div>
                </Form.Item>
            </Card>
            </div>
        )
    }
}
export default Form.create()(Login)