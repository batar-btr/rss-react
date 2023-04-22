import React, { MouseEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { WithRouterProps } from './withRouter';
import { withRouter } from './withRouter';

interface HeaderProps extends WithRouterProps {
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    const { location } = props;
    const path = location.pathname;
    switch (path) {
      case '/':
        setCurrentPage('MAIN PAGE');
        break;
      case '/about-us':
        setCurrentPage('ABOUT-US PAGE');
        break;
      case '/forms':
        setCurrentPage('FORMS PAGE');
        break;
      default:
        setCurrentPage('PAGE NOT FOUND');
        break;
    }
  }, [currentPage, props]);

  const handleNavigate = (e: MouseEvent) => {
    const link = e.target as HTMLElement;
    const page = link.textContent;
    console.log('NAVIGATE');
    switch (page) {
      case 'Main':
        setCurrentPage('MAIN PAGE');
        break;
      case 'About':
        setCurrentPage('ABOUT-US PAGE');
        break;
      case 'Forms':
        setCurrentPage('FORMS PAGE');
        break;
    }
  };

  return (
    <header>
      <h1 className="current-page">{currentPage}</h1>
      <NavLink to="/" onClick={(e) => handleNavigate(e)}>
        Main
      </NavLink>
      <NavLink to="/about-us" onClick={(e) => handleNavigate(e)}>
        About
      </NavLink>
      <NavLink to="/forms" onClick={(e) => handleNavigate(e)}>
        Forms
      </NavLink>
    </header>
  );
};

export default withRouter(Header);
