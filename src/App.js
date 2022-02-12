import Layout from './components/Layout'
import Lobby from './components/Lobby'
import Game from './components/Game';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Lobby />} />
            <Route path="lobby" element={<Lobby />} />
            <Route path="game/:gameId" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;