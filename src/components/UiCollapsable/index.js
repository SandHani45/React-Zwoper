import React, { Component } from 'react';
import { Col, Collapse, Well } from 'react-bootstrap';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import UiChip from '../UiChip';

const Heading = styled.h3`
  background-color: white;
  border-radius: 10px;
  padding: 9px;
  font-size: 16px;
`;

class UiCollabsable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Col>
        <Col xs={12}>
          <Heading onClick={() => this.setState({ open: !this.state.open })}>
            {this.props.heading}
            <span style={{ float: 'right' }}>{this.state.open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </Heading>
        </Col>
        <Col xs={12}>
          <Collapse in={this.state.open}>
            <div>
              <UiChip text={'abjkbhjkbhc'} />
              <UiChip text={'abjkbhjkbhc'} />
              <UiChip text={'abjkbhjkbhcdfbdfbdfb'} />
              <UiChip text={'abjkbhjkbhc'} />
              <UiChip text={'abjkbhjkbhc'} />
            </div>
          </Collapse>
        </Col>
      </Col>
    );
  }
}

export default UiCollabsable;
