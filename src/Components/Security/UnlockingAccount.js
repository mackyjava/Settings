import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
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

const result = {
  Data: JSON.stringify({
    IsAccountLocked: true,
    DaysToPasswordExpiration: 0,
    ID: 4096,
    UserName: 'beekip',
    DisplayName: 'Pacheco Isabel',
    EMail: 'isabelp@beek.com.mx',
    FirstName: null,
    LastName: null,
    IsOperationallyOnLine: true,
    CurrentClubPrivileges: [],
    UserClubs: [],
    IsAdmin: false,
    Token: null,
    ShowChangePassword: false,
    CanPostponeChangePassword: false,
    HasError: false,
    HasWarning: false
    }),
  HasError: false,
  IsLogOutRequired: false,
  Message: null
};
const resultUnlock = {
  Data: '',
  HasError: false,
  IsLogOutRequired: false,
  Message: null
};


class UnlockingAcount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', UnlockSuccess: this.UnlockSuccess, Data: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Container fluid>
        <Row/>
        <h4>Unlocking Acount</h4>
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
              <Button type='submit' >Search User</Button>
            </Col>
          </FormGroup>
        </Form>
        <br/>
        <fieldset
          style={{
          border: "solid grey 2px",
          height: "200px"
        }}>
          <legend style={{
            width: "10%"
          }}>User Status</legend>
              <SecurityTable Result = {this.state}/>
        </fieldset>

      </Container>
    );
  }

  UnlockAccount() {
    fetch("/Security/UnlockingAccount.aspx/UnlockingUser", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, //make sure to serialize your JSON body
        body: JSON.stringify({username: this.state.username})
      })
      .then(res => res.json())
      .then((response) => {
        this.setState({isLoaded: true});
        this.setProps({resultUnlock: resultUnlock});
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
  }

  SearchUser(){
    
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.username.length) {
      return;
    }

    console.log(this.state.username);
    console.log('constante declarada' + JSON.stringify(result));
    this.state.Data = result.Data;
    fetch("/Security/UnlockingAccount.aspx/SearchUserByNameUser", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, //make sure to serialize your JSON body
        body: JSON.stringify({username: this.state.username})
      })
      .then(res => res.json())
      .then((response) => {
        this.setState({isLoaded: true, Data: result.Data});
        if(this.state.result.HasError){
          return;
        }
        console.log(JSON.stringify('This.State.Result: '+ JSON.stringify(this.state.result)));
      }, (error) => {
        this.setState({isLoaded: true, error});
      })
    
    this.setState(prevState => ({
      username: ''
    }));    
  }

  UnlockSuccess(isBlocked){
    console.log(isBlocked);
      let data = JSON.parse(this.Data);
      data.IsAccountLocked = isBlocked;
      this.Data = JSON.stringify(data);
    }

}
export default UnlockingAcount