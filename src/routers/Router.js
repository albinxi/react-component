import * as _ from 'lodash';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { navigationList } from '../components/config/navigation.list';

// Load components page
import Navigation from '../components/navigation';
import Home from '../components/examples/home/home';
import Icon from '../components/examples/icons/icon';
import { Typography } from '../components/examples/typography/typography';
import {
  EasyClass,
  ClassExample,
  ScssClass,
} from '../components/examples/easyClass/export.declaration';

import {
  ButtonExample,
} from '../components/examples/widget/widget.export';


/**
 * Function to call router component
 * @param {*} childRoutes 
 */
const AdapterChildRoutes = (childRoutes) => {
  switch (childRoutes) {
    case '/home':
    case 'home':
      return Home;

    case 'icon':
    case '/icon':
      return Icon;

    case 'typography':
    case '/typography':
      return Typography;

    case 'class':
    case '/class':
      return ClassExample;

    case 'scss':
      return ScssClass;
    case 'easy':
      return EasyClass;
    case 'button':
      return ButtonExample;
  }
};


/**
 * Function to generate router
 */
let baseRoute = null;
const extractRoute = () => {
  return navigationList.map((item, index) => {
    // extract redirect route and default route
    // add baseRoute after this function executed
    if (item.basePage) {
      baseRoute = <>
        <Route exact path="/" render={() => (
          <Redirect to={`/${item.to}`} />
        )} />
        <Route path={`/${item.to}`} component={AdapterChildRoutes(item.to)} />
      </>
    }

    return (
      _.isUndefined(item.basePage) && <Route
        path={[`/${item.to}/:childRoute`, `/${item.to}`]}
        key={`route-item-${index}`}
        children={({ match }) => (
          <Route
            exact
            path={`${!_.isEmpty(match.params) ? `/${item.to}/` + match.params.childRoute : `/${item.to}`}`}
            component={!_.isEmpty(match.params) ? AdapterChildRoutes(match.params.childRoute) : AdapterChildRoutes(match.url)}
          />
        )}
      />
    );
  });
}

const AppRouter = () => (
  <Router>
    <Navigation />
    <content>
      <Switch>
        {extractRoute()}
        {baseRoute}
      </Switch>
    </content>
  </Router>
);

export default AppRouter;
