import React from 'react';
import { Alert, Card, Row, Col, Form, Input, Typography, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.png';
import useLogin from '../hooks/useLogin'; // Ensure this hook exists and is properly implemented

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const handleLogin = async (values) => {
    await loginUser(values);
  };

  return (
    <Card className='form-container'>
      <Row>
        {/* Image */}
        <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', height: '75%', textAlign: 'center' }}>
            <img src={loginImage} alt="Login" className="auth-image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </Col>
        {/* Form */}
        <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography.Title level={3}>Sign In</Typography.Title>
          <Typography.Text>Discover the newly added contents!</Typography.Text>
          <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your Email!' },
                { type: 'email', message: 'The input is not valid Email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your Password!' }]}
            >
              <Input.Password size="large" placeholder="Enter your Password" />
            </Form.Item>
            {error && <Alert description={error} type='error' showIcon closable className='alert' />}
            <Form.Item>
              <Button type="primary" htmlType='submit' size='large' className='btn' disabled={loading}>
                {loading ? <Spin /> : 'Sign In'}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/">
                <Button size='large' className='btn'>Create an account</Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
