import React from 'react';
import { Card, Row, Col, Container, Button } from 'reactstrap';
import ButtonConfigurations from './butons.js';
import Fontawesome from 'react-fontawesome';
import SaM from '../../Img/Logo-SAM.png'
import {Link} from 'react-router-dom';
import HeaderNav from '../General/Header.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import store from '../../libs/store'
import {push } from '../../libs/actions/actionsRouter';
import {PUSH, LOCATION_CHANGE} from '../../libs/constants/constantsRouter';

const Elements= props=> (

        <Container fluid>
          <HeaderNav/>
          <Row style={{ marginTop: '5rem' }}>
            <Col lg="3"></Col>
            <Col lg="2">
              <Link to="/Configurations/" onClick={()=>{changeLocation('/Configurations/')}}>
                <Card body className="text-center">
                  <Fontawesome name='book' style={{fontSize: "100px"}}/>
                  <ButtonConfigurations name={"Configurations"}/>
                </Card>
              </Link>
            </Col>
            <Col lg="2">
              <Link to='/PriceList/' onClick={()=>{changeLocation('/PriceList/')}}>
                <Card body className="text-center">
                  <Fontawesome name='certificate' style={{fontSize: "100px"}}/>
                  <ButtonConfigurations name={"Price List"}/>
                </Card>
              </Link>
            </Col>
            <Col lg="2">
              <Link to='/Commissions/' onClick={()=>{changeLocation('/Commissions/')}}>
                <Card body className="text-center">
                  <Fontawesome name='usd' style={{fontSize: "100px"}}/>
                  <ButtonConfigurations name={"Commissions"}/>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row style={{ marginTop: '3rem' }}>
            <Col lg='4' md='3' sm='1' xs='1'></Col>
            <Col lg={2} md={2} sm={3} xs={3}>
              <Link to ='/System/' onClick={()=>{changeLocation('/System/')}}>
                <Card body  className="text-center">
                  <img src={SaM} alt="card cap" id='sam-icon'/>
                  <p id="p_wrap"></p>
                  <ButtonConfigurations name={"System"}/>
                </Card>
              </Link>
    </Col>
            <Col lg={2} md={2} sm={4} xs={3}>
            <Link to='/Security/' onClick={()=>{changeLocation('/Security/')}}>
              <Card body  className="text-center">
                <Fontawesome name='user-secret' style={{fontSize: "100px"}}/>
                <ButtonConfigurations name={"Security"}/>
              </Card>
              </Link>
              
          </Col>
        </Row>
      </Container>
   
    );
  
  function  changeLocation(path){
   const action={
     type: LOCATION_CHANGE,
     payload:{pathname:path}
   }
  store.dispatch(action)
}
   
   
export default Elements
