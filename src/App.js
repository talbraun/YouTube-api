import React, { Component } from 'react';
import './App.css';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import axios from 'axios'

const KEY='AIzaSyBsZldQd3_7ho8O7LxjnURYD2cwL55V0sU';

class App extends Component {

state={
  searcKey:'oasisn',
  songs:""
}


  getData(){
// Optionally the request above could also be done as
axios.get('https://www.googleapis.com/youtube/v3/search', {
  params: {
    q:this.state.searcKey,
    part:'snippet',
    key:KEY
   
    
  }
})
.then((response) => {
  console.log(response);

  this.setState({songs:response.data.items})

})
.catch(function (error) {
  console.log(error);
});
  }

  componentDidMount(){
    this.getData();

  }

  newSearch = (value) =>{
this.setState({searcKey:value},() =>{this.getData()}) 

}




  render() {

  


    return (
      <div className="App">
        <Header/>     
        <Main songs={this.state.songs}
        search={this.newSearch}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
