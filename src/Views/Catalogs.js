import React from 'react';
import {Nav, NavItem,Container,Row,Col, Button, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Css/sidebar.css';
import BenefitsForm from '../Components/Catalogs/Benefits';
import ExchangeRateForm from '../Components/Catalogs/ExchangeRate';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import Fontawesome from 'react-fontawesome';
import Home from './Home.js';
import HeaderNav from '../Components/General/Header.js';


const routes =[
{
  path:"/configurations/",
  exact:true,
  sidebar:() => <div></div>,
  main: () => <div><BenefitsForm /></div>
},
{
  path:"/Benefits",
  sidebar:() => <div></div>,
  main: () => <div><BenefitsForm /></div>
},
{
  path:"/ExchangeRate",
  sidebar: () => <div></div>,
  main: () => <div><ExchangeRateForm /></div>
}
];

class PriceList extends React.Component {
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
      <HeaderNav/>
      <Link to='/Home'><Button className='home' onClick={()=>{this.toggle('0')}}><Fontawesome name='cog' /> Home</Button></Link>
        <Row>
          <Col role="sidebar" tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
            <Nav pills vertical>
              <NavItem>
                <NavLink tag={Link} to="/Benefits" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Benefits</NavLink>
                <NavLink tag={Link} to="/ExchangeRate" className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Exchange Rate Config</NavLink>
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



export default PriceList;
