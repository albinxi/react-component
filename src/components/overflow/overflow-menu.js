import * as _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

import './overflow-menu.scss';

export default class OverflowMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggle: false
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.state.isToggle && this.setState(() => ({
        isToggle: !this.state.isToggle
      }));
    }
  }

  setWrapperRef = (node) => this.wrapperRef = node;

  onOverFlowClick = () => {
    this.setState(() => ({
      isToggle: !this.state.isToggle
    }));
  }

  onClick = (props) => {
    this.props.onClick && this.props.onClick(props);
  }

  render() {
    const dropDownList = this.props.options && (this.props.options || []).map((item, index) => {
      return (
        <li key={`option-list-${index}`} onClick={this.onClick}>
          {this.props.link &&
            <Link to={'/' + item.to}>
              {item.icon && !_.isEmpty(item.icon) &&
                <i className={'icon zmdi ' + item.icon}></i>
              }
              {item.text}
            </Link>
          }
          {!this.props.link && item.text}
        </li>
      );
    });

    return (
      <ul
        className="actions"
        ref={this.setWrapperRef}
      >
        <li className="drop-down">
          <a onClick={this.onOverFlowClick}>
            <i className="zmdi zmdi-more-vert"></i>
          </a>
          {dropDownList.length &&
            <ul className={`drop-down-list ${this.state.isToggle ? 'on' : 'off'}`}>
              {dropDownList}
            </ul>
          }
        </li>
      </ul>
    );
  }
}
