import React from 'react';
import { useHistory, Switch, Route, } from 'react-router-dom';

// 登录页
import Login from './login';

// 首页
import Index from './Index';


function Routes(props) {
  // 全局路由解决方案
  const history = useHistory();
  window.his = history;

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Index>
        {/* <Route /> */}
        {props.children}
      </Index>
    </Switch>
  )
};

export default Routes;
