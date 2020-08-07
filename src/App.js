import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Palvelut from './pages/Palvelut';
import Toitamme from './pages/Toitamme';
import Meista from './pages/Meista';
import Yhteydenotto from './pages/Yhteydenotto';
import Footer from './page-sections/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/palvelut' component={Palvelut} />
          <Route path='/toitamme' component={Toitamme} />
          <Route path='/meista' component={Meista} />
          <Route path='/yhteydenotto' component={Yhteydenotto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
