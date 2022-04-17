import { Link, Outlet } from 'react-router-dom';

const Main = ({ login, handleLogout }) => {
  return (
    <div className='container'>
      <h1>My Pages</h1>
      <nav>
        <Link to='/'><button>Home</button></Link>  {' '}
        <Link to='/about'><button>About</button></Link>  {' '}
        <Link to='/posting'><button>Posting</button></Link>  {' '}
        {
          !login ? (
            <Link to='/login'><button>Login</button></Link>
          ) : (
            <button
              onClick={handleLogout}
              style={{ backgroundColor: '#f26a8d' }}
            >
              Logout
            </button>
          )
        }
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Main;
