import React, { Component } from 'react';
import styled from 'styled-components';
import './styles.scss';

const Chip = styled.div``;

class UiChip extends Component {
  state = {
    checked: false,
    class_before: 'white-green',
    class_after: 'blue-white',
    className: 'white-green',
  };
  tapStatus = () => {
    this.setState({
      checked: !this.state.checked,
      className: !this.state.checked
        ? this.state.class_after
        : this.state.class_before,
    });
  };

  render() {
    let { text } = this.props;
    let { className } = this.state;
    return (
      <Chip className={`chip ${className}`} onClick={() => this.tapStatus()}>
        <span>{text}</span>
      </Chip>
    );
  }
}

export default UiChip;
