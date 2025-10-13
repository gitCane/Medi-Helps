import React from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main className="layout-main">
          {children}
        </main>

      </div>
      <Footer />
    </>
  );
};

export default Layout;