import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import credentials from '../credentials';

const Login = ({ login, setLogin }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = e => {
    setUsername(e.target.value);
  }

  const handlePassword = e => {
    setPassword(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if ((username === credentials.username) && (password === credentials.password)) {
      localStorage.setItem('auth-token', credentials.token);
      setLogin(!login)
      navigate(-1);
    } else {
      alert('Please input correct email & password')
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={handleUsername}
        />
        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={handlePassword}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
