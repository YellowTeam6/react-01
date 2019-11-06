import React from "react"
import {Form,Input,Tooltip,Icon,Cascader,Select,Row,Col,Checkbox,Button,Card} from 'antd';
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
    render(){
        console.log(this)
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 70 }}>
              
            </Select>,
          );
        return(
            <div className={Style.reg}>
            <Card className={Style.card}>
                <Form.Item label="邮箱">
                {getFieldDecorator('email', {
                    rules: [
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ],
                })(<Input />)}
                </Form.Item>
                <Form.Item label="密码" hasFeedback>
                {getFieldDecorator('password', {
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
                {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(<Input />)}
                </Form.Item>

                <Form.Item label="手机号码">
                {getFieldDecorator(
                  'phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
               
                <Form.Item label="验证码" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                    <Col span={12}>
                    {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: 'Please input the captcha you got!' }],
                    })(<Input />)}
                    </Col>
                    <Col span={12}>
                    <Button>点击获取</Button>
                    </Col>
                </Row>
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
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
                </Form.Item>
            </Card>
            </div>
        )
    }
}
export default Form.create()(Reg)