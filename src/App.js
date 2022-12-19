import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Bonus, Discount, Home} from './pages';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Route exact={true} path="/" component={Home} />
      <Route path="/bonus" component={Bonus} />
      <Route path="/discount" component={Discount} />
    </Router>
  );
}

export default App;
