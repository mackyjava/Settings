import React from 'react';
import { Alert } from 'reactstrap';

class AlertAjax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    
    if(this.props.message !=='' && this.props.message !== undefined){
      console.log(this.props.message)
      return (
        <Alert color={this.props.color} isOpen={this.state.visible} toggle={this.onDismiss}>
          {this.props.message}
        </Alert>
       );
    }
    else {
      return <div/>
    }
  }
}

export default AlertAjax;