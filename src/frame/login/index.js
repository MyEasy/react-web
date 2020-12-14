import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { postUserLogin, postTest } from './service';

import './index.scss';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Login() {

  const [form] = Form.useForm();
  const [token, setToken] = useState(null);

  const handleClickSubmit = () => {
    form.validateFields().then(async (values) => {
      const { username, password, } = values;
      const postData = {
        username,
        password,
      }
      const { data } = await postUserLogin(postData);
      setToken(data);
    }).catch(err => {
      console.log(err)
    })
    
  }

  const handleClickTest = () => {
    postTest({token})
  }

  return (
    <div className="fx login-form">
      <Form
        {...layout}
        form={form}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={handleClickSubmit}>
            Submit
          </Button>
          <Button type="primary" onClick={handleClickTest}>
            Test
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Login;