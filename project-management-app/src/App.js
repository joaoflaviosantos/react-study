import {
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    DesktopOutlined,
    TeamOutlined,
} from '@ant-design/icons'
import './App.css'
import { Breadcrumb, Layout, Menu, Switch, Col, Row } from 'antd'
import { useState } from 'react'

import AntDesignFormExemple from './components/antd-exemples/AntDesignFormExemple'

const { Header, Content, Footer, Sider } = Layout

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    }
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '8'),
    ]),
    getItem('Files', '9', <FileOutlined />),
]

function App() {
    const [theme, setTheme] = useState('dark')
    const [collapsed, setCollapsed] = useState(false)

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light')
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                collapsible
                theme={theme}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="logo" />
                <Menu
                    theme={theme}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <Row justify="end" align="middle">
                        <Col span={1}>
                            <Switch
                                className="theme-switch"
                                checked={theme === 'dark'}
                                onChange={changeTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <AntDesignFormExemple />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default App
