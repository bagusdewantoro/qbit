import { Link, Outlet } from 'react-router-dom';

const Main = ({ login, handleLogout }) => {
  return (
    <div>
      <h1>My Pages</h1>
      <nav>
        <Link to='/'><button>Home</button></Link> | {' '}
        <Link to='/about'><button>About</button></Link> | {' '}
        <Link to='/posting'><button>Posting</button></Link> | {' '}
        {
          !login ? (
            <Link to='/login'><button>Login</button></Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )
        }


      </nav>
      <Outlet />
    </div>
  );
}

export default Main;
