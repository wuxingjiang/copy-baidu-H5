import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Containers, Components} from './components/index';

export const routes = (
  <Route path="/" component={Containers.Main}>
      <IndexRoute component={Components.Home}/>
      <Route path="AboutUs" component={Components.AboutUs}/>
      <Route path="Experience" component={Components.Experience}/>
      <Route path="Note" component={Components.Note}/>
  </Route>
);

export default routes;
