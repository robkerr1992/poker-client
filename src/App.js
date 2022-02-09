import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api')
      .then((data) => data.json())
      .then((json) => setMessage(json.message))
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!message ? 'Loading...' : message}
        </p>
      </header>
      <Router>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
