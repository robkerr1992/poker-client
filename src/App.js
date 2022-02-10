import logo from './logo.svg'
import './App.css'
import { useContext, useEffect, useState } from 'react'
import SocketContext, { socket, SocketProvider } from './context/socket'
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
            <Route path="/" element={<SocketProvider value={socket}><Home /></SocketProvider>} />
            <Route path="/about" element={<SocketProvider value={socket}><About /></SocketProvider>} />
            <Route path="/dashboard" element={<SocketProvider value={socket}><Dashboard /></SocketProvider>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  const socket = useContext(SocketContext)
  const [response, setResponse] = useState('')

  useEffect(() => {
    socket.on('FromAPI', (data) => setResponse(data))
    // socket.on('messageFromServer', (data) => setMessageFromServer(data))
    
    return () => socket.disconnect()
  }, [socket])

  return (
    <div>
      <h2>Home {!response ? 'nope' : response}</h2>
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
