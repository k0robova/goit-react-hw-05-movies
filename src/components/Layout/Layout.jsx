import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <header className={css.header_layout}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
