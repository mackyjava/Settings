import React from "react";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button
} from 'reactstrap';
import SecurityTable from './SecurityTable.js';
import AlertAjax from '../General/Alert.js';
import {connect} from 'react-redux';
import {fetchRequestSearch,emptyData} from '../../libs/actions/actionUnlock';
import store from '../../libs/store';




class UnlockingAcount extends React.Component {
  
   componentDidMount(){
     const {dispatch, data} = this.props;
     if(store.getState().router !== '/Security/'){
      dispatch( emptyData())
    }
     
   }
   componentWillReceiveProps(nextProps){
     if(nextProps.username !== this.props.username){
       const{dispatch, username} = nextProps;
       
     }

   }
   handleSubmit= username =>{
    const {dispatch, data} = this.props;
      if (!username) {
           return;
         }
    this.props.dispatch(fetchRequestSearch(username))                                                           
  }

  render() {
    const {data, username}= this.props;
   let input
   
    return (
      <Container fluid>
        <Row/>
        <h4>Unlock Acount</h4>
        <br/>
        <Form  onSubmit={e => {
          e.preventDefault();
          this.handleSubmit(input.value);
          input.value = '';
        }}>
          <FormGroup row>
            <Label for="UserName" sm={1}>User:</Label>
            <Col sm={2}>
              <input
                type="text"
                name="userName"
                id="UserName"
                placeholder="Please type a Username" ref={node => (input = node)} className={'form-group, form-control'}/>
            </Col>
            <Col sm={2}>
              <Button color="secondary" type='submit'>Search User</Button>
            </Col>
          </FormGroup>
        </Form>
        <br/>
              <AlertAjax result={this.props.unlockAcount} />
              <SecurityTable result={this.props.unlockAcount}/>
      </Container>
    );
  }

}
const mapStateToprops= state =>{
  const data= state
  
  return data;
 
}


export default connect(mapStateToprops)(UnlockingAcount)