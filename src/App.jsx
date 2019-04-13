import React from 'react';
import { BrowserRouter as Router, Route, NavLink as RouterNavLink, Switch } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [isOpen, updateIsOpen] = React.useState(false);
  const toggle = () => updateIsOpen(prev => !prev);

  return (
    <Router>
      <Navbar dark expand="md" style={{ backgroundColor: '#e66501' }}>
        <NavbarBrand href="/">ApartmentFinding</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mnishiguchi/af-frontend">Repo</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>

      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </Router>
  );
};

export default App;
