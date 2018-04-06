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
    
    if(Object.keys(this.props.result).length !== 0 && this.props.result !== undefined){
      console.log(this.props.message)
      return (
        <Alert color={'danger'} isOpen={this.state.visible} toggle={this.onDismiss}>
          {this.props.result.data.Message}
        </Alert>
       );
    }
    else {
      return <div/>
    }
  }
}

export default AlertAjax;