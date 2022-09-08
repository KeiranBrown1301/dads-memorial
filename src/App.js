import './App.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>John Brown</h1>
          <p>'Alive and Well'</p>
          <h3>25.01.1951 - 08.08.2022</h3>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
