const NavBar = () => {
  return (
    <nav className="navbar flex-row">
      <div className="logo">{/* <a href="#home">GiAbo</a> */}</div>
      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
