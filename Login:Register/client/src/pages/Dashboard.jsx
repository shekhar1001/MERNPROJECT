import React, { useState, useEffect } from 'react';
import { Avatar, Button, Typography, Card, List, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { userData, logout } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employees');//http://localhost:3000/api/employees
        setEmployees(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee data', error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <Card className='profile-card'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'small' }}>
          <Avatar size={100} icon={<UserOutlined />} className='avatar' />
          <Typography.Title level={4} className='username'>
            {userData.name}
          </Typography.Title>
          <Typography.Text type='secondary' strong>
            Email: {userData.email}
          </Typography.Text>
          <Typography.Text type='secondary'>
            Role: {userData.role}
          </Typography.Text>
          <Button size='small' type='primary' className='profile-btn' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
      <Card className='employees-card'>
        <Typography.Title level={3} className='employees-title'>
          Employee List
        </Typography.Title>
        {loading ? (
          <Spin size="large" />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={employees}
            renderItem={employee => (
              <List.Item className='employee-list-item'>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} className='employee-avatar' />}
                  title={<span className='employee-name'>{employee.employee_name}</span>}
                  description={
                    <div className='employee-info'>
                      <span className='employee-details'>Salary: {employee.employee_salary}</span>
                      <span className='employee-details'>Age: {employee.employee_age}</span>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
};

export default Dashboard;
