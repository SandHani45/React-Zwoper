import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import Images from '../../theme/images';

import UiText from '../UiText';

const UiBack = styled.img`
  width: 15px;
  height: 20;
`;

class UiBackButton extends Component {
  render() {
    let { props } = this;
    return (
      <Row style={{ margin: '18px 0px 80px 0px' }}>
        <Col md={6} sm={6} xs={6} className="align-left">
          {!props.hideLeft ? <UiBack src={Images.backIcon} /> : ''}
        </Col>
        <Col md={6} sm={6} xs={6} className="align-right">
          {!props.hideRight ? <UiText color="#44AC6B" size={18} bold={'bold'} text={'Einloggen'} /> : ''}
        </Col>
      </Row>
    );
  }
}

export default UiBackButton;
