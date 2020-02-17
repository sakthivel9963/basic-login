import React from 'react';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import IsAuthenticate from './IsAuthenticate';

const App: React.FC = () => {
  return (
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
};

export default App;
