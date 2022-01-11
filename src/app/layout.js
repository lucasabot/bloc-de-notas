import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'redux/store';
import { HOME, QUOTES, BLOC } from 'constants/routes';

import Topbar from './components/Topbar';
import Home from './screens/Home';
import Quotes from './screens/Quotes';
import Bloc from './screens/Bloc';
import styles from './styles.module.scss';

const App = () => (
  <div className={styles.container}>
    <Topbar />
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={QUOTES} component={Quotes} />
        <Route exact path={BLOC} component={Bloc} />
        <Route render={() => <Redirect to={HOME} />} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;
