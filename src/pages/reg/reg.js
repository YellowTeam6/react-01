import React from "react"
import {Form,Input,Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,Card,message} from 'antd';
import Style from "./reg.module.less"

const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

    
    
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
   
  

class Reg extends React.Component{
  reg=()=>{
    this.props.form.validateFields((err,userinfo)=>{
      if(err){
        message.error("信息输入有误请重试")
      }else{
        this.$axios.post("/hehe/admin/user/reg",userinfo).then((data)=>{
          console.log(data)
          if(data.err===0){
            //存值
            //跳转到首页
            this.props.history.push("/admin/user/login")
        }
        })
      }
    })
  }
    render(){
        
        const { getFieldDecorator } = this.props.form;
        
        return(
            <div className={Style.reg}>
            <Card className={Style.card}>
               
                <Form.Item label="密码" hasFeedback>
                {getFieldDecorator('ps', {
                    rules: [
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        validator: this.validateToNextPassword,
                    },
                    ],
                })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    {
                        validator: this.compareToFirstPassword,
                    },
                    ],
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item
                label={
                    <span>
                    用户名&nbsp;
                    <Tooltip title="What do you want others to call you?">
                        <Icon type="question-circle-o" />
                    </Tooltip>
                    </span>
                }
                >
                {getFieldDecorator('us', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(<Input />)}
                </Form.Item>            
                <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox>
                    I have read the <a href="">agreement</a>
                    </Checkbox>,
                )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" onClick={this.reg}>
                    注册
                </Button>
                </Form.Item>
            </Card>
            </div>
        )
    }
}
export default Form.create()(Reg)