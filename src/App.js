import React, { Component } from 'react';
import Footer from './footer.js';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { 
    
      }
    this.apiCall = this.apiCall.bind(this)
    }
    apiCall(){

    }
  render() {
    return (
      <div className="App">
    <Footer/>
      </div>
    );
  }
}

export default App;
