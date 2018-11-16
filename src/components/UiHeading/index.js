import React, { Component } from 'react';
import './style.scss';

export default class Heading extends Component {
  renderHeading = props => {
    let { type, text, size, color, style, className } = props;
    console.log(style);
    switch (type) {
      case 'h1':
        return (
          <h1 className={className} style={{ letterSpacing: '1px', color: color, fontSize: size, ...style }}>
            {text}
          </h1>
        );

      case 'h2':
        return (
          <h2 className={className} style={{ letterSpacing: '1px', color: color, fontSize: size, ...style }}>
            {text}
          </h2>
        );

      case 'h3':
        return (
          <h3 className={className} style={{ letterSpacing: '1px', color: color, fontSize: size, ...style }}>
            {text}
          </h3>
        );

      case 'h4':
        return (
          <h4 className={className} style={{ letterSpacing: '1px', color: color, fontSize: size, ...style }}>
            {text}
          </h4>
        );

      case 'h5':
        return (
          <h5 className={className} style={{ letterSpacing: '1px', color: color, fontSize: size, ...style }}>
            {text}
          </h5>
        );

      case 'h6':
        return <h6>{text}</h6>;

      default:
        return <h4>{text}</h4>;
    }
  };

  render = () => <div className={'col-xs-12 heading'}>{this.renderHeading(this.props)}</div>;
}
