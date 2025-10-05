import React, {Suspense} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './app.css';

export const App = () => {
  const HomePage = React.lazy(() => import('HomeApp/HomePage').then(module => ({ default: module.Home })));
  const ContactUrl = React.lazy(() => import('ContactApp/ContactPage').then(module => ({ default: module.Contact })));

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          </Route>
          <Route exact path="/contact">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactUrl />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}