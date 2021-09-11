import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home/Index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <SubMenu key="sub1" title="前端可视化">
                            <Menu.ItemGroup key="g1" title="three.js">
                                <Menu.Item key="1">
                                    <Link to="/threejs-basic">基础知识</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <div>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/threejs-basic">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </Layout>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
