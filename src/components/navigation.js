import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';
import { navigationList } from './config/navigation.list';

import '../style/core.navigation.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navList = navigationList;

    const navigation = (navList || []).map((item, index) => {
      return (
        <li key={'nav-li-' + index}>
          <Link to={'/' + item.to}>
            {item.icon && !_.isEmpty(item.icon) &&
              <i className={'icon zmdi ' + item.icon}></i>
            }
            <label>{item.label}</label>
          </Link>
          {item.children &&
            <ul className="second-nav">
              {
                item.children.map((childItem, childIndex) => {
                  return (
                    <li key={'sec-nav-li-' + childIndex}>
                      <Link to={'/' + childItem.to}>
                        {childItem.icon && !_.isEmpty(childItem.icon) &&
                          <i className={'icon zmdi ' + childItem.icon}></i>
                        }
                        <label>{childItem.label}</label>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          }
        </li>
      );
    });

    return (
      <header className="navigation">
        <input id="hamburger" className="hamburger" type="checkbox" />
        <label htmlFor="hamburger" className="hamburger"><i></i></label>
        <nav className="navigation-menu">
          <ul>{navigation}</ul>
        </nav>
      </header>
    );
  };
}
