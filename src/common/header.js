import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { Link, withRouter } from 'react-router';

import l20n, { Entity } from '@sketchpixy/rubix/lib/L20n';

import {
  Label,
  SidebarBtn,
  Dispatcher,
  NavDropdown,
  NavDropdownHover,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Badge,
  Button,
  Icon,
  Grid,
  Row,
  Radio,
  Col } from '@sketchpixy/rubix';

class Brand extends React.Component {
  render() {
    return (
      <Navbar.Header {...this.props}>
        <Navbar.Brand tabIndex='-1'>
          <a href='#'>
            MLS Data Tools
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}

class HeaderNavigation extends React.Component {
  render() {
    let { props } = this;
    let { auth: { isLoggedIn }, signOut } = props;
    return (
      <Nav pullRight>
        <Nav>
          { isLoggedIn ?  
            <NavItem className='logout' href="#" onClick={(e) => {
              e.preventDefault();
              document.getElementById('container').classList.remove('container-open');
              document.getElementById('container').classList.remove('logged-in');
              signOut();
            }}>
              <Icon bundle={`fontello`} glyph={`off-1`} />
            </NavItem> :
            <NavItem className='logout' href='#'>
              <Icon glyph='glyphicon-lock' />
            </NavItem> }
        </Nav>
      </Nav>
    );
  }
}

export default class Header extends React.Component {
  render() {
    let { props } = this;
    let { auth: { isLoggedIn } } = props; 
    return (
      <Grid id='navbar'>
        <Row>
          <Col xs={12}>
            <Navbar fixedTop fluid id='rubix-nav-header'>
              <Row>
                <Col xs={3} visible='xs'>
                 { isLoggedIn ?  <SidebarBtn /> : null }
                </Col>
                <Col xs={6} sm={4}>
                  <Brand />
                </Col>
                <Col xs={3} sm={8} collapseRight className='text-right'>
                  <HeaderNavigation {...props} />
                </Col>
              </Row>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}
