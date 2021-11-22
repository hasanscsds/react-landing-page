import React from 'react';
import Nav from './HomePage/Nav';
import Categories from './HomePage/CategoriesSec';
import Home from './HomePage/Home';
import SmartWatches from './Recomended/SmartWatches';
import NewCollection from './newCollection/NewCollection';
import Ads from './ads/Ads';
import Trend from './trend/Trend';
import Footer from './footer/Footer';
import './HomePage/styles/style.scss';
import './HomePage/styles/responsive.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Categories/>
      <Home/>
      <SmartWatches/>
      <Ads/>
      <NewCollection/>
      <Trend/>
      <Ads/>
      <Footer/>
    </div>
  );
}

export default App;