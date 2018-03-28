import React from 'react';
import '../../Css/sidebar.css';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import {Link} from 'react-router-dom';

const BenefitForm = (props) => {
  return (
    <Row>
    <Col sm={2}/>
    <Col sm={3}>
    <Form>
        <FormGroup >
          <Label for="ActiveUsername">Active Directory Username</Label>
          <Input type="text" name="ActiveUsername" id="ActiveUsername" />
        </FormGroup>
        <FormGroup>
          <Label for="firstname">Name</Label>
          <Input type="text" name="firstname" id="firstname" />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Lastname</Label>
          <Input type="text" name="lastname" id="lastname" />
        </FormGroup>
        <FormGroup>
          <Label for="usermail">Email</Label>
          <Input type="email" name="usermail" id="usermail" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Allow access to SaM
          </Label>
        </FormGroup>
        <Button>Save</Button>       <Link to='/Security/Users' ><Button>Cancel</Button></Link>
      </Form>
      </Col>
    </Row>
  );
};
export default BenefitForm;  
