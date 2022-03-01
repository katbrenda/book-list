import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Users App</h1>
      <nav
        style={{
          border:'2px solid green'
        }}
        >
          <Link to='/users'>Users</Link> - {' '}
          <Link to='/about'>About</Link> - {' '}
          <Link to='/new_user'>New User</Link>
        </nav>
        <p>Outlet component here</p>
        <Outlet />
    </div>
  );
}

export default App;