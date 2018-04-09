import React from 'react';
import {Button, Form, FormGroup, Label} from 'reactstrap';
import {Link} from 'react-router-dom';

class SalesUserConfigForm extends React.Component {
  render() {
   
    let inputUserName
    let inputName
    let inputLastName
    let inputMail
    return (
        <div>
          <br/>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="userName" className="mr-sm-2">Username</Label>
                <input type="text" name="username" id="userName"ref={node => (inputUserName = node)} className={'form-group, form-control'} />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Name</Label>
                <input type="text" name="name" id="name" ref={node => (inputName = node)} className={'form-group, form-control'} />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="lastName" className="mr-sm-2">Lastname</Label>
                <input type="email" name="email" id="lastName" ref={node => (inputLastName = node)} className={'form-group, form-control'}/>
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="mail" className="mr-sm-2">Email</Label>
                <input type="email" name='email' id="mail" placeholder="something@idk.co" ref={node => (inputMail = node)} className={'form-group, form-control'} />
              </FormGroup>
              <Button onClick={()=>{this.searchUser(inputUserName.value,inputName.value,inputLastName.value,inputMail.value)}}>Search User</Button>
                          <Link to='/Security/Users' ><Button>Cancel</Button></Link>
              </Form>
      </div>
    );
   
  
  }
  searchUser=(username,name,lastname,email)=>{
    console.log(username,name,lastname,email);
  }
}


export default SalesUserConfigForm
