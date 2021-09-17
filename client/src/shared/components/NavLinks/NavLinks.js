import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import classes from './NavLinks.module.css';

const NavLinks = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <ul className={classes.navbar}>
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      {authCtx.isLoggedIn && (
        <li>
          <NavLink to="/1/posts">My Posts</NavLink>
        </li>
      )}

      {authCtx.isLoggedIn && (
        <li>
          <NavLink to="/posts/new">New Post</NavLink>
        </li>
      )}

      {authCtx.isLoggedIn && (
        <li>
          <button onClick={authCtx.logout}>Logout</button>
        </li>
      )}

      {!authCtx.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
