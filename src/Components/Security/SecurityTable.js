import React from 'react';
import {Table, Col, Row, Button} from 'reactstrap';
import Fontawesome from 'react-fontawesome';
import AlertAjax from '../General/Alert.js'


class SecurityTable extends React.Component{
    constructor(props){
        super(props);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
       
    }
    
    forceUpdateHandler(){
      this.forceUpdate();
      
    };
   
    render(){
      
      if( this.props.Result.Data === "" ||this.props.Result.Data === null || this.props.Result.Data ===undefined){
        return <div></div>
      }
      console.log(this.props);
      let Data = JSON.parse(this.props.Result.Data);
      let messageAlert =this.props.Result.messageChild;
      let colorAlert =this.props.Result.colorChild;

      let propiedades ={
        username:Data.UserName,
        name: Data.DisplayName,
        lock: Data.IsAccountLocked ? "Yes": "No",
        iconname: Data.IsAccountLocked ? "lock": "unlock",
        message:messageAlert,
        color:colorAlert
      }
      if(!Data.IsAccountLocked){
            return(
              <div>
                 <Row><AlertAjax message={propiedades.message} color={propiedades.color}/></Row>
                 <Row>
                    <Col sm={8}>
                      <div  className={"text-left"}>
                        <label  scope="row"><b>User Name:</b></label>
                        <p  scope="row">{propiedades.username}</p>
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
                      <label scope="row"><b>User Name:</b></label>
                      <p  scope="row">{propiedades.username}</p>
                      <label><b>Name:</b></label>
                      <p>{propiedades.name}</p>
                      <label><b>Locked:</b></label>
                      <p>{propiedades.lock}</p>
                      <label><b>Status:</b></label>
                      <p><Button style={{marginTop:"-12px",border:"none"}} onClick={()=> {this.UnlockAction(propiedades.username)}}><Fontawesome name={propiedades.iconname}size='2x'/></Button></p>
                    </div>
                  </Col>
                </Row>
             </div>
           )
        }    
        
        }
        
        UnlockAction(UserName){
          fetch('/Security/UnlockingAccount.aspx/UnlockingUser', {
            method:'POST',
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },//make sure to serialize your JSON body
            body: JSON.stringify({ username: UserName })
            })
            .then(res => res.json())
            .then((result)=>{
               this.setState({isLoaded : true })
              if(result.d.HasError){
                return;
              }
              else{
                this.props.Result.UnlockSuccess(false);
                this.forceUpdateHandler();
              }
            },
            (error)=>{
              this.setState({
              })
            })
      }
      
}
export default SecurityTable
