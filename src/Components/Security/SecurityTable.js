import React from 'react';
import {Table, Col, Row, Button} from 'reactstrap';
import Fontawesome from 'react-fontawesome';

let thStyle ={
  border:"1px solid blacK",
  backgroundColor: "#dee2e6",
  height:"48px"
}

class SecurityTable extends React.Component{
    constructor(props){
        super(props);
   
   

        console.log(this.props.Result);

    }
    
    render(){
      if( this.props.Result.Data === ""){
        return <div/>
      }
      let Data = JSON.parse(this.props.Result.Data);
      
      let propiedades ={
        username:Data.UserName,
        name: Data.DisplayName,
        lock: Data.IsAccountLocked ? "Yes": "No",
        iconname: Data.IsAccountLocked ? "lock": "unlock",
      }
      if(!Data.IsAccountLocked){
            return(
                 <Row>
                   <Col sm={2}/>
                      <Col sm={8}>
                        <Table responsive>
                          <thead>
                            <tr style={thStyle} className={"text-center"}>
                              <th style={thStyle} scope="row">User Name</th>
                              <th style={thStyle}>Name</th>
                              <th style={thStyle}>Locked</th>
                              <th style={thStyle}>Unlock</th>
                            </tr>
                          </thead>
                        <tbody>
                          <tr style={{ border:"1px solid blacK"}} className={"text-center"}>
                            <td  scope="row">{propiedades.username}</td>
                            <td>{propiedades.name}</td>
                            <td>{propiedades.lock}</td>
                            <td><Fontawesome name={propiedades.iconname}size='2x'/></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                )
              }
        if(Data.IsAccountLocked){
          return(
            <Row>
              <Col sm={2}/>
                 <Col sm={8}>
                   <Table responsive>
                     <thead>
                       <tr style={thStyle} className={"text-center"}>
                         <th style={thStyle} scope="row">User Name</th>
                         <th style={thStyle}>Name</th>
                         <th style={thStyle}>Locked</th>
                         <th style={thStyle}>Unlock</th>
                       </tr>
                     </thead>
                   <tbody>
                     <tr style={{ border:"1px solid blacK"}} className={"text-center"}>
                       <td  scope="row">{propiedades.username}</td>
                       <td>{propiedades.name}</td>
                       <td>{propiedades.lock}</td>
                       <td><Button style={{marginTop:"-12px",border:"none"}}><Fontawesome name={propiedades.iconname}size='2x'/></Button></td>
                     </tr>
                   </tbody>
                 </Table>
               </Col>
             </Row>
           )
        }    
        
        }
}
export default SecurityTable
