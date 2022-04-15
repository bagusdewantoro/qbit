import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';

import Main from './pages/Main';
import Home from './pages/Home';
import About from './pages/About';
import Posting from './pages/Posting';
import Login from './pages/Login';

const App = () => {
  const [login, setLogin] = useState(localStorage.getItem('auth-token'))
  const handleLogout = () => {
    delete localStorage['auth-token'];
    setLogin(null)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main login={login} handleLogout={handleLogout} />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='posting' element={<Posting />} />
          <Route path='Login' element={<Login login={login} setLogin={setLogin} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
