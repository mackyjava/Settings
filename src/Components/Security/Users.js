import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import Fontawesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class SystemUserForm extends React.Component{
    render(){
        return(
            <Container>
              <Row>
                <Col sm={3}>
                  <Link to='/Security/Search'> <Fontawesome name='search' style={{fontSize:"100px"}}/> </Link>
                  <Link to='/Security/Edit'> <Fontawesome name= 'user-plus'  style={{fontSize:"100px"}}/> </Link>
                </Col>
              </Row>
            </Container>
        )
    }
}
export default SystemUserForm;