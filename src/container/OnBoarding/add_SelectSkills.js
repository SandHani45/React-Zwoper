import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { style_rnd_thin_btn } from '../../theme/global.js';
import UiCollapsable from '../../components/UiCollapsable';
import UiHeading from '../../components/UiHeading';
import UiButton from '../../components/UiButton';
import UiChip from '../../components/UiChip';

import { share } from './WhatYouShare';
import './styles.scss';

class Add_SelectSkills extends Component {
  constructor() {
    super();
    this.state = {
      add_screen: null,
      open: false,
    };
  }

  componentDidMount() {
    console.log('dcdc', this.props);
    this.setState({
      add_screen: this.props.data,
    });
  }

  render() {
    let { add_screen } = this.state;

    if (!this.state.add_screen) {
      return <h1>LOADING...................</h1>;
    } else {
      return (
        <Col xs={12}>
          <Col xs={12}>
            <UiHeading
              type="h5"
              style={{ fontWeight: '100', fontSize: '12px', textAlign: 'left' }}
              text={add_screen.h5_heading}
            />
          </Col>
          <Col xs={12} style={{ margin: '0px 0px 25px 0px' }}>
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
            <UiButton text={'Eigenes Schlagwort…'} {...style_rnd_thin_btn} withIcons={true} />
          </Col>
          <Col xs={12}>
            <UiButton text={'Weiter'} />
          </Col>
        </Col>
      );
    }
  }
}

export default Add_SelectSkills;
