import React from 'react';
import * as _ from 'lodash';

import { IconTextInput } from '../../input/input';
import { iconList } from '../../config/icon.list';
import { BasicCard, CardHeader, CardBody } from '../../card/card';

export default class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,
      criteria: ''
    };

    this.onChangeDelegate = this.onChangeDelegate.bind(this);
    this.searchIcon = this.searchIcon.bind(this);
  }

  onChangeDelegate = (props) => {
    let inputValue = _.get(props, 'target.value') || '';

    this.setState(
      () => ({
        isSearching: !!inputValue,
        criteria: inputValue
      })
    );
  }

  searchIcon = (props) => {
    const { isSearching, criteria } = this.state;
    if (!isSearching) {
      return '';
    }
    return props.includes(criteria) ? '' : 'hide';
  }

  render() {
    let count = 0;
    const cards = iconList.map((item, itemIndex) => {
      return (
        <BasicCard transparent={true} key={itemIndex}>
          <CardHeader
            color="navigation"
            style="p-15"
            title={item.title}
          />
          <CardBody style="p-5">
            <div className="icon-list">
              {item.icons &&
                item.icons.map((eachIcon, index) => {
                  count++;
                  return (
                    <div key={`wrapper-${item.title}-${index}`}
                      className={`icon-list-item ${this.searchIcon(eachIcon)}`}>
                      <i key={`icon-${item.title}-${index}`}
                        className={'zmdi ' + eachIcon}></i>
                      <span key={`label-${item.title}-${index}`}>{eachIcon}</span>
                    </div>
                  );
                })
              }
            </div>
          </CardBody>
        </BasicCard>
      );
    });

    return (
      <div className="container">
        <div className="block-header sticky">
          <h2> Font icon, total {count} icons
            <small>Type to search what you need</small>
          </h2>
          <div className="search">
            <IconTextInput
              inputSize="input-sm font-md"
              iconName="zmdi-search"
              onChange={this.onChangeDelegate}
            />
          </div>
        </div>
        {cards}
      </div>
    );
  }
}
