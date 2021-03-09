import React from 'react';
import * as _ from 'lodash';

import './card.scss';

export const BasicCard = (props) => {
  return (
    <div
      className={`card${props.transparent ? ' transparent' : ''}${props.border ? '' : ' no-border'} ${props.style ? props.style : ''}`}
    >
      {props.children}
    </div>
  );
};

export const CardHeader = (props) => {
  return (
    <div className={`card-header ${props.style ? props.style : ''}`} color={`${props.color}`}>
      {props.title &&
        <h2>
          {props.title}
          {props.subtitle &&
            <small>{props.subtitle}</small>
          }
        </h2>
      }
    </div>
  );
};

export const CardBody = (props) => {
  return (
    <div className={`card-body ${props.style}`}>
      {props.children}
    </div>
  );
};

