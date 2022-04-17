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
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={handleUsername}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={handlePassword}
        />
        <button className='accent-button' type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
