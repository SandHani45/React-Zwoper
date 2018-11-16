import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Images from '../../theme/images';
import UiText from '../UiText';
import UiBackButton from '../UiBackButton'

const UiLogo = styled.img`
  width: ${props => (!!props.theme.size ? props.theme.size : '150')}px;
  height: ${props => (!!props.theme.size ? props.theme.size : 'auto')}px;
  `;
  //margin: ${props => (!!props.theme.margin ? props.theme.margin : '50px 0px 0px 0px')};


const UiBack = styled.img`
  width: 15px;
  height: 20;
`;


const Logo = props => {
  return (
    <Row style={{ textAlign: 'center' }}>
      {/* <Col md={12} sm={12}>
        <UiBackButton/>
      </Col> */}
      <UiLogo src={props.color === 'white' ? Images.logo_white : Images.logo} theme={{...this.props}}/>
    </Row>
  );
};

export default Logo;
