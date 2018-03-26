import React from 'react';
import {Nav, NavItem,Container,Row,Col, Button, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Css/sidebar.css';
import GeneralForm from '../Components/PriceList/General';
import AccessForm from '../Components/PriceList/Access';
import BenefitsForm from '../Components/PriceList/Benefit';
import InvcentoriesForm from '../Components/PriceList/Inventories';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import Fontawesome from 'react-fontawesome';
import Home from './Home.js';
import HeaderNav from '../Components/General/Header.js';

const routes =[
{
  path:"/priceList",
  exact:true,
  sidebar:() => <div></div>,
  main: () => <div><GeneralForm /></div>
},
{
  path:"/General",
  sidebar:() => <div></div>,
  main: () => <div><GeneralForm /></div>
},
{
  path:"/Access",
  sidebar: () => <div></div>,
  main: () => <div><AccessForm /></div>
},
{
  path:"/Benefit",
  sidebar: () => <div></div>,
  main: () => <div><BenefitsForm /></div>
},
{
  path:"/Inventories",
  sidebar: () => <div></div>,
  main: () => <div><InvcentoriesForm /></div>
}
];


class PriceList extends React.Component {
  constructor(props) {
      super(props);
      const { location } = this.props;
      console.log( this.props);
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
      <Link to='/Home'><Button className='home' onClick={()=>{this.toggle('0')}}><Fontawesome name='cog'/> Home</Button></Link>
        <Row>
          <Col role="sidebar" tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
            <Nav pills vertical>
              <NavItem>
                <NavLink tag={Link} to="/General" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>General</NavLink>
                <NavLink tag={Link} to="/Access" className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Access</NavLink>
                <NavLink tag={Link} to="/Benefit" className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Benefit</NavLink>
                <NavLink tag={Link} to="/Inventories" className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>Inventories</NavLink>
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
