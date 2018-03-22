import React from 'react';
import {Table, Col, Row} from 'reactstrap';
import Fontawesome from 'react-fontawesome';

let thStyle ={
  border:"1px solid blacK",
  backgroundColor: "#dee2e6",
  height:"48px"
}
class SecurityTable extends React.Component{
    constructor(props){
        super(props);
    
    }
    render(){
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
                  <td  scope="row">{this.props.UserName}</td>
                  <td>{this.props.Name}</td>
                  <td>{this.props.Locked}</td>
                  <td><Fontawesome name={this.props.Name} size='2x'/>
        </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          </Row>
        )
    }

}
export default SecurityTable