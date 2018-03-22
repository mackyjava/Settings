import React from 'react';
import {Nav, NavItem, NavLink,Container,Row,Col, Button} from 'reactstrap';
import '../Css/sidebar.css';
import SalesRoleForm from '../Components/Commissions/SalesRole';
import SalesUserConfig from '../Components/Commissions/SalesUserConfig';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import Fontawesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const routes =[
{
  path:"/commissions/",
  exact:true,
  sidebar:() => <div></div>,
  main: () => <div><SalesRoleForm/></div>
},
{
  path:"/SalesRole",
  sidebar:() => <div></div>,
  main: () => <div><SalesRoleForm/></div>
},
{
  path:"/SalesUserConfig",
  sidebar: () => <div></div>,
  main: () => <div><SalesUserConfig/></div>
}
];
class Commissions extends React.Component {
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
      <Link to ='/Home'><Button  onClick={()=>{this.toggle('0')}}><Fontawesome name='home'/> Home</Button></Link>
        <Row>
          <Col tag="nav" sm={3} md={2} className="d-none d-sm-block bg-light sidebar">
            <Nav pills vertical>
              <NavItem>
                <NavLink  className={classnames({ active: this.state.activeTab === '1' })} tag={Link} to="/SalesRole" onClick={() => { this.toggle('1'); }}>Sales Role</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className={classnames({ active: this.state.activeTab === '2' })} tag={Link}  to="/SalesUserConfig" onClick={() => { this.toggle('2'); }}>Sales User Config</NavLink>
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

export default Commissions;
