import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Index1Route from './index1/routes';
import Index2Route from './index2/routes';

function Routes() {

  return (
    <Switch>
      <Route path="/index1" component={Index1Route} />
      <Route path="/index2" component={Index2Route} />
    </Switch>
  )
};

export default Routes;

