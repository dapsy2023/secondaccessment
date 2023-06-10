import React, { Component } from "react";
import Person from "./UserInfo";
class App extends Component {
  state = {
    info: [
      { FirstName: "Oladapo", LastName: "Showemimo", EmailAddress: "dapsonshow2001@yahoo.com", PhoneNumber: "08023897161"},
      { FirstName: "Segun ", LastName: "peju", EmailAddress: "peju@yahoo.com", PhoneNumber: "08023812542"},
      { FirstName: "dav", LastName: "ghana", EmailAddress: "ghashow2001@yahoo.com", PhoneNumber: "0802382145"},
      { FirstName: "Oladapo", LastName: "Showemimo", EmailAddress: "dapsonshow2001@yahoo.com", PhoneNumber: "08023897161"},
      { FirstName: "Oladapo", LastName: "Showemimo", EmailAddress: "dapsonshow2001@yahoo.com", PhoneNumber: "08023897161"}
      
    ],
  
  };


  render() {
    return (
      
       
        <div className="App">
        <info
          Fname={this.state.info[0].FirstName}
          Lname={this.state.info[0].LastName}
          Email={this.state.info[0].EmailAddress}
          Phone={this.state.info[0].PhoneNumber}
          
        />
        
      </div>
        
    
    );
  }
}
export default App;

  
  