import "./Layout.css";

import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => (
  <div className="layout">
    <Navbar />
    <main className="layout-content">
      <h2>Welcome to Sneakers Store!</h2>
      <p>This is the main content area.</p>
    </main>
  </div>
);

export default Layout;
