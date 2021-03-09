import React from 'react';
import * as _ from 'lodash';

import './input.scss';

export class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this.onFocusEvent = this.onFocusEvent.bind(this);
    this.onBlurEvent = this.onBlurEvent.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
  }

  onFocusEvent = (props) => {
    this.setState(() => ({
      isFocused: true
    }));
  }

  onBlurEvent = (props) => {
    this.setState(() => ({
      isFocused: false
    }));
  }

  onChangeEvent = (props) => {
    this.props.onChange && this.props.onChange(props);
  }

  render() {
    const { isFocused } = this.state;
    return (
      <div className={`input-line ${isFocused ? 'input-toggled' : ''}`}>
        {this.props.children}
        <input
          type="text"
          className={`material-input ${this.props.inputSize ? this.props.inputSize : ''}`}
          onFocus={this.onFocusEvent}
          onBlur={this.onBlurEvent}
          onChange={this.onChangeEvent}
        />
      </div>
    );
  }
}
export class IconTextInput extends TextInput {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        onChange={this.props.onChange}
        inputSize={this.props.inputSize}
      >
        {this.props.iconName &&
          <i className={`input-addon-icon zmdi ${this.props.iconName}`}></i>
        }
      </TextInput>
    );
  }
}
