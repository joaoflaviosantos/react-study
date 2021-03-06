import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Company from './pages/Company'
import Projects from './pages/Projects'
import NewProject from './pages/NewProject'
import Contact from './pages/Contact'

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

                <Content
                    style={{
                        padding: '10px 50px 50px 50px',
                        minHeight: 'calc(100vh - 70px)',
                    }}
                >
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/newproject" element={<NewProject />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Content>

                {
                    // https://thewebdev.info/2021/10/03/how-to-keep-the-page-footer-at-the-bottom-of-the-page-with-react/
                }
                <Footer
                    style={{
                        textAlign: 'center',
                        position: 'fixed',
                        left: 0,
                        bottom: 0,
                        right: 0,
                        backgroundColor: '#001529',
                        color: '#fff',
                    }}
                >
                    <span>Costs</span> &copy; 2022
                </Footer>
            </Layout>
        </Router>
    )
}
