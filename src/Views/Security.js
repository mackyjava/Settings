import React from 'react';
import {Nav, NavItem,Container,Row,Col, Button, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Css/sidebar.css';
import UnlockingAccountForm from '../Components/Security/UnlockingAccount';
import classnames from 'classnames';
import Fontawesome from 'react-fontawesome';
import HeaderNav from '../Components/General/Header.js';
import ModalGallery from '../Components/Security/SystemUsersRouter'


const routes =[
{
  path:"/Security/",
  exact: true,
  main: () =><div><UnlockingAccountForm /></div>
},
{
  path:"/Security/1",
  exact: true,
  main: () => <div><ModalGallery/></div>
}
];

class Security extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container fluid>
      <HeaderNav/>
      <Link to='/'><Button className='home' ><Fontawesome name='cog' /> Home</Button></Link>
        <Router>
          <Row>
            <Col role="sidebar" tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
              <Nav pills vertical>
                <NavItem>
                  <NavLink tag={Link} to="/Security/" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}> <Fontawesome name='unlock-alt'/>  Unlock Account</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/Security/1" className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}> <Fontawesome name='users'/>  System Users</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col id="main_Content" tag="main" sm={9} md={10} className="ml-sm-auto pt-3" role="main">
             {routes.map((route, index) => (
              <Route
               key={index}
               path={route.path}
               exact={route.exact}
               component={route.main}
              />
              ))}
            </Col>
          </Row>
        </Router>
    </Container>
    
    );
  }
}



export default Security;
