import React from 'react';
import { Card, Row, Col, Container } from 'reactstrap';
import ButtonConfigurations from './butons.js';
import Fontawesome from 'react-fontawesome';
import ReactDOM from 'react-dom';
import PriceList from '../../Views/PriceList.js';
import Commissions from '../../Views/Commissions.js';
import SaM from '../../Img/Logo-SAM.png'
import Catalogs from '../../Views/Catalogs.js';
import {Link} from 'react-router-dom';
import System from '../../Views/System.js';
import Security from '../../Views/Security';
import HeaderNav from '../General/Header.js';

class Elements extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }

  toggle(tab) {
    if(tab === '1'){
      ReactDOM.render(<Catalogs />, document.getElementById('root'));
    }
    if(tab === '2'){
      ReactDOM.render(<PriceList />, document.getElementById('root'));
    }
    if(tab === '3'){
        ReactDOM.render(<Commissions />, document.getElementById('root'));
    }
    if(tab === '4'){
        ReactDOM.render(<System/>, document.getElementById('root'));
    }
    if(tab === '5'){
        ReactDOM.render(<Security />, document.getElementById('root'));
    }
  }

  render(){
    return (
     <Container fluid>
       <HeaderNav/>
      <Row style={{ marginTop: '5rem' }}>
    {/* <Col lg="3"></Col>
        <Col lg="2">
        <Link to="/configurations/">
          <Card body onClick={() => { this.toggle('1'); }} className="text-center">
          <Fontawesome name='book' style={{fontSize: "100px"}}/>
              <ButtonConfigurations name={"Configurations"}/>
          </Card>
          </Link>
        </Col>
        <Col lg="2">
        <Link to='/priceList/'>
          <Card body onClick={() => { this.toggle('2'); }} className="text-center">
            <Fontawesome name='certificate' style={{fontSize: "100px"}}/>
              <ButtonConfigurations name={"Price List"}/>
          </Card>
          </Link>
        </Col>
        <Col lg="2">
        <Link to='/commissions/'>
          <Card body onClick={() => { this.toggle('3'); }} className="text-center">
            <Fontawesome name='usd' style={{fontSize: "100px"}}/>
              <ButtonConfigurations name={"Commissions"}/>
          </Card>
        </Link>
        </Col>
      </Row>
      <Row style={{ marginTop: '3rem' }}>
      <Col lg='4' md='3' sm='1' xs='1'></Col>
        <Col lg={2} md={2} sm={3} xs={3}>
        <Link to ='/system/'>
          <Card body onClick={() => { this.toggle('4'); }} className="text-center">
             <img src={SaM} alt="card cap" id='sam-icon'/>
             <p id="p_wrap"></p>
              <ButtonConfigurations name={"System"}/>
          </Card>
          </Link>
    </Col>*/}
        <Col lg={2} md={2} sm={4} xs={3}>
        <Link to='/security/'>
          <Card body onClick={() => { this.toggle('5'); }} className="text-center">
          <Fontawesome name='user-secret' style={{fontSize: "100px"}}/>
              <ButtonConfigurations name={"Security"}/>
          </Card>
         </Link>
        </Col>
      </Row>
 </Container>
    );
  }
}
export default Elements;
