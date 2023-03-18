import React, { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { WithRouterProps } from './withRouter';
import { withRouter } from './withRouter';

interface HeaderProps extends WithRouterProps {
  children?: React.ReactNode;
}

interface HeaderState {
  currentPage: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    currentPage: '',
  };

  componentDidMount() {
    const { location } = this.props;
    const path = location.pathname;
    switch (path) {
      case '/':
        this.setState(() => ({ currentPage: 'MAIN PAGE' }));
        break;
      case '/about-us':
        this.setState(() => ({ currentPage: 'ABOUT-US PAGE' }));
        break;
      default:
        this.setState({ currentPage: 'PAGE NOT FOUND' });
        break;
    }
    console.log('DID MOUNT');
  }

  handleNavigate = (e: MouseEvent) => {
    const link = e.target as HTMLElement;
    const page = link.textContent;
    switch (page) {
      case 'Main':
        this.setState(() => ({ currentPage: 'MAIN PAGE' }));
        break;
      case 'About':
        this.setState(() => ({ currentPage: 'ABOUT-US PAGE' }));
        break;
    }
  };

  render() {
    return (
      <header>
        <h1 className="current-page">{this.state.currentPage}</h1>
        <NavLink to="/" onClick={(e) => this.handleNavigate(e)}>
          Main
        </NavLink>
        <NavLink to="/about-us" onClick={(e) => this.handleNavigate(e)}>
          About
        </NavLink>
      </header>
    );
  }
}

export default withRouter(Header);
