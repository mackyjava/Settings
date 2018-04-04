import React from "react";
import Elements from '../Components/Home/IconsHome.js';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PriceList from './PriceList';
import Catalogs from './Catalogs';
import Commissions from './Commissions';
import Security from './Security';
import System from './System';


const HomeComponent= () => {
  return(
<div>
    <Elements/>
</div>
)
}
const CatalogsComponent= () => {
  return(
<div>
    <Catalogs/>
</div>
)
};
const PriceListComponent= () => {
  return(
<div>
    <PriceList/>
</div>
)
};
const CommissionsComponent= () => {
  return(
<div>
    <Commissions/>
</div>
)
};
const SecurityComponent= () => {
  return(
<div>
    <Security/>
</div>
)
};
const SystemComponent= () => {
  return(
<div>
    <System/>
</div>
)
};



class HomeSwicth extends React.Component{
  
  
  render(){
    
    return(
    <div>
     <Switch>
       <Route exact path ="//Settings/index.html" component = {HomeComponent}/>
       <Route exact path ="/" component = {HomeComponent}/>
       <Route path="/Configurations/" component = {CatalogsComponent}/>
       <Route path="/PriceList/" component = {PriceListComponent}/>
       <Route path="/Commissions/" component = {CommissionsComponent}/>
       <Route path="/System/" component = { SystemComponent}/>
       <Route path="/Security/" component = {SecurityComponent}/>
     </Switch>
    </div>
    );
  }
}



export default HomeSwicth;