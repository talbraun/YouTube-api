import React, { Component } from 'react';
import './App.css';
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import axios from 'axios'

const KEY='AIzaSyBsZldQd3_7ho8O7LxjnURYD2cwL55V0sU';

class App extends Component {

state={
  searcKey:'oasis',
  songs:[],
  nowPlaying:'',
  sec:0
}




  getData(){
// Optionally the request above could also be done as
axios.get('https://www.googleapis.com/youtube/v3/search', {
  params: {
    q:this.state.searcKey,
    part:'snippet',
    key:KEY,
    maxResults:10,
    startSeconds:30   
    
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

playSong = (evt) =>{
  this.setState({nowPlaying:evt.target.id})


}

updadteSec = (evt) =>{
  this.setState({sec:evt.target.value})
}




  render() {

  
  


    return (
      <div className="App">
        <Header/>   
        <Main song={this.state.songs}
        search={this.newSearch}
        click={this.playSong}
        songId={this.state.nowPlaying}
        sec={this.updadteSec}
        ySec={this.state.sec}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
