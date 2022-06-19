import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact'

import Navbar from './components/layouts/Navbar'
import Container from './components/layouts/Container'
import Footer from './components/layouts/Footer'

// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
export default function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}
