import React from "react";
import Elements from '../Components/Home/IconsHome.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PriceList from './PriceList';
import Catalogs from './Catalogs';
import Commissions from './Commissions';
import Security from './Security';
import System from './System';

class HomeSwicth extends React.Component{
  previousLocation = this.props.location;


  render(){
    const{location} = this.props;
    return
    <div>
     <Switch>
       <Route exact path ="/" component = {Home}/>
       <Route path="/configurations/" component = {Catalogs}/>
       <Route path="/priceList/" component = {PriceList}/>
       <Route path="/commissions/" component = {Commissions}/>
       <Route path="/system/" component = {Security }/>
       <Route path="/security/" component = { System}/>
     </Switch>
    </div>
  }
}
const Home= () => {
  return(
<div>
  <Router>
    <Elements/>
  </Router>
</div>
)
};
export default Home
