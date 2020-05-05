import React, { Component } from 'react';
import './App.css';
import { Header, TopStats, CurrentNews, CountrySelect, Footer} from './Components';

class App extends Component {

  render() {
   
    return (
      <div className="Container" >
        <Header />
        <TopStats />
        <CurrentNews />
        <CountrySelect />
        <Footer />
      </div>
    )
  }
}

export default App;
