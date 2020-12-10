import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './index';

function Routes(props) {
  const {
    match: { path },
  } = props;

  return (
    <Switch>
      <Route exact path={`${path}/index`} component={Index} />
    </Switch>
  );
};

export default Routes;
