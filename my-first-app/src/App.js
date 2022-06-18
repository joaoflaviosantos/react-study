import './App.css'
import ListArray from './components/list/ListArray'

function App() {
    const myItems = ['React', 'Vue', 'Angular']

    return (
        <div className="App">
            <h1>Arrays Rendering</h1>
            <ListArray items={myItems} />
            <ListArray items={[]} />
        </div>
    )
}

export default App
