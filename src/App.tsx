import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form';
import NotFound from './NotFound';
import IsAuthenticate from './IsAuthenticate';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Form />
      </Route>
      <Route exact path="/isAuthenticate">
        <IsAuthenticate />
      </Route>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
