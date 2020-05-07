import React, { Component } from 'react';
import './App.css';
import { Header, TopStats, CurrentNews, CovidChart, CountrySelect, Footer} from './Components';

class App extends Component {

  render() {
   
    return (
      <div className="parallax">
      <div className="Container" >
        <Header />
        <TopStats />
        <CountrySelect />
        <CovidChart />
        <CurrentNews />
        <Footer />
      </div>
      </div>
    )
  }
}

export default App;
