import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'João Flávio'

  const nameUpercase =  name.toUpperCase()

  function sumFunction(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>My First React App</p>
      <p>Author: { name } | { nameUpercase }</p>
      <p>Sum: { 2 + 2 } | { sumFunction(2, 2) }</p>
      <img src={url} alt="placeholder" />
      <div>
        <HelloWorld />
      </div>
    </div>
  );
}

export default App;
