import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'redux/store';
import { HOME, QUOTES, BLOC, HISTORY, SURVEY } from 'constants/routes';

import Topbar from './components/Topbar';
import Home from './screens/Home';
import Quotes from './screens/Quotes';
import Bloc from './screens/Bloc';
import History from './screens/History';
import Survey from './screens/Survey';
import styles from './styles.module.scss';

const App = () => (
  <div className={styles.container}>
    <ConnectedRouter history={history}>
      <Topbar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={QUOTES} component={Quotes} />
        <Route exact path={BLOC} component={Bloc} />
        <Route exact path={HISTORY} component={History} />
        <Route exact path={SURVEY} component={Survey} />
        <Route render={() => <Redirect to={HOME} />} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;
