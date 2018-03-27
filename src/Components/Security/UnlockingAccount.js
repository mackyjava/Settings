import React from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  Alert
} from 'reactstrap';
import SecurityTable from './SecurityTable.js';
import AlertAjax from '../General/Alert.js';


class UnlockingAcount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', UnlockSuccess: this.UnlockSuccess, Data: '', message:'', color:'', messageChild:'', colorChild:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Container fluid>
        <Row/>
        <h4>Unlock Acount</h4>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={1}>User:</Label>
            <Col sm={2}>
              <Input
                type="text"
                name="userName"
                id="UserName"
                placeholder="Please type a Username" onChange={this.handleChange} value={this.state.username}/>
            </Col>
            <Col sm={2}>
              <Button color="secondary" type='submit'>Search User</Button>
            </Col>
          </FormGroup>
        </Form>
        <br/>
              <AlertAjax message={this.state.message} color={this.state.color}/>
              <SecurityTable Result = {this.state}/>
      </Container>
    );
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.username.length) {
      return;
    }

    fetch("/Security/UnlockingAccount.aspx/SearchUserByNameUser", {
      method: "post",
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, //make sure to serialize your JSON body
        body: JSON.stringify({username: this.state.username})
      })
      .then(res => res.json())
      .then((response) => {
        if(response.d.HasError){
         this.setState({
           Data: '',
           message:response.d.Message,
           color: 'danger'
         })
        }
        this.setState({isLoaded: true, Data: response.d.Data,messageChild:'',colorChild:''});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
    
    this.setState(prevState => ({
      username: '',
      message:'',
      color: ''
    }));    
  }

  UnlockSuccess(isBlocked){
      let data = JSON.parse(this.Data);
      data.IsAccountLocked = isBlocked;
      this.Data = JSON.stringify(data);
      this.messageChild = 'The account was successfully unlocked';
      this.colorChild ="info";
    }

}
export default UnlockingAcount