import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import UiBackButton from '../../../components/UiBackButton';
import UiLogo from '../../../components/Logo';
import images from '../../../theme/images';

import NameScreen from './NameScreen';
import AddressScreen from './AddressScreen';
import Register_SuccessScreen from './SuccessScreen';
import LoginScreen from './LoginScreen';

export var Main = props => (
  <Grid className="padd-marg-0">
    <UiBackButton hideRight={true} />
    <Row className="background" alt="background">
      <Col xs={12} className="pull-right">
        <img src={images.decor_buildings} className="decor-image" />
      </Col>

      {props.children}
    </Row>
  </Grid>
);

export var Main_Login = () => (
  <Main>
    <LoginScreen />
  </Main>
);
export var Register_Name = () => (
  <Main>
    <NameScreen />
  </Main>
);
export var Register_Address = () => (
  <Main>
    <AddressScreen />
  </Main>
);

{
  /* <Register_AddressScreen />,
<Register_EmailScreen />,
<Register_SuccessScreen /> */
}
