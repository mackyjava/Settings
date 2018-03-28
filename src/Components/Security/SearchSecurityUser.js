import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';

class SalesUserConfigForm extends React.Component {
  render() {
    return (
        <div>
          <br/>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="userName" className="mr-sm-2">Username</Label>
                <Input type="text" name="username" id="userName" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Name</Label>
                <Input type="text" name="name" id="name"  />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="lastName" className="mr-sm-2">Lastname</Label>
                <Input type="email" name="email" id="lastName" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="mail" className="mr-sm-2">Email</Label>
                <Input type="email" name='email' id="mail" placeholder="something@idk.co" />
              </FormGroup>
              <Button>Search User</Button>
                          <Link to='/Security/Users' ><Button>Cancel</Button></Link>
              </Form>
      </div>
    );
  }
}

export default SalesUserConfigForm
