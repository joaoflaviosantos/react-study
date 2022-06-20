import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'

import styles from './App.module.css'

const { Header, Content, Footer } = Layout

// https://velog.io/@simplicityyy/AntD-Menu-children-Warning
const items = [
    {
        label: <Link to="/">Home</Link>,
        key: '1',
    },
    {
        label: <Link to="/projects">Projects</Link>,
        key: '2',
    },
    {
        label: <Link to="/company">Company</Link>,
        key: '3',
    },
    {
        label: <Link to="/contact">Contact</Link>,
        key: '4',
    },
]
export default function App() {
    return (
        <Router>
            <Layout className={styles.main_layout}>
                <Header>
                    <Link to="/">
                        <div className={styles.logo}></div>
                    </Link>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
                </Header>

                <Content style={{ padding: '0 50px' }}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/newproject" element={<NewProject />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    <span>Costs</span> &copy; 2022
                </Footer>
            </Layout>
        </Router>
    )
}
