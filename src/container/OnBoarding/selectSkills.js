import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import UiCollapsable from '../../components/UiCollapsable';
import UiHeading from '../../components/UiHeading';
import UiButton from '../../components/UiButton';
import UiChip from '../../components/UiChip';

import { offer } from './WhatYouOffer';
import './styles.scss';

class SelectSkills extends Component {
  constructor() {
    super();
    this.state = {
      select_screen: null,
      open: false,
    };
  }

  componentDidMount() {
    console.log(offer, 'offer');
    this.setState({
      select_screen: offer,
    });
  }

  render() {
    let { select_screen } = this.state;

    if (!this.state.select_screen) {
      return <h1>LOADING...................</h1>;
    } else {
      return (
        <Col xs={12}>
          <Col xs={12} className="sel_heading_wrapper_col">
            <UiHeading type="h4" className="sel_heading_h4" text={select_screen.h4_heading} />
            <UiHeading type="h5" className="sel_heading_h5" text={select_screen.h5_heading} />
          </Col>
          <Col xs={12} className="sel_chips_wrapper">
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
            <UiChip text={'abjkbhjkbhc'} />
          </Col>
          <Col xs={12}>
            <UiButton text={'Weiter'} />
          </Col>
        </Col>
      );
    }
  }
}

export default SelectSkills;
