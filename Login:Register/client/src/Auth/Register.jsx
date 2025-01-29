import React from 'react';
import { Alert, Card, Row, Col, Form, Input, Typography, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.png';
import useSignup from '../hooks/useSignup';

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = async (values) => {
    await registerUser(values);
  };

  return (
    <Card className='form-container'>
      <Row>
        {/* Form */}
        <Col span={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography.Title level={3}>Create an account</Typography.Title>
          <Typography.Text>Join for exclusive access!</Typography.Text>
          <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please input your Full Name' }]}
            >
              <Input size="large" placeholder="Enter your Full Name" />
            </Form.Item>
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
            <Form.Item
              label="Confirm Password"
              name="confirm_password"
              rules={[
                { required: true, message: 'Please Re-enter your Password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password size="large" placeholder="Re-enter your Password" />
            </Form.Item>
            {error && <Alert description={error} type='error' showIcon closable className='alert' />}
            <Form.Item>
              <Button type="primary" htmlType='submit' size='large' className='btn' disabled={loading}>
                {loading ? <Spin /> : 'Create Account'}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size='large' className='btn'>Sign In</Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>

        {/* Image */}
        <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', height: '75%', textAlign: 'center' }}>
            <img src={registerImage} alt="Register" className="auth-image" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Register;
