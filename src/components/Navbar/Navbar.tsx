import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">sneakers</div>

      <div className="navbar-links">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="navbar-actions">
        <button className="cart-icon">🛒</button>
        <div className="profile-avatar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
