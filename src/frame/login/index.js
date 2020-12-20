import React from 'react';
import { Form, Input, Button, } from 'antd';
import { postUserLogin } from './service';

import './index.scss';

function Login() {

  const [form] = Form.useForm();

  const handleClickSubmit = () => {
    form.validateFields().then(async (values) => {
      const { username, password, } = values;
      const postData = {
        username,
        password,
      }
      const { code } = await postUserLogin(postData);
      console.log(code)
    }).catch(err => {
      console.log(err)
    })
    
  }

  return (
    <div className="fx full login-main">
      <div className="login-container">
        <div className="login-content">
          <Form
            form={form}
            initialValues={{
              remember: true,
            }}
          >
            {/* 用户名 */}
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            >
              <Input placeholder="用户名" />
            </Form.Item>
            {/* 密码 */}
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>
            {/* 登录/注册 */}
            <Form.Item>
              <Button type="primary" onClick={handleClickSubmit} className="login-content-btn">
                登录/注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
};

export default Login;