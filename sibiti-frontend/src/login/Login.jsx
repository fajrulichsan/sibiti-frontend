import React, { Fragment, useState } from 'react';
import { Button, Input, message } from 'antd';
import config from '../config/config';
import axios from 'axios';
import Loading from '../components/Loading';
import { fastMemo } from '@mui/x-data-grid/internals';

const { baseUrl } = config();

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFinish = () => {
    console.log(formData);
    axios
      .post(`${baseUrl}/auth/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        const res = response.data.data
        setLoading(false)
        if(res.role != "Member"){
            window.location.href = "/cms/dashboard"
        }else{
            message.error("Tidak bisa login karna anda bukan admin")
        }   
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false)
        message.error(error)
      });
  };

  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    onFinish();
  };

  return (
    <Fragment>

    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md px-10 py-10 mb-4 w-96 rounded-lg">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Input.Password
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6 text-right text-sm text-gray-500">
            <a href="">Lupa password</a>
          </div>
          <div className="flex items-center">
            <Button className="w-full" type="primary" htmlType="submit">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>

    {loading && <Loading/>}
    </Fragment>

  );
};

export default Login;
