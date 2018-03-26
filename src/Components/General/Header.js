import React from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import '../../Css/Header.css';
import SaM from '../../Img/Logo-SAM.png';

class HeaderNav extends React.Component {
    render() {
      return (
        <div>
          <Navbar color="faded" light id='navbar-settings'>
            <NavbarBrand href="/" className="mr-auto"><img src={SaM}/></NavbarBrand>
                <h3 className="mr-auto , title-nav">System Settings</h3>
          </Navbar>
        </div>
      );
    }
  }
  export default HeaderNav;