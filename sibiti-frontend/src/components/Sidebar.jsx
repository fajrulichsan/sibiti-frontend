import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      label: 'Dashboard',
      key: '1',
      icon: <PieChartOutlined />,
      linkTo: '/dashboard',
    },
    {
      label: 'Ujian',
      key: 'sub1',
      icon: <MailOutlined />,
      linkTo: '/ujian',
      children: [
        {
          label: 'Event',
          key: '5',
          linkTo: '/cms/ujian/event',
        },
        {
          label: 'Sekolah',
          key: '6',
          linkTo: '/cms/ujian/sekolah',
        },
      ],
    },
    {
      label: 'Management User',
      key: 'sub2',
      icon: <AppstoreOutlined />,
      linkTo: '/management',
      children: [
        {
          label: 'Admin',
          key: '9',
          linkTo: '/management/admin',
        },
        {
          label: 'Tentor',
          key: '10',
          linkTo: '/management/tentor',
        },
        {
          label: 'Siswa',
          key: '11',
          linkTo: '/management/siswa',
        },
      ],
    },
  ];

  return (
    <div style={{ width: '100%', marginTop: '60px', height: 'calc(100vh-60px)' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        style={{ marginBottom: '40px', color: 'white' }}
      >
        {items.map((item) =>
          item.children ? (
            <SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((child) => (
                <Menu.Item key={child.key}>
                  <Link to={child.linkTo}>{child.label}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.linkTo}>{item.label}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </div>
  );
};

export default Sidebar;




