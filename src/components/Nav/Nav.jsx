import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <h1>DAYONE</h1>
      <div className="nav_tap">
        <a href="/">데이기록</a> &nbsp;
        <a href="/demoday">데모데이</a> &nbsp;
        <a href="/myrecord">나의기록</a>
      </div>
    </nav>
  );
};

export default Nav;
