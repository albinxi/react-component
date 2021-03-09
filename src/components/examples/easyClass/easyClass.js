import React from 'react';
import * as _ from 'lodash';

import { Font, Box } from '../../config/class.config';
import { BasicCard, CardHeader, CardBody } from '../../card/card';

import '../../../style/core.easy.scss'

export class EasyClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const font = Font;
    const box = Box;

    const fontSettings = (font.range || []).map((rangeItem, rangeIndex) => {
      return (
        <div className="icon-list-item"
          key={'list-item-' + font.prefix + font.list[rangeIndex] + rangeIndex}>
          <span>{font.prefix + font.list[rangeIndex] + ': ' + rangeItem + 'px;'}</span>
        </div>
      );
    });

    const marginSettings = (box.range || []).map((rangeItem, rangeIndex) => {
      return (
        <React.Fragment key={'icon-list-wrapper-' + rangeIndex}>
          <div className="icon-list-item" key={'list-item-' + box.margin.base.prefix + rangeIndex}>
            <span>{box.margin.base.prefix + rangeItem} {`{ margin: ${rangeItem}px; }`}</span>
          </div>
          <div className="icon-list-item" key={'list-item-' + box.margin.left.prefix + rangeIndex}>
            <span>{box.margin.left.prefix + rangeItem} {`{ margin-left: ${rangeItem}px; }`}</span>
          </div>
          <div className="icon-list-item" key={'list-item-' + box.margin.right.prefix + rangeIndex}>
            <span>{box.margin.right.prefix + rangeItem} {`{ margin-right: ${rangeItem}px; }`}</span>
          </div>
        </React.Fragment>
      );
    });

    const paddingSettings = (box.range || []).map((rangeItem, rangeIndex) => {
      return (
        <React.Fragment key={'icon-list-wrapper-' + rangeIndex}>
          <div className="icon-list-item" key={'list-item-' + box.padding.base.prefix + rangeIndex}>
            <span>{box.padding.base.prefix + rangeItem} {`{ padding: ${rangeItem}px; }`}</span>
          </div>
          <div className="icon-list-item" key={'list-item-' + box.padding.left.prefix + rangeIndex}>
            <span>{box.padding.left.prefix + rangeItem} {`{ padding-left: ${rangeItem}px; }`}</span>
          </div>
          <div className="icon-list-item" key={'list-item-' + box.padding.right.prefix + rangeIndex}>
            <span>{box.padding.right.prefix + rangeItem} {`{ padding-right: ${rangeItem}px; }`}</span>
          </div>
        </React.Fragment>
      );
    });

    return (
      <div className="container">
        <div className="block-header sticky">
          <h2> Easy Class
            <small>Global class for quick reference</small>
          </h2>
        </div>
        <BasicCard transparent={true}>
          <CardHeader
            color="navigation"
            style="p-10"
            title="Font Settings"
            subtitle="Declare global variable font size"
          />
          <CardBody style="p-5">
            <div className="icon-list">
              {fontSettings}
            </div>
          </CardBody>
        </BasicCard>

        <BasicCard transparent={true}>
          <CardHeader
            color="navigation"
            style="p-10"
            title="Margin Settings"
            subtitle="Directly use class name to apply settings."
          />
          <CardBody style="p-5">
            <div className="icon-list">
              {marginSettings}
            </div>
          </CardBody>
        </BasicCard>

        <BasicCard transparent={true}>
          <CardHeader
            color="navigation"
            style="p-10"
            title="Padding Settings"
            subtitle="Directly use class name to apply settings."
          />
          <CardBody style="p-5">
            <div className="icon-list">
              {paddingSettings}
            </div>
          </CardBody>
        </BasicCard>
      </div>
    );
  }
}
