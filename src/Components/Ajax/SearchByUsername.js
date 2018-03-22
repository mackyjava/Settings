import React, { Component } from 'react';

class SearchByUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/Security/UnlockingAccount.aspx/SearchUserByNameUser",{
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },//make sure to serialize your JSON body
  body: JSON.stringify({ username: 'beekip' })
})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result.d
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if(this.state.result.HasError === true){
        return (
          <ul>
            <li>{this.state.result.Message}</li>
          </ul>
        );
      }else {
        return (
          <ul>
            <li>{this.state.result.Data}</li>
            <li>LISTO</li>
          </ul>
        );
      }

    }
  }
}




export default SearchByUsername;
