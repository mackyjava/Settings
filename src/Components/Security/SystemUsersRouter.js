import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {Container, Col, Row} from 'reactstrap';
import Fontawesome from 'react-fontawesome';
import SalesUserConfigForm from '../Security/SearchSecurityUser';
import BenefitForm from '../Security/EditSecurityUser';

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on how you got there.
//
// Click the colors and see them full screen, then "visit the
// gallery" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

class ModalSwitch extends React.Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/img/2` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/img/2`.
 

  render() {
    return (
      <div>
        <Switch>
          <Redirect from='/Security/1' to='/Security/Users'/>
          <Route path="/Security/Users" component={HomeUser} />
          <Route path="/Security/SearchUser" component={Gallery} />
          <Route path="/Security/EditUser" component={ImageView} />
        </Switch>
      </div>
    );
  }
}
const HomeUser = () => (
    <Container>
    <Row>
      <Col sm={2}/>
      <Col sm={3}>
        <Link to='/Security/SearchUser'><Fontawesome name='search' style={{fontSize:"100px"}}/></Link>
      </Col>
      <Col sm={3}>
        <Link to='/Security/EditUser'> <Fontawesome name= 'user-plus'  style={{fontSize:"100px"}}/></Link>
      </Col>
    </Row>
  </Container>
);

const Gallery = () => (
  <div>
    < SalesUserConfigForm />
  </div>
);

const ImageView = () => (
    <div>
      <BenefitForm/>
    </div>
);


const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default ModalGallery;