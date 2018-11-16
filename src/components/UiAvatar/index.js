import React, { Component } from 'react';
import styled from 'styled-components';
import './styles.scss';

const Avtar = styled.img`
  width: ${props => (props.width ? props.width : '110px')};
  height: ${props => (props.height ? props.height : '110px')};
  border-radius: 55px;
`;

export default class UiAvatar extends Component {
  render() {
    const { source, height, width, className, size, style } = this.props;
    //   console.log(this.props);
    return <Avtar src={source} className={className} height={size} width={size} style={{ ...style }} />;
  }
}
