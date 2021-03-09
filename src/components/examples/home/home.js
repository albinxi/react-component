import React from 'react';
import { Link } from 'react-router-dom';
import { navigationList } from '../../config/navigation.list';

import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        active: true
      }));
    }, 300);
  }

  extractNavigation = () => {
    return navigationList.map((item, index) => {
      return item.dashboardDisplay && (
        <li
          className='menu-item'
          key={`menu-item-${index}`}
        >
          <Link to={`/${item.to}`}>
            <label className="menu-item-hover">{item.label}</label>
          </Link>
          {item.children &&
            <ol className={`home-sub-menu split-${item.children.length}`}>
              {item.children.map((childItem, childIndex) => {
                return (
                  <li
                    className='menu-item'
                    key={`sub-menu-item-${childIndex}`}
                  >
                    <Link to={`/${childItem.to}`}>
                      <label className="menu-item-hover">{childItem.label}</label>
                    </Link>
                  </li>
                );
              })}
            </ol>
          }
        </li>
      );
    });
  }

  render() {
    return (
      <nav className={`home-menu ${this.state.active ? 'active' : ''}`}>
        <ol>
          {this.extractNavigation()}
        </ol>
      </nav>
    );
  }
}

