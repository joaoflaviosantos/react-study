import './App.css'
import { useState } from 'react'
import YourName from './components/YourName'
import Welcome from './components/Welcome'

function App() {
    const [name, setName] = useState('')

    return (
        <div className="App">
            <h1>State Lift</h1>
            <YourName setName={setName} />
            <Welcome name={name} />
        </div>
    )
}

export default App
