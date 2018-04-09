import React from 'react';
import { Alert } from 'reactstrap';
import {connect }from 'react-redux';
import {dismissAlert} from '../../libs/actions/actionUnlock';

class AlertAjax extends React.Component {
 
componentDidMount(){
    const {message, dispatch, visible} = this.props 
  }
componentWillReceiveProps(nextProps){
  if(nextProps.message !== this.props.message || nextProps.visible !== this.props.visible){
    const {dispatch, message, visible} = nextProps;
  }
}
  
onDismiss=()=> {
  const dispatch = this.props;
  this.props.dispatch(dismissAlert(false,this.props.result))
}

  render() {
    
    const{dispatch} = this.props

    if(Object.keys(this.props.result).length !== 0 && this.props.result !== undefined){
      let colorAlert = this.props.result.error ? "danger":"success";
        if(this.props.result.message !== '' && this.props.result.message !== null)
           return (
            <Alert color={colorAlert} isOpen={this.props.result.visible} toggle={this.onDismiss}>
              {this.props.result.message}
            </Alert>
          );
          return<div/>
        }
    else {
      return <div/>
    }
  }
}
const mapStateToProps = state => {
  const {message,visible}= state
  return {message, visible}
}

export default connect(mapStateToProps)(AlertAjax);