import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'

import Container from './components/layouts/Container'

// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
export default function App() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/company">Company</Link>
                <Link to="/newproject">New Project</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <Container customClass="min-height">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Container>
            <p>Footer</p>
        </Router>
    )
}
