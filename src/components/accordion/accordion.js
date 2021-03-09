import * as _ from 'lodash';
import React from 'react';

import './accordion.scss';

export const AccordionGroup = (props) => {
  return (
    <div className="accordion-group">
      {props.children}
    </div>
  );
}

export class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }


  onAccordionClick = () => {
    this.setState(() => ({
      isActive: !this.state.isActive
    }));
  }

  componentWillMount() {
    this.setState(() => ({
      isActive: this.props.active
    }));
  }

  render() {
    return (
      <div className="accordion-collapse">
        <div className={`accordion-heading${this.state.isActive ? ' active' : ''}`}>
          <h5 className="accordion-title">
            <a className={`${this.state.isActive ? '' : 'collapsed'}`} onClick={this.onAccordionClick}>
              {this.props.title}
            </a>
          </h5>
        </div>
        <div className={`collapse${this.state.isActive ? '' : ' collapsed'}`}>
          <div className={`accordion-body`}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
