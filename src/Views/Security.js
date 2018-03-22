import React from 'react';
import {Nav, NavItem,Container,Row,Col, Button, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Css/sidebar.css';
import UnlockingAccountForm from '../Components/Security/UnlockingAccount';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import Fontawesome from 'react-fontawesome';
import Home from './Home.js';

const routes =[
{
  path:"/security/",
  exact:true,
  sidebar:() => <div></div>,
  main: () => <div><UnlockingAccountForm /></div>
},
{
  path:"/UnlockingAccount",
  exact:true,
  sidebar:() => <div></div>,
  main: () => <div><UnlockingAccountForm /></div>
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
    if(tab == 0){
      ReactDOM.render(<Home />, document.getElementById('root'));
    }
  }

  render() {
    return (
    <Router>
      <Container fluid>
      <Button  onClick={()=>{this.toggle('0')}}><Fontawesome name='home' /> Home</Button>
        <Row>
          <Col role="sidebar" tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
            <Nav pills vertical>
              <NavItem>
                <NavLink tag={Link} to="/UnlockingAccount" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Unlocking Account</NavLink>
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
      </Container>
       </Router>
    );
  }
}



export default Security;
