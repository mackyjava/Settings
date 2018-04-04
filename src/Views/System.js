import React from 'react';
import {Nav, NavItem,Container,Row,Col, Button, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Css/sidebar.css';
import ClearCacheForm from '../Components/System/ClearCache';
import classnames from 'classnames';
import Fontawesome from 'react-fontawesome';
import HeaderNav from '../Components/General/Header.js';
import store from '../libs/store';


const routes =[
{
  path:"/System",
  exact:true,
  sidebar:() => <div></div>,
  main: () => <div><ClearCacheForm /></div>
},
{
  path:"/ClearCache",
  sidebar:() => <div></div>,
  main: () => <div><ClearCacheForm /></div>
}
];

class System extends React.Component {
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
      <Link to='/'><Button className='home'><Fontawesome name='cog' /> Home</Button></Link>
      <Router>
        <Row>
          <Col role="sidebar" tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
            <Nav pills vertical>
              <NavItem>
                <NavLink tag={Link} to="/ClearCache" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Clear Cache</NavLink>
              </NavItem>
            </Nav>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
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

export default System;
