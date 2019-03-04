import React, { Component } from 'react';
import './App.css';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import axios from 'axios'



class App extends Component {

state={
  searcKey:'oasisn'
}

  componentDidMount(){

// Optionally the request above could also be done as
axios.get('https://www.youtube.com/embed', {
  params: {
    listType: 'search',
    list: this.state.searcKey
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
  }



  render() {
    return (
      <div className="App">
        <Header/>     
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
