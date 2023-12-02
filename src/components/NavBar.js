const NavBar = () => {
  return (
    <nav className="flex-row">
      <div className="logo">
        <a href="#home">GiAbo</a>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
