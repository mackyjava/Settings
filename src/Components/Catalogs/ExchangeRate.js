import React from 'react';
import '../../Css/sidebar.css';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class ExchangeRateConfigForm extends React.Component {
  render() {
    return (
      <Form>
            <header className="App-header"></header>
        <FormGroup row>
          <Label for="txtPrintName" sm={2} md={3}>Print Name:</Label>
          <Col sm={10} md={9}>
            <Input type="text" name="printName" id="txtPrintName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="txtName" sm={2} md={3}>Name:</Label>
          <Col sm={10} md={9}>
            <Input type="text" name="txtname" id="txtName" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="txtDuration" sm={2} md={3}>Duration: </Label>
          <Col sm={10} md={9}>
            <Input type="number" name="duration" id="txtDuration" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="selectProgramType" sm={2} md = {3}>Program Type:</Label>
          <Col sm={10} md={9}>
            <Input type="select" name="programType" id="selectProgramType" >
            <option>--Select--</option>
            <option>Legendary</option>
            <option>Limited Edition</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="selectMembLevel" sm={2} md = {3}>Membership Level:</Label>
          <Col sm={10} md={9}>
            <Input type="select" name="membershipLevel" id="selectMembLevel" >
            <option>--Select--</option>
            <option>Exit</option>
            <option>Hall of Fame</option>
            <option>Regular</option>
            <option>VIP</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkboxMembershipType" sm={2} md={3} check>Allow Membership Type</Label>
          <Col sm={10} md={9}>
                <Input type="checkbox" id="checkboxMembershipType" style={{marginTop:"15px", marginLeft:"5px"}}/>{' '}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkboxMembershipAccess" sm={2} md={3} check>Allow Membership Access</Label>
          <Col sm={10} md={9}>
                <Input type="checkbox" id="checkboxMembershipAccess" style={{marginTop:"15px", marginLeft:"5px"}}/>{' '}
          </Col>
        </FormGroup>



        <FormGroup tag="fieldset" style={{border: "1px solid"}} row>
          <legend className="col-form-label col-sm-2">Amounts</legend>
          <Col sm={10} md={9}>
          <FormGroup row>
            <Label for="txtName" sm={2} md={3}>Price List:</Label>
            <Col sm={8} md={6}>
              <Input type="text" name="txtname" id="txtName" />
            </Col>
            <Label sm={2} md={3}>USD</Label>
          </FormGroup>
          <FormGroup row>
            <Label for="txtName" sm={2} md={3}>Admin Fee:</Label>
            <Col sm={8} md={6}>
              <Input type="text" name="txtname" id="txtName" />
            </Col>
            <Label sm={2} md={3}>USD</Label>
          </FormGroup>
          <FormGroup row>
            <Label for="txtName" sm={2} md={3}>Anual Fee:</Label>
            <Col sm={8} md={6}>
              <Input type="text" name="txtname" id="txtName" />
            </Col>
            <Label sm={2} md={3}>USD</Label>
          </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ExchangeRateConfigForm;
