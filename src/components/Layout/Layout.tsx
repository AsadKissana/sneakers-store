import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">
    <Navbar />
    <main className="layout-content">{children}</main>
  </div>
);

export default Layout;
