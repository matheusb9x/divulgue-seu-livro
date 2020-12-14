import * as React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { EscritorHome } from './pages/escritor/home';
import { EscritorContato } from './pages/escritor/contato';
import { EditoraHome } from './pages/editora/home/home';
import { EditoraList } from './pages/editora/list/list';
import { EditoraRead } from './pages/editora/read/read';

const { Content, Footer, Sider } = Layout;

export const App = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light">
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Seu Perfil
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>
              Sair
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div> */}
            <Switch>
              <Route path="/escritor/home">
                <EscritorHome />
              </Route>
              <Route path="/escritor/contato">
                <EscritorContato />
              </Route>
              <Route path="/editora/home">
                <EditoraHome />
              </Route>
              <Route path="/editora/list">
                <EditoraList />
              </Route>
              <Route path="/editora/read">
                <EditoraRead />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Divulgue seu livro ©2020</Footer>
        </Layout>
      </Layout>
  </Router>
);