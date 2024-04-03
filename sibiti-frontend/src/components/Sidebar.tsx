import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  linkTo?: string,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label: linkTo ? <Link to={linkTo}>{label}</Link> : label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />, '/dashboard'),
  getItem('Ujian', 'sub1', <MailOutlined />, '/ujian', [
    getItem('Event', '5', undefined, '/ujian/event'),
    getItem('Sekolah', '6', undefined, '/ujian/sekolah'),
  ]),

  getItem('Management User', 'sub2', <AppstoreOutlined />, '/management', [
    getItem('Admin', '9', undefined, '/management/admin'),
    getItem('Tentor', '10', undefined, '/management/tentor'),
    getItem('Siswa', '11', undefined, '/management/siswa'),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: '100%', marginTop: '60px', height: 'calc(100vh-60px)' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{ marginBottom: '40px', color: 'white' }}
      />
    </div>
  );
};

export default App;



