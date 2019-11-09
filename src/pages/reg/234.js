<div>
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

</div>
