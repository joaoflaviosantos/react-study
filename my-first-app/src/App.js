import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Sentence from './components/Sentence';

function App() {

  return (
    <div className="App">
      <h1>Testing Global CSS</h1>
      <SayMyName name="João" />
      <SayMyName name="Matheus" />
      <People name="João Flávio Santos" age="28" occupation="Full Stack Developer" picture="https://avatars.githubusercontent.com/u/80658056?v=4" />
      <Sentence />
      <Sentence />
    </div>
  );
}

export default App;
