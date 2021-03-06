import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          {/*@TODO add later the Error Path*/}
          <Route
            path='/'
            component={HomePage}
            exact
          />
        </Switch>
      </main>
    );
  }
}

export default App;
