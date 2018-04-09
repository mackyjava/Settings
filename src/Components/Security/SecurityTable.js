import React from 'react';
import {Col, Row, Button} from 'reactstrap';
import Fontawesome from 'react-fontawesome';
import {connect} from 'react-redux';
import AlertAjax from '../General/Alert.js';
import {fetchRequestUnlock} from '../../libs/actions/actionUnlock';


class SecurityTable extends React.Component{
    render(){
      const {dispatch} = this.props;

     if( Object.keys(this.props.result).length === 0|| this.props.result === undefined || this.props.result === null){
        return <div></div>
      }
     if(this.props.result.data.HasError || this.props.result.data ===''){
        return <div/>
      }
    
      let Data = JSON.parse(this.props.result.data);
     

      let propiedades ={
        username:Data.UserName,
        name: Data.DisplayName,
        lock: Data.IsAccountLocked ? "Yes": "No",
        iconname: Data.IsAccountLocked ? "lock": "unlock",
      }
      if(!Data.IsAccountLocked){
            return(
              <div>
                 <Row>
                    <Col sm={8}>
                      <div  className={"text-left"}>
                        <label ><b>User Name:</b></label>
                        <p >{propiedades.username}</p>
                        <label ><b>Name:</b></label>
                        <p>{propiedades.name}</p>
                        <label ><b>Locked:</b></label>
                        <p>{propiedades.lock}</p>
                        <label><b>Status:</b></label>
                        <p><Fontawesome name={propiedades.iconname}size='2x' style={{color:"#6D6D6D"}}/></p>
                      </div>
                    </Col>
                  </Row>
                </div>
                )
              }
        if(Data.IsAccountLocked){
          return(
            <div>
                <Row>
                  <Col sm={8}>
                    <div  className={"text-left"}>
                      <label ><b>User Name:</b></label>
                      <p >{propiedades.username}</p>
                      <label><b>Name:</b></label>
                      <p>{propiedades.name}</p>
                      <label><b>Locked:</b></label>
                      <p>{propiedades.lock}</p>
                      <label><b>Status:</b></label>
                      <p><Button style={{border:"none", backgroundColor:"white", color:"black"}} onClick={()=> {this.UnlockAction(propiedades.username)}}><Fontawesome name={propiedades.iconname}size='2x'/></Button></p>
                    </div>
                  </Col>
                </Row>
             </div>
           )
        }    
        
        }
        
        UnlockAction(username){
         this.props.dispatch(fetchRequestUnlock(username))
      }
      
}
export default connect()(SecurityTable)
