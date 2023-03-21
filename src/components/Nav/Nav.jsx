import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <h1>DAYONE</h1>
      <div className="nav_tap">
        <Link to="/">데이기록</Link> &nbsp;
        <Link to="/demoday">데모데이</Link> &nbsp;
        <Link to="/myrecord">나의기록</Link> &nbsp;
      </div>
    </nav>
  );
};

export default Nav;
