import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Label, FormGroup, Button} from 'reactstrap';

class UnlockingAcount extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <Container fluid>
      <Row/>
      <h4>Unlocking Acount</h4>
      <br/>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={1}>User:</Label>
          <Col sm={2}>
            <Input type="text" name="userName" id="UserName" placeholder="Please type a Username" />
          </Col>
          <Col sm={2}>
          <Button onClick="">Search User</Button>
          </Col>
        </FormGroup>
      </Form>
      <br/>
      <fieldset style={{border: "solid grey 2px", height: "200px"}}>
        <legend style={{width:"10%"}}>User Status</legend>
      </fieldset>
      </Container>
    );
  }
  
}
export default UnlockingAcount